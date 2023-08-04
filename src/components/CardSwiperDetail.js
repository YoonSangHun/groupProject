import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import './CardSwiperDetail.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';

const CardSwiperDetail = () => {
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
                modules={[EffectCoverflow, Pagination, Mousewheel]}
    
            >
                <SwiperSlide><img src='img/wordcloudtest3.png' alt="특징"/></SwiperSlide>
                <SwiperSlide><img src='img/wordcloudtest3.png' alt="장점"/></SwiperSlide>
                <SwiperSlide><img src='img/wordcloudtest3.png' alt="단점"/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default CardSwiperDetail;