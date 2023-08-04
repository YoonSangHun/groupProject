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
    delay: 2000, // article1은 이전 애니메이션 후 2초 딜레이 적용, 1.3초의 실행시간 적용
    config: { duration: 1300 },
  });

  const article2Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 4000, // article2는 이전 애니메이션 후 2초 딜레이 적용
    config: { duration: 1300 },
  });

  const article3Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 6000, // article3은 이전 애니메이션 후 2초 딜레이 적용
    config: { duration: 1300 },
  });

  const article4Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 8000, // article4는 이전 애니메이션 후 2초 딜레이 적용
    config: { duration: 1300 },
  });

  const article5Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 10000, // article5는 이전 애니메이션 후 2초 딜레이 적용
    config: { duration: 1300 },
  });

  const article6Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 12000, // article6은 이전 애니메이션 후 2초 딜레이 적용
    config: { duration: 1300 },
  });

  const article7Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 14000, // article7은 이전 애니메이션 후 2초 딜레이 적용
    config: { duration: 1300 },
  });

  const article8Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 16000, // article8은 이전 애니메이션 후 4.5초 딜레이 적용
    config: { duration: 1300 },
  });

  const article9Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 18000, // article9은 이전 애니메이션 후 4.5초 딜레이 적용
    config: { duration: 1300 },
  });

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/TypeTest");
    } else {
      navigate("/SignUp");
    }
  };

  return (
    <animated.main className="container" id="main" style={fadeInAnimation}>
      <hr />
      <NavBar />
      <hr />
      <header className="container">
        <animated.article id="article1" style={article1Animation}>
          <hgroup>
            <br />
            <h1 style={{ textAlign: "center" }}>
              새로운 "구직 인사이트" 를 개발해보자!
            </h1>
            <br />
            <h2 style={{ textAlign: "center" }}>
              <strong>
                <i>UniCom은 <mark>AI 클러스터링, 기업데이터 분석, 시각화 기술</mark>을 주로 활용한 새로운 시도를 해보았어요!</i>
              </strong>
            </h2>
          </hgroup>
        </animated.article>
        <animated.article id="article2" style={article2Animation}>
          <hgroup><br/>
            <h1 style={{ textAlign: "center" }}>
              "다녀보니 내가 생각했던 회사가 아니라서...?""
            </h1><br/><br/>
            <h3 style={{ textAlign: "center" }}>
              <strong>
                <i>"회사에 <mark>지나친 환상</mark>을 가지고 시작했던 건 아닐까...?"</i>
              </strong>
            </h3><br/><br/>
            <h3 style={{ textAlign: "center" }}>
              <strong>
                <i>"입사 전에 알았으면 더 좋았을 정보들...?"</i>
              </strong>
            </h3>
          </hgroup>
        </animated.article>
        <animated.article id="article3" style={article3Animation}>
          <hgroup>
            <br />
            <h1 style={{ textAlign: "center" }}>
              "그렇게 시작했습니다."
            </h1>
            <br />
          </hgroup>
        </animated.article>
        <animated.article id="article4" style={article4Animation}>
          <hgroup>
            <br />
            <h1 style={{ textAlign: "center" }}>
              "계속 스크롤을 내리고 그림을 좌우로 돌려보세요."
            </h1><br/><br/>
            <h4 style={{ textAlign: "center" }}>
              <strong>
                <i><mark>새로운 분류</mark>를 끈기있게 시도한 끝에 얻어낸<br/> <mark>7가지 유형</mark>을 소개합니다.</i>
              </strong>
            </h4>
            <br />
          </hgroup>
        </animated.article>
        <animated.article id="article5" style={article5Animation}>
          <hgroup>
            <br />
            <h1 style={{ textAlign: "center" }}>
              "분류된 기업유형에는 재미있는 이름을 붙여 주었어요."
            </h1><br/><br/>
            <h5 style={{ textAlign: "center" }}>
              <strong>
                <i>"한 번쯤 경험하거나 상상해 본 적 있는 <mark>직장인</mark>들의 이미지"</i>
              </strong>
            </h5>
            <br />
          </hgroup>
        </animated.article>
        <animated.article id="article6" style={article6Animation}>
          <CardSwiper />
        </animated.article>
        <animated.article id="article7" style={article7Animation}>
          <CardSwiper2 />
        </animated.article>
        <animated.article id="article8" style={article8Animation}>
          <CardSwiper3 />
        </animated.article>
        <animated.article id="article9" style={article9Animation}>
          <CardSwiper4 />
        </animated.article>
      </header>
      <div className="grid">
        <div />
        <Link to="main" smooth={true}>
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
