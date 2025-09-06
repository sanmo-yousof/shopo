"use client";

import { getCart } from "@/utils/loaclSorage";
import { useEffect, useState } from "react";

const OrderSummary = ({ formId, error, setPaymentMethod }) => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = () => {
      setOrderData(getCart());
      setLoading(false);
    };

    loadCart();

    // listen to custom event
    window.addEventListener("CartUpdated", loadCart);
    return () => {
      window.removeEventListener("CartUpdated", loadCart);
    };
  }, []);

  const subtotal = orderData.reduce(
    (acc, item) => acc + item.price * item.orderQuantity,
    0
  );

  if (loading) {
    // 🔹 Skeleton while loading
    return (
      <div className="space-y-6 mt-12 lg:mt-0 animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-32" />
        <div className="space-y-4 p-4 lg:p-10 rounded-md border">
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-20" />
            <div className="h-4 bg-gray-200 rounded w-16" />
          </div>
          <hr />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center py-2">
              <div className="h-4 bg-gray-200 rounded w-32" />
              <div className="h-4 bg-gray-200 rounded w-12" />
            </div>
          ))}
          <div className="flex justify-between pt-2">
            <div className="h-4 bg-gray-200 rounded w-20" />
            <div className="h-4 bg-gray-200 rounded w-16" />
          </div>
          <div className="h-10 bg-gray-200 rounded mt-6" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-12 lg:mt-0">
      <h2 className="text-base font-semibold">Order Summary</h2>

      <div className="space-y-4 p-4 lg:p-10 rounded-md border">
        {/* Header */}
        <div className="flex justify-between text-sm font-medium text-gray-600 uppercase">
          <span>Product</span>
          <span>Total</span>
        </div>
        <hr />

        {/* Items */}
        {orderData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{item.category}</span>
                  <span className="text-xs bg-gray-100 px-1 rounded">
                    ×{item.orderQuantity}
                  </span>
                </div>
                <div className="text-xs text-gray-600">{item.name}</div>
              </div>
              <div className="font-medium">
                ${(item.price * item.orderQuantity).toFixed(2)}
              </div>
            </div>
            {index < orderData.length && <hr />}
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-between text-sm font-medium pt-2">
          <span>SUBTOTAL</span>
          <span className="text-red-500">${subtotal.toFixed(2)}</span>
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
          <span className="text-red-500">${subtotal.toFixed(2)}</span>
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
              onChange={() => setPaymentMethod("Direct Bank Transfer")}
              required
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
              onChange={() => setPaymentMethod("Cash on Delivery")}
              required
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
              onChange={() => setPaymentMethod("Credit/Debit Card or PayPal")}
              required
            />
            <label htmlFor="card-paypal" className="font-medium text-sm">
              Credit/Debit Card or PayPal
            </label>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-[12px] font-semibold">{error}</p>
        )}

        {/* Place Order Button */}
        <button
          type="submit"
          form={formId}
          disabled={orderData.length === 0}
          className={`mt-6 w-full px-6 py-2 rounded 
          ${
            orderData.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
          }`}
        >
          Place Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
