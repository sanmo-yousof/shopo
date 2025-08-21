import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  const orderItems = [
    {
      name: "Apple Watch",
      description: "64GB, Black, 44mm, Chain Belt",
      quantity: 1,
      price: 38,
    },
    {
      name: "Apple Watch",
      description: "64GB, Black, 44mm, Chain Belt",
      quantity: 1,
      price: 38,
    },
    {
      name: "Apple Watch",
      description: "64GB, Black, 44mm, Chain Belt",
      quantity: 1,
      price: 38,
    },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="space-y-6 mt-12 lg:mt-0">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <div className="space-y-4 p-4 lg:p-10 border">
        {/* Header */}
        <div className="flex justify-between text-sm font-medium text-gray-600 uppercase">
          <span>Product</span>
          <span>Total</span>
        </div>
        <hr />

        {/* Items */}
        {orderItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{item.name}</span>
                  <span className="text-xs bg-gray-100 px-1 rounded">
                    ×{item.quantity}
                  </span>
                </div>
                <div className="text-xs text-gray-600">{item.description}</div>
              </div>
              <div className="font-medium">${item.price}</div>
            </div>
            {index < orderItems.length - 1 && <hr />}
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-between text-sm font-medium pt-2">
          <span>SUBTOTAL</span>
          <span>${subtotal}</span>
        </div>

        {/* Shipping */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>SHIPPING</span>
            <span>$0</span>
          </div>
          <div className="text-sm font-medium">Free Shipping</div>
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg font-bold pt-4 border-t">
          <span>Total</span>
          <span className="text-red-600">${subtotal}</span>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              id="bank-transfer"
              value="bank-transfer"
              className="accent-black"
            />
            <label htmlFor="bank-transfer" className="font-medium text-sm">
              Direct Bank Transfer
            </label>
          </div>
          <div className="ml-6 sm:text-sm text-xs text-gray-600 bg-gray-50 p-3 rounded">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference.
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              id="cash-delivery"
              value="cash-delivery"
              className="accent-black"
            />
            <label htmlFor="cash-delivery" className="font-medium text-sm">
              Cash on Delivery
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              id="card-paypal"
              value="card-paypal"
              className="accent-black"
            />
            <label htmlFor="card-paypal" className="font-medium text-sm">
              Credit/Debit Card or PayPal
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <Button className="w-full" variant="blackBg" size="lg">
          Place Order Now
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
