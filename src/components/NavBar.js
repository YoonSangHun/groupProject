import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import AuthContext from '../components/AuthContext';

const NavBar = () => {
  const { isAuthenticated, checkUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      checkUser();  // Update the authentication status after sign out
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
          <Link to = "/"><strong style={{fontSize: '35px'}}><i>UniCom</i></strong></Link>
        </ul>
        <nav className='container fluid'>
          <ul/><ul/><ul/><ul/><ul/><ul/>
          <ul>
            {/* 기업상세화면 */}
            <Link to = "/Detail">Detail</Link>
          </ul>
          <ul>
            {/* 회원가입 */}
            { !isAuthenticated && <Link to = "/SignUp">SignUp</Link> }
          </ul>
          <ul>
            {/* 로그인 로그아웃*/}
            { isAuthenticated ? <button className="logout" onClick={handleLogout}>Log Out</button> : <Link to = "/Login">Log In</Link> }
          </ul>
          <ul>
            {/* 마이페이지 */}
            { isAuthenticated && <Link to = "/MyPage">My page</Link> }
          </ul>
        </nav>
      </nav>
    </ main>
  );
}

export default NavBar;
