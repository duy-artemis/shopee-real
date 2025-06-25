import React from "react";
import BannerItem from "./BannerItem";
import BannerSlider from "./BannerSlider";
import BannerAds from "./BannerAds";
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
    <div className="container mx-auto pt-[30px]">
      <div className="banner flex gap-[5px]">
        <BannerSlider/>
        <BannerAds/>
      </div>
      <div className="item">
        {/* {bannerItems.map((item) => (
          <BannerItem key={item.id} image={item.image} content={item.content} />
        ))}; */}
      </div>
    </div>
  );
};

export default index;
