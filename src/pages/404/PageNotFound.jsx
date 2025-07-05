import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center px-4 py-12">
      <div className="text-[90px] font-black text-pink-600 mb-3 drop-shadow-lg select-none">404</div>
      <div className="mb-2">
        <svg width="64" height="64" fill="none" className="mx-auto mb-3">
          <circle cx="32" cy="32" r="32" fill="#FCE7F3"/>
          <path d="M22 38c2-2 12-2 16 0" stroke="#BE185D" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="25" cy="27" r="3" fill="#BE185D"/>
          <circle cx="39" cy="27" r="3" fill="#BE185D"/>
        </svg>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 text-center">Oops! Page not found</h1>
      <div className="mb-5 text-base text-gray-500 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist.<br />
        Please check the URL or return to homepage.
      </div>
      <Link
        to="/"
        className="bg-pink-600 hover:bg-pink-700 transition px-7 py-3 rounded-xl text-lg font-semibold text-white shadow-md"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
