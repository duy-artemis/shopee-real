import React from "react";
import { useNavigate } from "react-router-dom";
import BackToHomeButton from "../../components/Button/BackToHomeButton";

const LoggedInAlready = ({login, setLogin}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-200 to-pink-100">
      <BackToHomeButton />
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center gap-7 animate-fade-in">
        {/* Icon thành công */}
        <div className="bg-green-100 p-4 rounded-full shadow mb-2">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-indigo-700 text-center">
          Bạn đã đăng nhập!
        </h2>
        <div className="text-indigo-500 text-xl font-semibold text-center">
            Xin chào, <span className="text-pink-600">{login.user.email}</span>
        </div>
        <p className="text-gray-500 text-center">
          Nếu bạn muốn đổi tài khoản, hãy đăng xuất để đăng nhập lại.
        </p>
        <button
          className="w-full py-3 bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 hover:brightness-110 text-white rounded-xl font-semibold shadow-md transition text-lg"
          onClick={()=>{
            setLogin(null);
        }}
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default LoggedInAlready;
