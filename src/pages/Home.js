import NavBar from "../components/NavBar";
import CardSwiper from "../components/CardSwiper";
import { Link } from "react-router-dom";

const Home = () => {
    
    return (
        
        <main className="container">
            <hr/><NavBar /><hr/>
            <header className="container">
                <article id="article">
                    <hgroup>
                        <br/>
                        <h1 text align="center">UniCom이 새로운 형태의 기업유형을 소개합니다!</h1><br/>
                        <h2 text align="center">
                            <strong>그림 위에서 <mark>휠을 스크롤하면</mark> "AI"가 분류한 여러 기업유형을 확인할 수 있어요!
                            </strong>
                        </h2>
                    </hgroup>
                </article>
                <article id="article">
                    <CardSwiper />
                </article>
              
            </header>    
            <div className="grid">
                <div/>
                <Link to = "/Login"><button className="primary"><strong>어울리는 기업 찾으러 가기 →</strong></button></Link>
                <div/>
            </div>
        </main>
    );
}

export default Home;