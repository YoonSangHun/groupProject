import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import './CardSwiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';

const CardSwiper = () => {
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
                <SwiperSlide><img src='img/0번_두산_여유.jpg' alt="ha"/></SwiperSlide>
                <SwiperSlide><img src='img/01_하 과장.png' alt="hadi"/></SwiperSlide>
                <SwiperSlide><img src='img/1번_오뚜기_꼼꼼한.jpg' alt="lee"/></SwiperSlide>
                <SwiperSlide><img src='img/02_이 대리.png' alt="leedi"/></SwiperSlide>
                <SwiperSlide><img src='img/2번_JW중외제약_의욕과다.jpg' alt="kim"/></SwiperSlide>
                <SwiperSlide><img src='img/03_김 사원.png' alt="kimdi"/></SwiperSlide>
                <SwiperSlide><img src='img/3번_코웨이_안전제일.jpg' alt="jung"/></SwiperSlide>
                <SwiperSlide><img src='img/04_정 대리.png' alt="jungdi"/></SwiperSlide>
                <SwiperSlide><img src='img/4번_SK가스_다재다능.jpg' alt="ko"/></SwiperSlide>
                <SwiperSlide><img src='img/05_고 차장.png' alt="kodi"/></SwiperSlide>
                <SwiperSlide><img src='img/5번_경동나비엔_성장하는.jpg' alt="park"/></SwiperSlide>
                <SwiperSlide><img src='img/06_박 사원.png' alt="parkdi"/></SwiperSlide>
                <SwiperSlide><img src='img/6번_유니드_팔방미인.jpg' alt="yoo"/></SwiperSlide>
                <SwiperSlide><img src='img/07_유 부장.png' alt="yoodi"/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default CardSwiper;