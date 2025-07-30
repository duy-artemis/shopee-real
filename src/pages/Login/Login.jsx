import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInAlready from "./LogInAlready";
import BackToHomeButton from "../../components/Button/BackToHomeButton";
import authApi from "../../services/apis/auth.api";
import { message, Spin } from "antd";
import authStore from "../../stores/auth/authStore";

const Login = () => {
  // const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const storeUser = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : "";
  // const [checkbox, setCheckBox] = useState(storeUser ? true : false);
  const [accountName, setAccountName] = useState();
  const [password, setPassword] = useState();
  // const [login, setLogin] = useState(
  //   sessionStorage.getItem("login")
  //     ? JSON.parse(sessionStorage.getItem("login"))
  //     : { isLogin: false }
  // );
  const [messageApi, contextHolder] = message.useMessage();
  const { setUser, user } = authStore();
  


  // const success = (msg) => {
  //   messageApi.open({
  //     type: "success",
  //     content: msg,
  //   });
  // };
  // const error = (msg) => {
  //   messageApi.open({
  //     type: "error",
  //     content: msg,
  //   });
  // };
  // const warning = () => {
  //   messageApi.open({
  //     type: "warning",
  //     content: "This is a warning message",
  //   });
  // };

  // navigation and remember user and update login status
  // useEffect(() => {
  //   if (msg === "Correct bro") {
  //     // remember account
  //     const rememberUser = { accountName, password };
  //     if (checkbox) {
  //       localStorage.setItem("user", JSON.stringify(rememberUser));
  //     } else {
  //       localStorage.removeItem("user");
  //     }

  //     // update Login status
  //     const loginUser = { accountName, password, isLogin: true };
  //     sessionStorage.setItem("login", JSON.stringify(loginUser));

  //     // navigation
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 1000);
  //   }
  // }, [msg]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // setMsg("");
    // if (!accountName || !password) {
    //   setMsg("Vui lòng nhập tên tài khoản và mật khẩu!");
    //   return;
    // }
    // try {
    //   const res = await fetch("http://localhost:5001/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ accountName, password }),
    //   });
    //   const data = await res.json();
    //   setMsg(data.msg);
    // } catch (err) {
    //   setMsg("Có lỗi xảy ra. Thử lại sau.");
    // }
    // setLoading(false);
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
      setLoading(false);
      setUser(data?.data);
      navigate("/"); 
    } catch (error) {
      messageApi.open({
        type: "error",
        content: error?.data?.email,
      });
      setLoading(false);
    }
  };
  if (loading) return <Spin />;

  // if (login.isLogin) {
  //   return <LoggedInAlready login={login} setLogin={setLogin} />;
  // }

  if (user && Object.keys(user).length > 0) {
    return <LoggedInAlready login={user} setLogin={setUser} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200">
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
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            autoComplete="current-password"
          />
        </div>
        {/* <div className="flex justify-center items-center gap-1.5">
          <input
            type="checkbox"
            id="user"
            name="user"
            className="w-fit"
            checked={checkbox}
            onChange={(e) => {
              if (e.target.checked) {
                setCheckBox(true);
              } else {
                setCheckBox(false);
              }
            }}
          />
          <label htmlFor="user">remember me</label>
        </div> */}
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
        {/* <div
          className={`text-center min-h-[24px] text-[15px] ${
            msg === "Correct bro" ? "text-green-600" : "text-red-500"
          }`}
        >
          {msg}
        </div> */}
        <div className="text-center text-gray-500 mt-1">
          Chưa có tài khoản?{" "}
          <a
            href="/signup"
            className="text-indigo-500 hover:underline font-medium"
          >
            Đăng ký
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
