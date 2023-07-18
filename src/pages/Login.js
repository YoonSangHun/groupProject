import React from "react";
import '@picocss/pico/css/pico.min.css';  // Import Pico CSS
import { Link } from "react-router-dom";

const Login = () => {
  return (
          <dialog open>
            <article>
                <Link to="/"><div aria-label="Close" className="close"></div></Link>
                    <hgroup>
                    <h1>Please Login</h1><hr/><br/>
                    <h2><i>로그인 먼저 해주세요 :)</i></h2>
                </hgroup>
                <form>
                    <input
                        type="text"
                        name="login"
                        placeholder="아이디"
                        aria-label="Login"
                        autoComplete="nickname"

                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        aria-label="Password"
                        autoComplete="current-password"

                    />
                    <div className='grid'>
                        <button type="submit">로그인</button>
                        <Link to='/SignUp'><button className='primary outline'>회원가입 하러가기</button></Link>
                    </div>
                </form>
            </article>
          </dialog>
          );
;}

export default Login;