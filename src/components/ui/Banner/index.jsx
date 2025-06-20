import React from "react";
import BannerItem from "./BannerItem";
const bannerItems = [
  {
    image: "https://via.placeholder.com/150",
    content: "Banner 1",
  },
  {
    image: "https://via.placeholder.com/150",
    content: "Banner 2",
  },
];

const index = () => {
  return (
    <div>
      {bannerItems.map((item) => (
        <BannerItem key={item.id} image={item.image} content={item.content} />
      ))}
    </div>
  );
};

export default index;
