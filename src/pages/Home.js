import React, { useContext } from "react";
import { animated, useSpring } from "react-spring";
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

  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // 각 article 요소들에 순차적인 애니메이션 효과를 적용하는 useSpring 훅
  const article1Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 800, // article1은 이전 애니메이션 후 0.8초 딜레이 적용
    config: { duration: 500 },
  });

  const article2Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500, // article2는 이전 애니메이션 후 1.5초 딜레이 적용
    config: { duration: 500 },
  });

  const article3Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 2500, // article3은 이전 애니메이션 후 2.5초 딜레이 적용
    config: { duration: 500 },
  });

  const article4Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 3500, // article4는 이전 애니메이션 후 3.5초 딜레이 적용
    config: { duration: 500 },
  });

  const article5Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 4500, // article5는 이전 애니메이션 후 4.5초 딜레이 적용
    config: { duration: 500 },
  });

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/TypeTest");
    } else {
      navigate("/SignUp");
    }
  };

  return (
    <animated.main className="container" style={fadeInAnimation}>
      <hr />
      <NavBar />
      <hr />
      <header className="container">
        <animated.article id="article1" style={article1Animation}>
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
        </animated.article>
        <animated.article id="article2" style={article2Animation}>
          <CardSwiper />
        </animated.article>
        <animated.article id="article3" style={article3Animation}>
          <CardSwiper2 />
        </animated.article>
        <animated.article id="article4" style={article4Animation}>
          <CardSwiper3 />
        </animated.article>
        <animated.article id="article5" style={article5Animation}>
          <CardSwiper4 />
        </animated.article>
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
    </animated.main>
  );
};

export default Home;
