import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Nếu xài react-router
import { useProductStore } from "../../stores/shop/useProductStore";
import purchaseApi from "../../services/apis/purchase.api";

const Cart = () => {
  const navigate = useNavigate();
  const { setCheckOut, setCart, cart } = useProductStore();
  const [items, setItems] = useState(cart);

  console.log(cart);
  let totalCart = items.length > 0 ? items.reduce((sum, item) => sum + item.price, 0) : 0;

  // Calculate checkout
  let checkout = items.map((item)=>{
    return {
      product_id: item.product._id,
      buy_count: item.buy_count
    }
  })

  console.log(checkout);

  let loadPurchases = async () => {
    const response = await purchaseApi.getPurchases({status: -1});
    setItems(response.data);
    console.log(response);
  }

  useEffect(()=>{
    if (items.length > 0) {
      return;
    }
    loadPurchases();
  },[])


  console.log(items);
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-gray-50 to-white py-12 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-2xl shadow-2xl bg-white p-8">
        {/* Back to Home */}
        <div className="mb-8 flex justify-between items-center">
          <Link
            to="/shop"
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
            Back to Shop
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
                <li key={item._id} className="flex py-4 items-center">
                <NavLink to={`/shop/${item.product.category.name === "Áo thun" ? "fashion" : "mobile-tablet"}/${item.product._id}`}>
                  <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-xl mr-4 border"
                  />
                </NavLink>
                <div className="flex-1">
                    <NavLink to={`/shop/${item.product.category.name === "Áo thun" ? "fashion" : "mobile-tablet"}/${item.product._id}`}>
                      <div className="text-lg font-medium">{item.product.name}</div>
                    </NavLink>
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                    <button
                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-lg font-bold"
                        onClick={async()=>{
                          if (item.buy_count <= 1) {
                            await purchaseApi.deletePurchase([item._id]);
                            loadPurchases();
                            return;
                          }
                          let newCount = item.buy_count - 1;
                          await purchaseApi.updatePurchase({product_id: item.product._id, buy_count: newCount});
                          loadPurchases();
                        }}
                        // disabled={item.buy_count <= 1}
                    >-</button>
                    <span className="mx-2">{item.buy_count}</span>
                    <button
                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 text-lg font-bold"
                        onClick={async()=>{
                          let newCount = item.buy_count + 1;
                          await purchaseApi.updatePurchase({product_id: item.product._id, buy_count: newCount});
                          loadPurchases();
                        }}
                    >+</button>
                    <span className="ml-2">{item.price.toLocaleString()} VND</span>
                    </div>
                </div>
                <button
                    className="text-red-500 hover:underline ml-6 cursor-pointer"
                    onClick={async () => {
                    await purchaseApi.deletePurchase([item._id]);
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
                Total: <span className="text-pink-600">{totalCart.toLocaleString()} VND</span>
              </span>
              <button
                onClick={async()=>{
                  await purchaseApi.buyProducts(checkout);
                  loadPurchases();
                  setCheckOut(items);
                  setTimeout(()=>{
                    navigate('/thank-you');
                  }, 1000)
                }}
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition cursor-pointer"
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
