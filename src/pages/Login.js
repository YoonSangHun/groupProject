import React, { useState, useEffect, useContext } from 'react';  // Import useContext
import NavBar from '../components/NavBar';
import '@picocss/pico/css/pico.min.css';
import '../login.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

   const { checkUser } = useContext(AuthContext);

  const signIn = async () => {
    try {
      await Auth.signIn(username, password);
      checkUser();  // Update authentication state immediately after login
      navigate("/MyPage");
    } catch (error) {
      setError(error.message);
      console.log('error signing in', error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <main className="container">
      <hr/><NavBar />
      <hr/>
      <article className="grid">
        <div>
          <hgroup>
            <h1>Sign in</h1>
            <h2>A minimalist layout for Login pages</h2>
          </hgroup>
          <input 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            placeholder="Username" 
          />
          <input 
            value={password} 
            type="password"
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password" 
          />
          <button onClick={signIn}>Sign In</button>
          {error && <p>{error}</p>}  // Display error message
        </div>
        <div></div>
      </article>
    </main>
  );
}

export default Login;
