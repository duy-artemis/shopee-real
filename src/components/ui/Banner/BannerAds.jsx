import React from "react";

const content = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 50% off on all summer items",
    imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    linkUrl: "/summer-sale"
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out our latest products",
    imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    linkUrl: "/new-arrivals"
  },
]

const BannerAds = () => {
  return (
    <>
      <div className="ads flex-[30%] grow flex-col gap-[5px] flex">
        {content.map((item) => {
          return (
            <>
              <img className="h-[115px] object-cover" src={item.imageUrl} alt={item.title} />
            </>
          )
        })}
      </div>
    </>
  )
};

export default BannerAds;
