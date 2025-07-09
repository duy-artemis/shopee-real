import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackToHomeButton = () => {
  const navigate = useNavigate();
  return (
    <>
        {/* Nút Back về Home */}
        <button
          type="button"
          className="absolute left-5 top-5 flex items-center text-blue-600 font-semibold px-2 py-1 rounded-xl hover:bg-blue-100 transition cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* Icon mũi tên về */}
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Trang chủ
        </button>
    </>
  )
}

export default BackToHomeButton