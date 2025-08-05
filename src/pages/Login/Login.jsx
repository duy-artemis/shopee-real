import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoggedInAlready from "./LogInAlready";
import BackToHomeButton from "../../components/Button/BackToHomeButton";
import authApi from "../../services/apis/auth.api";
import { message, Spin } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import authStore from "../../stores/auth/authStore";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [accountName, setAccountName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { setUser, user } = authStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!accountName || !password) {
      messageApi.open({
        type: "warning",
        content: "Vui lòng nhập đầy đủ thông tin",
      });
      return;
    }
    setLoading(true);
    try {
      const data = await authApi.login({
        email: accountName,
        password: password,
      });
      messageApi.open({
        type: "success",
        content: data?.message,
      });
      // console.log(data);
      setUser(data?.data);
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: Object.values(error?.data).join(", "),
      });
      setLoading(false);
    }
  };

  if (user && Object.keys(user).length > 0 && !loading) {
    return <LoggedInAlready login={user} setLogin={setUser} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200">
      {contextHolder}
      <BackToHomeButton />
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl px-10 py-10 w-full max-w-sm flex flex-col gap-6 animate-fade-in"
        style={{ minWidth: 350 }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
          Đăng nhập
        </h2>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="username"
          >
            Tên tài khoản
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Nhập tên tài khoản"
            autoComplete="username"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-500 transition-colors"
            >
              {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-semibold shadow-md transition
            ${loading ? "opacity-60 cursor-not-allowed" : ""}
          `}
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
              Đang đăng nhập...
            </span>
          ) : (
            "Đăng nhập"
          )}
        </button>
        <div className="text-center text-gray-500 mt-1">
          Chưa có tài khoản?{" "}
          <NavLink
            to="/signup"
            className="text-indigo-500 hover:underline font-medium"
          >
            Đăng ký
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
