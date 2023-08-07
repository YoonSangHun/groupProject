import { Link } from "react-router-dom";
import React from 'react';
import '@picocss/pico/css/pico.min.css';
import { animated, useSpring } from "react-spring";

const Confirm = () => {

  // 애니메이션용 state와 설정
  const [showForm, setShowForm] = React.useState(false);
  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? "translateY(0)" : "translateY(-5000px)",
  });

  // 컴포넌트가 렌더링되면서 애니메이션 시작
  React.useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <dialog open>
      <animated.article style={formAnimation}>
        <h3>정말 Reset하시겠습니까?</h3>
        <p>'확인' 을 누르면 검사한 정보의 초기화가 진행돼요!</p>
        <footer>
          <Link to="/MyPage"><button className="secondary outline">취소</button></Link>
          <Link to ="/"><button className="secondary">확인</button></Link>
        </footer>
      </animated.article>
    </dialog>
  );
}

export default Confirm;
