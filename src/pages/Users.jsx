import { useEffect, useState } from "react";
import { Search, Trash2, Pencil, X, UserPlus } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabaseClient";

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
    document.title = "GlowCare Clinic - Users";
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
        { full_name: fullName, email, password, role: "admin" },
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
      item.full_name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        subtitle="Kelola data user admin GlowCare Clinic dari Supabase"
      />

      <div className="bg-white rounded-[28px] p-6 shadow-sm">
        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[320px] h-[48px] pl-11 pr-5 rounded-2xl border border-[#e9ecef] bg-white text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />
          </div>

          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="h-[48px] px-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-2"
          >
            <UserPlus size={17} />
            + Add User
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-5 rounded-[24px] bg-[#f8f9fa]"
          >
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="h-[48px] px-4 rounded-2xl border border-[#e9ecef] outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-[48px] px-4 rounded-2xl border border-[#e9ecef] outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />

            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-[48px] px-4 rounded-2xl border border-[#e9ecef] outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="h-[48px] px-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                {editId ? "Update" : "Tambah"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="h-[48px] px-4 rounded-2xl border bg-white text-gray-500 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>
          </form>
        )}

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-[#f1f3f5]">
                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  User
                </th>
                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Email
                </th>
                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Role
                </th>
                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#f8f9fa] hover:bg-[#f8f9fa] transition"
                >
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                        {item.full_name.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#344767]">
                          {item.full_name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          User GlowCare
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.email}
                  </td>

                  <td className="px-4 py-5">
                    <span className="px-3 py-1 rounded-xl text-xs font-bold bg-pink-100 text-pink-600">
                      {item.role}
                    </span>
                  </td>

                  <td className="px-4 py-5">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 rounded-xl bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="font-bold text-[#344767] text-lg">
              User tidak ditemukan
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Data user belum ada atau keyword tidak cocok.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}