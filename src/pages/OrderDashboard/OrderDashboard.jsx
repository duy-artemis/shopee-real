import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import purchaseApi from "../../services/apis/purchase.api";
import { Spin, Tabs, Tag } from "antd";
import { HomeOutlined, PictureOutlined } from "@ant-design/icons";

const statusLabels = {
  1: "Đã hoàn tất",
  "-1": "Đơn đang chờ",
};

const statusColors = {
  1: "green",
  "-1": "orange",
};

const OrderDashboard = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [tab, setTab] = useState(id === "-1" || id === "1" ? id : "-1");
  const navigate = useNavigate();

  const fetchOrders = async (status) => {
    setLoading(true);
    try {
      const res = await purchaseApi.getPurchases({ status: Number(status) });
      setOrders(res.data || []);
      // console.log(res.data)
    } catch (err) {
      setOrders([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders(tab);
    // eslint-disable-next-line
  }, [tab]);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-10">
      {/* Nút quay về trang chủ */}
      <div className="mb-4 flex">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-pink-50 rounded-xl text-indigo-700 font-semibold transition"
        >
          <HomeOutlined className="text-lg" />
          Về trang chủ
        </button>
      </div>
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">
        Quản lý đơn hàng
      </h1>
      <Tabs
        defaultActiveKey="-1"
        activeKey={tab}
        onChange={setTab}
        items={[
          {
            key: "-1",
            label: "Đơn đang chờ",
          },
          {
            key: "1",
            label: "Đã hoàn tất",
          },
        ]}
      />
      {loading ? (
        <Spin className="block my-12" />
      ) : (
        <div>
          {orders.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              Không có đơn hàng nào ở trạng thái này.
            </div>
          )}
          {orders.map((order) => (
            <div
              key={order._id}
              className="border-b py-4 flex items-center gap-4 last:border-b-0"
            >
              {/* Hình sản phẩm */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                {order.product?.image ? (
                  <img
                    src={order.product.image}
                    alt={order.product.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <PictureOutlined className="text-3xl text-gray-300" />
                )}
              </div>
              {/* Thông tin sản phẩm */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-800 truncate">
                  {order.product?.name || "Không rõ sản phẩm"}
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Số lượng: {order.buy_count}
                  {" | "}
                  Tổng:{" "}
                  <span className="font-bold text-pink-600">
                    {order.price?.toLocaleString()}₫
                  </span>
                </div>
              </div>
              <Tag color={statusColors[tab]}>{statusLabels[tab]}</Tag>
            </div>
          ))}
          {/* Nút quay lại giỏ hàng, chỉ show ở tab Đơn đang chờ */}
          {tab === "-1" && orders.length > 0 && (
            <div className="flex justify-end mt-8">
              <button
                onClick={() => navigate("/cart")}
                className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow transition"
              >
                Quay lại giỏ hàng
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDashboard;
