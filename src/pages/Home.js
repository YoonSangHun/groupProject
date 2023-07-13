import {Swiper, SwiperSlide} from "swiper/react";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <main className="container">
            <hr/><NavBar /><hr/>
            <div className="grid">
            
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
            </div>
            
        </main>
    );
}

export default Home;