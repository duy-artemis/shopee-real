import React from "react";

const BannerItem = ({ image, content }) => {
  return (
    <div>
      <img className="" src={image} />
      <p>{content}</p>
    </div>
  );
};

export default BannerItem;
