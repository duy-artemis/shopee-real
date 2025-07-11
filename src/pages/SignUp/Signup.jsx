import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BackToHomeButton from "../../components/Button/BackToHomeButton";
import { instance } from "../../services/apis";
import apis from "../../services/apis/auth";
import { Button, message, Space, Spin } from "antd";
import authApi from "../../services/apis/auth.api";

import authStore from "../../stores/auth/authStore";

const Signup = () => {
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { setUser } = authStore();
  const [loading, setLoading] = useState(false);

  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };
  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "This is a warning message",
    });
  };

  console.log("rerender");

  // if (msg.includes("Đăng ký thành công!")) {
  //   return <Navigate to="/login"></Navigate>;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accountName || !password) {
      // setMsg("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    setLoading(true);
    try {
      const data = await authApi.registerAccount({
        email: accountName,
        password: password,
      });
      console.log(data);
      messageApi.open({
        type: "success",
        content: data?.message,
      });
      setUser(data?.data);
      setLoading(false);
      navigate("/login");
    } catch (err) {
      messageApi.open({
        type: "error",
        content: err?.data?.email,
      });
      setLoading(false);
    }
  };

  if (loading) return <Spin />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-400">
      {contextHolder}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <BackToHomeButton />

        {/* Form đăng nhậo */}
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Đăng ký tài khoản
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Tên tài khoản</label>
            <input
              type="text"
              className="w-full p-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={accountName}
              onChange={(e) => {
                setAccountName(e.target.value);
                // setMsg("");
              }}
              placeholder="Nhập tên tài khoản"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mật khẩu</label>
            <input
              type="password"
              className="w-full p-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                // setMsg("");
              }}
              placeholder="Nhập mật khẩu"
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition"
          >
            Đăng ký
          </button>
        </form>
        {/* {msg && <div className="mt-5 text-center text-blue-700">{msg}</div>} */}
      </div>
    </div>
  );
};

export default Signup;
