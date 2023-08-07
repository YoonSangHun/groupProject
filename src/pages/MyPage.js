import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import '@picocss/pico/css/pico.min.css';
import { animated, useSpring } from "react-spring";

const MyPage = () => {
  const navigate = useNavigate();
  const handleReset = () => {
    navigate('./Confirm');
  }


  // 애니메이션용 state와 설정
  const [showForm, setShowForm] = React.useState(false);
  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? "translateY(0)" : "translateY(-100px)",
  });

  // 컴포넌트가 렌더링되면서 애니메이션 시작
  React.useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <dialog open>
      <animated.article style={formAnimation}>
        <Link to="/"><div aria-label="Close" className="close"></div></Link>
        <hgroup>
          <h1>내 정보</h1><hr/><br/><br/>
          <h2><strong><mark>'내 유형찾기'의 검사결과</mark> 를 초기화 할 수 있어요!</strong></h2>
        </hgroup><br/>
        <form>
          <div className='grid'>
            <button onClick={handleReset} className='secondary'>검사정보 Reset</button>
          </div>
        </form>
      </animated.article>
    </dialog>
  );
}

export default MyPage;
