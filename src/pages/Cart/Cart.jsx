import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Nếu xài react-router
import { useProductStore } from "../../stores/shop/useProductStore";
import purchaseApi from "../../services/apis/purchase.api";

const Cart = () => {

//   const { cart } = useProductStore();


  const [items, setItems] = useState([]);

  let loadPurchases = async () => {
    const response = await purchaseApi.getPurchases({status: -1});
    setItems(response.data);
    console.log(response);
  }

  useEffect(()=>{
    loadPurchases();
  },[])


  console.log(items);
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-gray-50 to-white py-12 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-2xl shadow-2xl bg-white p-8">
        {/* Back to Home */}
        <div className="mb-8 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-800 font-semibold transition"
          >
            <svg
              width={22}
              height={22}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            🛒 Shopping Cart
          </h2>
        </div>
        {items.length === 0 ? (
          <div className="text-gray-400 text-xl font-semibold text-center py-20">
            Cart is empty...
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-4 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-xl mr-4 border"
                  />
                  <div className="flex-1">
                    <div className="text-lg font-medium">{item.name}</div>
                    <div className="text-sm text-gray-400">
                      x{item.buy_count} • ${item.price}
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:underline ml-6"
                    onClick={async() => {
                        purchaseApi.deletePurchase([item._id]);
                        loadPurchases();
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-10">
              <span className="text-xl font-bold">
                Total: <span className="text-pink-600">$</span>
              </span>
              <button
                
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
