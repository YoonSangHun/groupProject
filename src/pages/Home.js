import {Swiper, SwiperSlide} from "swiper/react";
import NavBar from "../components/NavBar";
import CardSwiper from "../components/CardSwiper";



const Home = () => {
    return (
        <>
            <main className="container">
                <hr/><NavBar /><hr/>
                <header className="container">
                    <article id="article">
                        <h1>AI가 분류한 기업의 유형이에요.</h1><br/>
                        <h2>유형별 특징을 자세히 알아보고, 내게 맞는 기업을 확인해보세요!</h2>
                    </article>
                    <article id="article">
                        <CardSwiper/>
                    </article>
                </header>    
            </main>
            
        </>
    );
}

export default Home;