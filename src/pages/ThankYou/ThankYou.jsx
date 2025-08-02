import React, { useEffect, useState } from 'react'
import purchaseApi from '../../services/apis/purchase.api';
import { Link, Navigate } from 'react-router-dom';
import { useProductStore } from '../../stores/shop/useProductStore';

const ThankYou = () => {
  const { checkout } = useProductStore();
  const [items, setItems] = useState(checkout);

  console.log(items);

  const total = items.length > 0 ? items.reduce((sum, item)=> sum + (item.price * item.buy_count), 0) : 0;

  if (items.length === 0) {
    return <Navigate to={'/404'}></Navigate>
  }

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full">
        <div className="flex flex-col items-center mb-8">
          <svg
            className="mb-4"
            width={60}
            height={60}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ec4899"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" stroke="#f9a8d4" strokeWidth="2.2" fill="#fff0f6"/>
            <path d="M9 12l2 2l4-4" stroke="#ec4899"/>
          </svg>
          <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
            Đặt hàng thành công!
          </h1>
          <p className="text-gray-600 text-center max-w-md">
            Cảm ơn bạn đã đặt hàng.<br/>
            Đơn hàng sẽ được xử lý và giao trong thời gian sớm nhất!
          </p>
        </div>
        {items.length === 0 ? (
          <div className="text-center text-gray-400 mb-6">Chưa có đơn mua nào!</div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-3">Sản phẩm đã mua:</h2>
            <ul className="divide-y divide-gray-200 mb-4">
              {items.map((item) => (
                <li key={item._id} className="flex py-3 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 object-cover rounded-lg border mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{item.product.name}</div>
                    <div className="text-gray-400 text-sm">
                      Số lượng: <b>{item.buy_count}</b> x <span className="text-pink-600">{item.price.toLocaleString()}₫</span>
                    </div>
                  </div>
                  <div className="font-semibold text-pink-600">{(item.price * item.buy_count).toLocaleString()}₫</div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end items-center border-t pt-4">
              <span className="text-lg font-bold">
                Tổng cộng: <span className="text-pink-600">{total.toLocaleString()}₫</span>
              </span>
            </div>
          </div>
        )}
        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-xl shadow transition"
          >
            Về trang chủ
          </Link>
          <Link
            to="/orders"
            className="text-pink-500 underline font-medium hover:text-pink-700 transition"
          >
            Xem lịch sử đơn hàng
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;