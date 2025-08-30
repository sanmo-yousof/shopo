import BillingFrom from "@/components/checkOutParts/billingForm";
import OrderSummary from "@/components/checkOutParts/orderSummary";
import Discount from "@/components/shopParts/discount";

const Checkout = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
        <h2 className="sectionHeading">Checkout</h2>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <BillingFrom />

          {/* Order Summary */}
          <OrderSummary />
        </div>
      </div>
      <Discount />
    </div>
  );
};

export default Checkout;
