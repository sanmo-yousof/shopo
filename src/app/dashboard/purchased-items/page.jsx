import PurchaseTable from "@/components/dashboardComponents/purchaseTable";

const PurchaseItem = () => {
  return (
    <>
      <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
        Purchase Items
      </h2>
      {/* purchase table  */}
      <PurchaseTable />

      
    </>
  );
};

export default PurchaseItem;
