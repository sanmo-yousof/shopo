
import RecentOrders from "@/components/dashboardComponents/recentOrders";
import { dashboardOverviewCards } from "@/utils/utils";


const Overview = () => {
  return (
    <>
      <section>
        <h2 className="lg:text-2xl smtext-xl text-base font-semibold text-gray-700">
          Overview
        </h2>
        <RecentOrders/>
      </section>
    </>
  );
};

export default Overview;
