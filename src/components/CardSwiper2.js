import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import './CardSwiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';

const CardSwiper2 = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                mousewheel={true}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 100,
                  stretch: 0,
                  depth: 0,
                  modifier: 1,
                  slideShadows: true,
                  overhidden: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination,Mousewheel]}
    
            >
                <SwiperSlide><img src='img/0번_3개_여유_900X700.jpg' alt="ha"/></SwiperSlide>
                <SwiperSlide><img src='img/1번_3개_여유_900X700.jpg' alt="type"/></SwiperSlide>
                <SwiperSlide><img src='img/2번_3개_의욕과다_900X700.jpg' alt="type"/></SwiperSlide>
                <SwiperSlide><img src='img/3번_3개_안전제일_900X700.jpg' alt="type"/></SwiperSlide>
                <SwiperSlide><img src='img/4번_3개_다재다능_900X700.jpg' alt="type"/></SwiperSlide>
                <SwiperSlide><img src='img/5번_3개_성장하는_900X700.jpg' alt="type"/></SwiperSlide>
                <SwiperSlide><img src='img/6번_3개_팔방미인_900X700.jpg' alt="type"/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default CardSwiper2;