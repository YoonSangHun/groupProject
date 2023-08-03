import React, { useState, useEffect, useContext } from 'react';  
import '@picocss/pico/css/pico.min.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext';
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setLoginState } = useContext(AuthContext);
  const { checkUser } = useContext(AuthContext);

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await Auth.signIn(username, password);
      checkUser();  // Update authentication state immediately after login
      navigate("/");
      alert("로그인 되었습니다.")
      setLoginState(true);
      
    } catch (error) {
      setError(error.message);
      console.log('error signing in', error);
    }
  };

  useEffect(() => {
    checkUser();
  }, [checkUser]);

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
            <h1>Please Login</h1><hr/><br/>
            <h2><i>로그인 먼저 해주세요 :)</i></h2>
          </hgroup>

          <div>
            <form>
              <input
                value={username} 
                type='text'
                onChange={e => setUsername(e.target.value)} 
                placeholder="User ID"                       
              />
              <input
                value={password} 
                type="password"
                onChange={e => setPassword(e.target.value)} 
                placeholder="비밀번호"
              />
              <button onClick={(event) => signIn(event)}>로그인</button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </animated.article>
    </dialog>
  );
}

export default Login;
