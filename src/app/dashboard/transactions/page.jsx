
import TransactionTable from "@/components/dashboardComponents/transactionTable";


const Transaction = () => {
  return(
    <>
        <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
          Transactions
        </h2>
        <TransactionTable/>
      </>
  );
};

export default Transaction;