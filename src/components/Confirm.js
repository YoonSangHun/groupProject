import { useNavigate } from "react-router-dom";
import React from 'react';
import '@picocss/pico/css/pico.min.css';
import { animated, useSpring } from "react-spring";

const Confirm = () => {

  const navigate = useNavigate();
  // 취소 버튼 클릭 시 "/" 경로로 이동하는 핸들러 함수
  const handleCancel = () => {
    navigate("/");
  };

  // 확인 버튼 클릭 시 "/" 경로로 이동하는 핸들러 함수
  const handleConfirm = () => {
    navigate("/");
    alert("검사결과가 Reset되었습니다");
  };

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
          <button onClick={handleCancel} className="secondary outline">취소</button>
          <button onClick={handleConfirm} className="secondary">확인</button>
        </footer>
      </animated.article>
    </dialog>
  );
}

export default Confirm;
