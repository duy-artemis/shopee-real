import React from "react";
import { NavLink as Duy, useNavigate } from "react-router-dom";

const HeaderTopItem = () => {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    setTimeout(() => {
      console.log("Chao duy");
      navigate("/home");
    }, 1000);
  };
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
          <li
            onClick={onClickNavigate}
            className="text-sm text-white font-light p-1"
          >
            English
          </li>
          <Duy to="/signup" className="text-sm text-white font-bold p-1">
            Sign Up
          </Duy>
          <Duy to="/login" className="text-sm text-white font-bold p-1">
            Login
          </Duy>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTopItem;
