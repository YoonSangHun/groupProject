import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import AuthContext from '../components/AuthContext';

const NavBar = () => {
  const { isAuthenticated, checkUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  // Function to check viewport width on window resize
  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  };

  // Add resize event listener when component mounts
  useEffect(() => {
    handleResize(); // Check initial viewport width
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Watch isAuthenticated changes and update menu accordingly
  useEffect(() => {
    handleResize(); // Check initial viewport width
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      checkUser(); // Update the authentication status after sign out
      alert('로그아웃 되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('error signing out: ', error);
    }
  };

  return (
    <main className="container">
      <nav>
        <ul>
          {/* Logo 가 들어갈 부분 */}
          <Link to="/">
            <img src="./img/logo.jpg" alt="unicom logo" style={{ width: '280px', height: '85px' }} />
          </Link>
        </ul>

        <ul />
        <ul />
        <ul />
        <ul />
        <ul />
        {window.innerWidth > 1000 ? (
          isAuthenticated ? (
            <ul className="primary">
              
              <li>
                <Link to="/TypeTest">
                  <strong>내 유형찾기</strong>
                </Link>
              </li>
              <li/>
              <li>
                <Link to="/Detail">
                  <strong>기업 상세정보</strong>
                </Link>
              </li>
              <li/>
              <li>
                <Link to="/MyPage">
                  <strong>내 정보</strong>
                </Link>
              </li>
              <li/>
              <li>
                <Link to="/" onClick={handleLogout}>
                  <strong>로그아웃</strong>
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <Link to="SignUp">
                <li><strong>회원가입</strong></li>
              </Link>
              <li/>
              <Link to="Login">
                <li><strong>로그인</strong></li>
              </Link>
            </ul>
          )
        ) : (
          <ul>
            {showDetails && (
              <details role="list" dir="rtl" className="primary">
                <summary aria-haspopup="menu" role="link" className="primary">
                  <strong>메뉴</strong>
                </summary>
                {isAuthenticated ? (
                  <ul role="listbox">
                    
                    <Link to="TypeTest">
                      <li>
                        <strong>내유형 찾기</strong>
                      </li>
                    </Link>
                    <Link to="/Detail">
                      <li>
                        <strong>기업 상세정보</strong>
                      </li>
                    </Link>
                    <Link to="/MyPage">
                      <li>
                        <strong>내 정보</strong>
                      </li>
                    </Link>
                    <Link to="/" onClick={handleLogout}>
                      <li>
                        <strong>로그아웃</strong>
                      </li>
                    </Link>
                  </ul>
                ) : (
                  <ul role="listbox">
                    <Link to="/SignUp">
                      <li><strong>회원가입</strong></li>
                    </Link>
                    <Link to="/Login">
                      <li><strong>로그인</strong></li>
                    </Link>
                  </ul>
                )}
              </details>
            )}
          </ul>
        )}
      </nav>
    </main>
  );
};

export default NavBar;
