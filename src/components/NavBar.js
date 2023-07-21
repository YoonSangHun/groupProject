import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import AuthContext from '../components/AuthContext';

const NavBar = () => {
  const { isAuthenticated, checkUser } = useContext(AuthContext);
  const navigate = useNavigate();  
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      checkUser();  // Update the authentication status after sign out
      alert("로그아웃 되었습니다.")
      navigate("/");
    } catch (error) {
      console.error('error signing out: ', error);
    }
  };

  return (
    <main className ="container">
      <nav>
        <ul />
        <ul>
            {/*Logo 가 들어갈 부분  */}
            <Link to = "/"><img src="./img/logo.jpg" alt="unicom logo"/></Link>
        </ul>
        <nav className='container fluid'>
          <ul/><ul/><ul/><ul/><ul/><ul/>
          <ul>
            {/* 기업상세화면 */}
            { isAuthenticated ? <Link to = "/Detail"><strong>Detail</strong></Link> : <Link to = "Login">Detail</Link> }
            
          </ul>
          <ul>
            {/* 회원가입 */}
            { !isAuthenticated ? <Link to = "/SignUp"><strong>SignUp</strong></Link> : "SignUp" }
          </ul>
          <ul>
            {/* 로그인 로그아웃*/}
            { isAuthenticated ? <Link onClick={handleLogout}><strong>Log out</strong></Link> : <Link to = "/Login"><strong>Log In</strong></Link> }
          </ul>
          <ul>
            {/* 마이페이지 */}
            { isAuthenticated ? <Link to = "/MyPage"><strong>My page</strong></Link> : <Link to = "/Login">My page</Link>}
          </ul>
        </nav>
      </nav>
    </ main>
  );
}

export default NavBar;
