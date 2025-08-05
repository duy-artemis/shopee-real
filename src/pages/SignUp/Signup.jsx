import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import BackToHomeButton from "../../components/Button/BackToHomeButton";
import { instance } from "../../services/apis";
import apis from "../../services/apis/auth";
import { Button, message, Space, Spin } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import authApi from "../../services/apis/auth.api";

import authStore from "../../stores/auth/authStore";

const Signup = () => {
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { setUser } = authStore();
  const [loading, setLoading] = useState(false);

  console.log("rerender");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accountName || !password) {
      messageApi.open({
        type: "warning",
        content: "Vui lòng nhập đầy đủ thông tin",
      });
      return;
    }
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
      // setUser(data?.data);
      setLoading(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: Object.values(err?.data).join(", "),
      });
      setLoading(false);
    }
  };

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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  // setMsg("");
                }}
                placeholder="Nhập mật khẩu"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
              >
                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-30"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-70"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                  />
                </svg>
                Đang chuyển trang...
              </span>
            ) : (
              "Đăng ký"
            )}
          </button>
          <div className="text-center text-gray-500 mt-1">
            Đã có tài khoản?{" "}
            <NavLink
              to="/login"
              className="text-indigo-500 hover:underline font-medium"
            >
              Đăng nhập
            </NavLink>
          </div>
        </form>
        {/* {msg && <div className="mt-5 text-center text-blue-700">{msg}</div>} */}
      </div>
    </div>
  );
};

export default Signup;
