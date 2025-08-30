import DashboardMenu from "@/components/dashboardComponents/dashboardmenu";
import DashBoardMobileMenu from "@/components/dashboardComponents/mobileMenu";


export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout  bg-gray-50">
      <div className="max-w-7xl  lg:px-2 mx-auto">
        <div className="flex gap-2 md:gap-4 lg:gap-6">
        <DashboardMenu />
        <div className="dashboard-content w-full px-2 lg:px-0 py-4">
          <DashBoardMobileMenu/>
          {children}
          </div>
      </div>
      </div>
    </div>
  );
}
