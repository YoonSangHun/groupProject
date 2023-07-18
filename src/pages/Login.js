import React, { useState, useEffect, useContext } from 'react';  // Import useContext
import '@picocss/pico/css/pico.min.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext';
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

   const { checkUser } = useContext(AuthContext);

   const signIn = async (event) => {
    event.preventDefault();
    try {
      await Auth.signIn(username, password);
      checkUser();  // Update authentication state immediately after login
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log('error signing in', error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
          <dialog open>
            <article>
                <Link to="/"><div aria-label="Close" className="close"></div></Link>
                    <hgroup>
                    <h1>Please Login</h1><hr/><br/>
                    <h2><i>로그인 먼저 해주세요 :)</i></h2>
                </hgroup>

              <div>
                <form>
                  <input 
                    value={username} 
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
                  {error && console.log(error)}
                </form>
              </div>
            </article>
        </dialog>
          );
;}

export default Login;