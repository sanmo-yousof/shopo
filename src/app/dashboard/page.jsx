import RecentOrders from "@/dashboardComponents/overviewParts/recentOrders";
import { dashboardOverviewCards } from "@/utils/utils";


const Overview = () => {
  return (
    <>
      <section>
        <h2 className="lg:text-2xl smtext-xl text-base font-semibold text-gray-700">
          Overview
        </h2>
        <div className="grid mt-4 gap-4 grid-cols-2 lg:grid-cols-4">
          {dashboardOverviewCards.map((item, indx) => {
            const Icon = item.icon;
            return (
              <div className="bg-blue-100  space-y-2  rounded flex flex-col justify-center  lg:p-8 p-4 border" key={indx}>
                <div className="md:w-14 md:h-14 h-10 w-10 mx-auto rounded-full flex items-center justify-center text-white bg-[#1867d6]">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="lg:text-xl font-semibold text-center text-base text-gray-600">
                  {item.value}
                </h2>
                <p className="text-center text-xs sm:text-sm text-gray-700 md:text-base">{item?.label}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-10">
        <RecentOrders/>
      </section>
    </>
  );
};

export default Overview;
