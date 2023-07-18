import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import './CardSwiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const CardSwiper = () => {
    return (
        <main className='container'>
            <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
            >
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>A유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>B유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>C유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>D유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>E유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>F유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>G유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>H유형</SwiperSlide>
                    <SwiperSlide><img src='img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg'/>I유형</SwiperSlide>
            </Swiper>
        </main>
    );
}

export default CardSwiper;