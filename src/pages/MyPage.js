import { Link } from "react-router-dom";
import React from 'react';
import '@picocss/pico/css/pico.min.css';
import { animated, useSpring } from "react-spring";

const MyPage = () => {

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
          <h1>My Page</h1><hr/><br/><br/>
          <h2><strong><mark>검사결과</mark>를 초기화 할 수 있어요! (아직은 준비중인 기능입니다)</strong></h2>
        </hgroup><br/>
        <form>
          <div className='grid'>
            <Link to="Confirm"><button className='secondary'>검사정보 Reset</button></Link>
          </div>
        </form>
      </animated.article>
    </dialog>
  );
}

export default MyPage;
