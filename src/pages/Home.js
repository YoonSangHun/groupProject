import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import CardSwiper from "../components/CardSwiper";
import CardSwiper2 from "../components/CardSwiper2";
import CardSwiper3 from "../components/CardSwiper3";
import CardSwiper4 from "../components/CardSwiper4";
import { useNavigate } from "react-router-dom";
import AuthContext from "../components/AuthContext";
import { Link } from "react-scroll";


const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/TypeTest");
    } else {
      navigate("/SignUp");
    }
  };

  return (
    <main className="container">
      <hr />
      <NavBar />
      <hr />
      <header className="container">
        <article id="article1">
          <hgroup>
            <br />
            <h1 style={{ textAlign: "center" }}>
              UniCom이 새로운 형태의 기업유형을 소개합니다!
            </h1>
            <br />
            <h2 style={{ textAlign: "center" }}>
              <strong>
                그림 위에서 <mark>휠을 스크롤하면</mark> "AI"가 분류한 여러 기업유형을
                확인할 수 있어요!
              </strong>
            </h2>
          </hgroup>
        </article>
        <article id="article2">
          <CardSwiper />
        </article>
        <article id="article3">
          <CardSwiper2 />
        </article>
        <article id="article4">
          <CardSwiper3 />
        </article>
        <article id="article5">
          <CardSwiper4 />
        </article>
      </header>
      <div className="grid">
        <div />
        <Link to="article1" smooth={true}>
          <button className="primary outline">
            <strong>맨 위로</strong>
          </button>
        </Link>
        <button className="primary" onClick={handleButtonClick}>
          <strong>내 기업유형 찾기 →</strong>
        </button>
        
        <div />
      </div>
     
  

    </main>
  );
};

export default Home;
