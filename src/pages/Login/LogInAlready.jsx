import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHomeButton from "../../components/Button/BackToHomeButton";
import userApi from "../../services/apis/user.api";
import { message } from "antd";

const LoggedInAlready = ({ login, setLogin }) => {
  const [profile, setProfile] = useState({});
  const [showEditInfo, setShowEditInfo] = useState(false);
  const [showEditAvatar, setShowEditAvatar] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const inputElement = useRef();

  const loadProfile = async () => {
    const response = await userApi.getProfile();
    setProfile(response.data);
  };
  useEffect(() => {
    loadProfile();
  }, []);

  const avatar = profile.avatar && !profile.avatar.includes("undefined")
    ? profile.avatar
    : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-white relative">
      {contextHolder}
      <BackToHomeButton />

      {/* Popup edit info */}
      {showEditInfo && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[360px] relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl font-bold"
              onClick={() => setShowEditInfo(false)}
              aria-label="Đóng"
            >×</button>
            <div className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-indigo-600 text-2xl">✏️</span>
              Cập nhật thông tin
            </div>
            <div className="text-gray-500">
              (Ở đây bạn làm form edit profile tuỳ ý nha bro!)
            </div>
          </div>
        </div>
      )}

      {/* Popup edit avatar */}
      {showEditAvatar && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <form className="bg-white rounded-2xl shadow-2xl p-8 w-[360px] relative animate-fade-in"
          onSubmit={async(e)=>{
            e.preventDefault()
            const formData = new FormData();
            let file = inputElement.current.files[0];
            if (!file) {
              messageApi.open({
                type: "error",
                content: "Please choose image",
              });
              return;
            }
            formData.append("image", file);
            const res = await userApi.uploadAvatar(formData);
            await userApi.updateProfile({avatar: res.data})
            loadProfile();
            setShowEditAvatar(false)
          }}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-2xl font-bold"
              onClick={() => setShowEditAvatar(false)}
              aria-label="Đóng"
            >×</button>
            <div className="text-lg font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H3v-4L16.5 3.5z" />
              </svg>
              Cập nhật avatar
            </div>
            <div className="text-gray-500 mb-4">
              <input type="file" className="cursor-pointer" ref={inputElement}/>
            </div>
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-xl shadow transition"
              type="submit"
            >
              Cập nhật
            </button>
          </form>
        </div>
      )}

      <div className="bg-white/95 rounded-2xl shadow-xl px-8 py-10 max-w-sm w-full flex flex-col items-center relative animate-fade-in">
        {/* Avatar + Edit */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <div className="relative w-28 h-28">
            <div className="w-28 h-28 rounded-full shadow-xl border-4 border-white flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 overflow-hidden">
              {avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-5xl text-gray-400">👤</span>
              )}
            </div>
            {/* Cây viết edit avatar */}
            <button
              onClick={() => setShowEditAvatar(true)}
              className="absolute bottom-2 right-2 bg-white border border-gray-200 rounded-full p-1 shadow hover:bg-pink-100 transition"
              title="Thay đổi avatar"
            >
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H3v-4L16.5 3.5z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-16 w-full flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Xin chào,</h2>
          <div className="text-pink-600 font-bold text-xl mb-4 break-words text-center flex items-center gap-1">
            {profile.email || "Loading..."}
            <button
              className="ml-2 text-gray-400 hover:text-pink-500 transition"
              onClick={() => setShowEditInfo(true)}
              title="Chỉnh sửa thông tin"
            >
              <svg className="inline-block w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232a2.828 2.828 0 114 4L7 21H3v-4L15.232 5.232z" />
              </svg>
            </button>
          </div>
          <div className="bg-green-100 flex items-center gap-2 px-4 py-2 rounded-full mb-4">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-600 font-medium text-sm">
              Đăng nhập thành công
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3 mt-4">
          <button
            className="w-full py-3 bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 hover:brightness-110 text-white rounded-xl font-semibold shadow transition text-lg cursor-pointer"
            onClick={() => setLogin(null)}
          >
            Đăng xuất
          </button>
          <button
            className="w-full py-3 flex items-center justify-center gap-2 bg-white text-pink-600 border border-pink-400 rounded-xl font-semibold shadow hover:bg-pink-50 transition text-lg cursor-pointer"
            onClick={() => navigate('/orders')}
          >
            <span className="text-xl">🗂️</span> Quản lý đơn hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoggedInAlready;
