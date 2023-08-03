import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '@picocss/pico/css/pico.min.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { animated, useSpring } from "react-spring";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birth, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username, 
        password, 
        attributes: {
          email,
          name,
          'custom:birth': birth,
          'custom:address': address,
        }
      });
      navigate("/EmailVerification");  // Redirect to EmailVerification after successful sign up
    } catch (error) {
      setError(error.message);
      console.log('error signing up', error);
    }
  };

  // 애니메이션용 state와 설정
  const [showForm, setShowForm] = useState(false);
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
        <Link to="/"><div aria-label="Close" className="close"></div></Link>
        <div>
          <hgroup>
            <h1>Sign Up</h1>
            <h2>회원가입을 진행해주세요</h2>
          </hgroup>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="사용하실 ID" />
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="비밀번호" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="메일주소" />
          <input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
          <input value={birth} onChange={e => setAge(e.target.value)} placeholder="생년 (끝 두자리만 입력해주세요! ex) 95, 97, 99" />
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder="주소" />
          <button onClick={handleSignUp}>회원가입</button>
          {error && <p>{error}</p>}
        </div>
      </animated.article>
    </dialog>
  );
}

export default SignUp;
