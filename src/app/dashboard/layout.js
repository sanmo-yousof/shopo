import DashboardMenu from "@/components/dashboardComponents/dashboardmenu";


export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout bg-gray-50">
      <div className="max-w-7xl px-2 mx-auto">
        <div className="flex gap-6">
        <DashboardMenu />
        <div className="dashboard-content overflow-x-scroll max-w-7xl w-full  py-4">
          {children}
          </div>
      </div>
      </div>
    </div>
  );
}
