import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import './CardSwiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';

const CardSwiper3 = () => {
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
                <SwiperSlide><img src='img/1지도.png' alt="mapdi"/></SwiperSlide>
                <SwiperSlide><img src='img/2파이차트.png' alt="piechart"/></SwiperSlide>
                <SwiperSlide><img src='img/3박스플롯.png' alt="boxfloat"/></SwiperSlide>
                <SwiperSlide><img src='img/4예측그래프.png' alt="salestrend"/></SwiperSlide>
                <SwiperSlide><img src='img/5레이더차트.png' alt="rardar"/></SwiperSlide>
                <SwiperSlide><img src='img/6별점.png' alt="stars"/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default CardSwiper3;