import { useEffect, useState } from "react";
import { Search, Trash2, Pencil, X, UserPlus, UserRound } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftIconBox from "@/components/ui/SoftIconBox";
import SoftInput from "@/components/ui/SoftInput";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editId, setEditId] = useState(null);

  const getUsers = async () => {
    const { data } = await supabase
      .from("users")
      .select("*")
      .order("created_at", { ascending: false });

    setUsers(data || []);
  };

  useEffect(() => {
    document.title = "GlowCare Clinic - Staff";
    getUsers();
  }, []);

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setEditId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await supabase
        .from("users")
        .update({ full_name: fullName, email, password })
        .eq("id", editId);
    } else {
      await supabase.from("users").insert([
        {
          full_name: fullName,
          email,
          password,
          role: "admin",
        },
      ]);
    }

    resetForm();
    getUsers();
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setFullName(item.full_name);
    setEmail(item.email);
    setPassword(item.password);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus user ini?")) return;

    await supabase.from("users").delete().eq("id", id);
    getUsers();
  };

  const filteredUsers = users.filter(
    (item) =>
      item.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SoftCard className="p-6">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#344767]">
            Staff/Admin Table
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#8392ab]">
            Kelola akun admin dan staff GlowCare Clinic dari Supabase
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8392ab]"
            />

            <input
              type="text"
              placeholder="Search staff..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-[#e9ecef] bg-white pl-10 pr-3 text-sm text-[#344767] outline-none placeholder:text-[#8392ab] focus:border-[#ff0080] md:w-[240px]"
            />
          </div>

          <SoftButton
            size="sm"
            icon={<UserPlus size={15} />}
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
          >
            Add Staff
          </SoftButton>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-6 grid grid-cols-1 gap-4 rounded-2xl bg-[#f8f9fa] p-5 md:grid-cols-4"
        >
          <SoftInput
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <SoftInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <SoftInput
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex gap-2">
            <SoftButton type="submit" size="sm" className="h-10">
              {editId ? "Update" : "Tambah"}
            </SoftButton>

            <button
              type="button"
              onClick={resetForm}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e9ecef] bg-white text-[#8392ab] transition hover:bg-[#f8f9fa] hover:text-[#344767]"
            >
              <X size={17} />
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] text-left">
          <thead>
            <tr className="border-b border-[#f0f2f5]">
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Staff
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Email
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Role
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#f0f2f5] last:border-b-0"
              >
                <td className="px-2 py-4">
                  <div className="flex items-center gap-3">
                    <SoftIconBox size="md">
                      {item.full_name ? (
                        <span className="text-sm font-bold">
                          {item.full_name.charAt(0).toUpperCase()}
                        </span>
                      ) : (
                        <UserRound size={16} />
                      )}
                    </SoftIconBox>

                    <div>
                      <h3 className="text-sm font-bold text-[#344767]">
                        {item.full_name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#8392ab]">
                        GlowCare Staff
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-2 py-4 text-sm font-semibold text-[#67748e]">
                  {item.email}
                </td>

                <td className="px-2 py-4">
                  <SoftBadge color="primary">{item.role}</SoftBadge>
                </td>

                <td className="px-2 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff7e6] text-[#fbcf33] transition hover:bg-[#fff1cc]"
                    >
                      <Pencil size={15} />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffe1e1] text-[#ea0606] transition hover:bg-[#ffd2d2]"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="py-14 text-center">
          <h3 className="text-lg font-bold text-[#344767]">
            Staff tidak ditemukan
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#8392ab]">
            Data staff belum ada atau keyword tidak cocok.
          </p>
        </div>
      )}
    </SoftCard>
  );
}