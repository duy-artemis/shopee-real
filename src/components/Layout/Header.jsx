import React from "react";
import HeaderTopItem from "../ui/Header/HeaderTopItem";
import HeaderSearch from "../ui/Header/HeaderSearch";

export const Header = () => {
  return (
    <div
      className="bg-gradient-to-t from-[#f53d2d] to-[#f63]
"
    >
      <div className="container mx-auto">
        <HeaderTopItem />
        <HeaderSearch />
      </div>
    </div>
  );
};
