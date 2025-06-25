import React from "react";

const HeaderTopItem = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <ul className="flex items-center gap-4">
          <li className="text-sm text-white font-light p-1">Seller Centre</li>
          <li className="text-sm text-white font-light p-1">Start Selling</li>
          <li className="text-sm text-white font-light p-1">Download</li>
          <li className="text-sm text-white font-light p-1">Follow us On</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li className="text-sm text-white font-light p-1">Notifications</li>
          <li className="text-sm text-white font-light p-1">Help</li>
          <li className="text-sm text-white font-light p-1">English</li>
          <li className="text-sm text-white font-bold p-1">Sign Up</li>
          <li className="text-sm text-white font-bold p-1">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTopItem;
