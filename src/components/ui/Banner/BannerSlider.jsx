import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import styled from "styled-components";


const content = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Online Shopping Banner 1"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Online Shopping Banner 2"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Flash Sale Banner"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Promotion Banner"
  }
]

const BannerSlider = () => {
  const [isHover, setIsHover] = useState("");
  return (
    <>
      <SwiperWrapper $isHover={isHover} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{
        setIsHover(false);
      }}>
        <Swiper className="swiper-bro" spaceBetween={24} slidesPerView={1} loop={false} modules={[Pagination, Navigation]} pagination={{ clickable: true }} navigation={true}>
          {content.map((item) => {
            return (
              <SwiperSlide>
                <img className="w-full h-full object-cover" src={item.image} alt={item.alt} key={item.id}/>
              </SwiperSlide>
            );
          })}
        </Swiper> 
      </SwiperWrapper>
    </>
  )
};

const SwiperWrapper = styled.div`
& {
  flex-grow: 1;
  width: 70%;
} 
& .swiper-bro {
  height: 235px !important;
  
}
& .swiper-button-prev, & .swiper-button-next {
  transition: opacity 0.5s ease;
  background-color: rgba(0,0,0,0.3);
}
& .swiper-button-prev, & .swiper-button-next {
  color: white;
  opacity: ${({$isHover})=>$isHover ? 1 : 0};
}
& .swiper-pagination-bullet-active {
  background-color: #ee4d2d !important;
}
& .swiper-pagination-bullet {
  background-color: hsla(0, 0%, 100%, .4);
}
`;

export default BannerSlider;
