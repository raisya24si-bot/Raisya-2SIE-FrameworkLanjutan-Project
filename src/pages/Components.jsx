import {
  MdDashboard,
  MdPeople,
  MdShoppingBag,
  MdRocketLaunch,
  MdFavorite,
} from "react-icons/md";

import SoftButton from "../components/ui/SoftButton";
import SoftCard from "../components/ui/SoftCard";
import StatCard from "../components/ui/StatCard";
import SoftBadge from "../components/ui/SoftBadge";
import SoftInput from "../components/ui/SoftInput";
import SoftSelect from "../components/ui/SoftSelect";
import SoftAlert from "../components/ui/SoftAlert";
import SoftAvatar from "../components/ui/SoftAvatar";
import SoftProgress from "../components/ui/SoftProgress";
import SoftTable from "../components/ui/SoftTable";
import SearchBar from "../components/ui/SearchBar";
import SoftNavbar from "../components/ui/SoftNavbar";
import SoftBreadcrumb from "../components/ui/SoftBreadcrumb";
import CustomerCard from "../components/ui/CustomerCard";
import ActivityTimeline from "../components/ui/ActivityTimeline";

export default function Components() {

  // DATA TABLE
  const tableColumns = ["Name", "Email", "Status", "Role"];

  const tableData = [
    {
      name: "Raisya Revalina",
      email: "raisya@gmail.com",
      status: "Active",
      role: "Admin",
    },

    {
      name: "Nabila Putri",
      email: "nabila@gmail.com",
      status: "Pending",
      role: "Customer",
    },

    {
      name: "Cindy Amelia",
      email: "cindy@gmail.com",
      status: "Inactive",
      role: "Staff",
    },
  ];

  // DATA TIMELINE
  const activities = [
    {
      title: "New customer registered",
      time: "2 minutes ago",
    },

    {
      title: "Order successfully completed",
      time: "10 minutes ago",
    },

    {
      title: "Payment has been verified",
      time: "1 hour ago",
    },
  ];

  return (

    <div className="min-h-screen bg-[#f8f9fa] p-6">

      {/* NAVBAR COMPONENT */}
      <SoftNavbar title="Components" />


      {/* BREADCRUMB COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Breadcrumb Component
        </h2>

        <SoftBreadcrumb
          items={["Dashboard", "Pages", "Components"]}
        />

      </SoftCard>


      {/* BUTTON COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Button Component
        </h2>

        <div className="flex flex-wrap gap-4">

          <SoftButton variant="primary">
            Primary
          </SoftButton>

          <SoftButton variant="info">
            Info
          </SoftButton>

          <SoftButton variant="success">
            Success
          </SoftButton>

          <SoftButton variant="danger">
            Danger
          </SoftButton>

          <SoftButton variant="dark">
            Dark
          </SoftButton>

          <SoftButton outline>
            Outline
          </SoftButton>

          <SoftButton size="sm">
            Small
          </SoftButton>

          <SoftButton size="lg">
            Large Button
          </SoftButton>

          <SoftButton icon={<MdRocketLaunch />}>
            With Icon
          </SoftButton>

          <SoftButton
            size="icon"
            icon={<MdFavorite />}
          />

        </div>

      </SoftCard>


      {/* CARD COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Soft Card Component
        </h2>

        <p className="text-sm font-semibold text-[#8392ab]">
          Ini adalah contoh reusable card dengan style Soft UI Dashboard.
        </p>

      </SoftCard>


      {/* STAT CARD COMPONENT */}
      <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Today's Revenue"
          value="$3,240"
          growth="+12%"
          icon={<MdDashboard />}
        />

        <StatCard
          title="Customers"
          value="1,240"
          growth="+8%"
          icon={<MdPeople />}
        />

        <StatCard
          title="Orders"
          value="320"
          growth="+15%"
          icon={<MdShoppingBag />}
        />

        <StatCard
          title="Visitors"
          value="8,920"
          growth="+20%"
          icon={<MdRocketLaunch />}
        />

      </div>


      {/* BADGE COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Badge Component
        </h2>

        <div className="flex flex-wrap gap-3">

          <SoftBadge color="primary">
            Primary
          </SoftBadge>

          <SoftBadge color="success">
            Success
          </SoftBadge>

          <SoftBadge color="info">
            Info
          </SoftBadge>

          <SoftBadge color="warning">
            Warning
          </SoftBadge>

          <SoftBadge color="danger">
            Danger
          </SoftBadge>

          <SoftBadge color="dark">
            Dark
          </SoftBadge>

        </div>

      </SoftCard>


      {/* FORM COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Form Component
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* INPUT */}
          <SoftInput
            label="Customer Name"
            placeholder="Enter customer name"
          />

          {/* SELECT */}
          <SoftSelect
            label="Status"
            options={[
              {
                label: "Active",
                value: "active",
              },

              {
                label: "Pending",
                value: "pending",
              },

              {
                label: "Inactive",
                value: "inactive",
              },
            ]}
          />

          {/* SEARCHBAR */}
          <div>

            <label className="mb-2 block text-sm font-bold text-[#252f40]">
              Search
            </label>

            <SearchBar placeholder="Search customer..." />

          </div>

        </div>

      </SoftCard>


      {/* ALERT COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Alert Component
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <SoftAlert color="primary">
            This is primary alert
          </SoftAlert>

          <SoftAlert color="info">
            This is info alert
          </SoftAlert>

          <SoftAlert color="success">
            This is success alert
          </SoftAlert>

          <SoftAlert color="warning">
            This is warning alert
          </SoftAlert>

          <SoftAlert color="danger">
            This is danger alert
          </SoftAlert>

          <SoftAlert color="dark">
            This is dark alert
          </SoftAlert>

        </div>

      </SoftCard>


      {/* AVATAR COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Avatar Component
        </h2>

        <div className="flex flex-wrap items-center gap-4">

          <SoftAvatar
            name="Raisya"
            size="sm"
          />

          <SoftAvatar
            name="Raisya"
            size="md"
          />

          <SoftAvatar
            name="Raisya"
            size="lg"
          />

          <SoftAvatar
            name="Customer"
            size="lg"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          />

        </div>

      </SoftCard>


      {/* PROGRESS COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Progress Component
        </h2>

        <div className="space-y-5">

          <SoftProgress
            value={25}
            color="primary"
          />

          <SoftProgress
            value={50}
            color="info"
          />

          <SoftProgress
            value={75}
            color="success"
          />

          <SoftProgress
            value={90}
            color="danger"
          />

        </div>

      </SoftCard>


      {/* TABLE COMPONENT */}
      <div className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Table Component
        </h2>

        <SoftTable
          columns={tableColumns}
          data={tableData}
        />

      </div>


      {/* CUSTOMER CARD COMPONENT */}
      <SoftCard className="mb-6">

        <h2 className="mb-4 text-lg font-bold text-[#252f40]">
          Customer Card Component
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <CustomerCard
            name="Raisya Revalina"
            email="raisya@gmail.com"
            status="Active"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          />

          <CustomerCard
            name="Nabila Putri"
            email="nabila@gmail.com"
            status="Pending"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
          />

        </div>

      </SoftCard>


      {/* ACTIVITY TIMELINE COMPONENT */}
      <ActivityTimeline activities={activities} />

    </div>
  );
}