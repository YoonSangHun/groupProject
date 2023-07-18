import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '@picocss/pico/css/pico.min.css';
import '../login.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
<<<<<<< HEAD
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
=======
    return (
        <main className="container">
            <hr/><NavBar /><hr/>
        </main>
    );
>>>>>>> 18cc9fd69b53f5a805f12ed6120b43d86c45895d
}

export default SignUp;
