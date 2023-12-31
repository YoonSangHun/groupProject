import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import '@picocss/pico/css/pico.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Detail from './pages/Detail';
import MyPage from './pages/MyPage';
import Confirm from './components/Confirm';
import AuthContext from './components/AuthContext';
import EmailVerification from './components/EmailVerification'; 
import TypeTest from './pages/TypeTest';
import './KoreanFont.css';
import TestResult from './pages/TestResult';
import TestResult2 from './pages/TestResult2';

// Configure Amplify
Auth.configure(awsconfig);


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Detail" element={<Detail />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
          <Route path="/TypeTest" element={<TypeTest />}></Route>
          <Route path="/TestResult" element={<TestResult />}></Route>
          <Route path="/TestResult2" element={<TestResult2 />}></Route>
          <Route path="MyPage/Confirm" element={<Confirm />}></Route>
          <Route path="/EmailVerification" element={<EmailVerification />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
