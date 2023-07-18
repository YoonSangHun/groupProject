import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '@picocss/pico/css/pico.min.css';
import '../login.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await Auth.signUp({username, password});
      navigate("/Login");  // Redirect to Login after successful sign up
    } catch (error) {
      setError(error.message);  // Update error state with error message
      console.log('error signing up', error);
    }
  };

  return (
    <main className="container">
      <NavBar />
      <hr/>
      <article className="grid">
        <div>
          <hgroup>
            <h1>Sign Up</h1>
            <h2>A minimalist layout for Sign Up pages</h2>
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
          <button onClick={handleSignUp}>Sign Up</button>
          {error && <p>{error}</p>}  // Display error message
        </div>
        <div></div>
      </article>
    </main>
  );
}

export default SignUp;
