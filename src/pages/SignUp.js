import { Link } from "react-router-dom";
import React, { useState } from 'react';
import '@picocss/pico/css/pico.min.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birth, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username, 
        password, 
        attributes: {
          email,
          name,
          'custom:birth': birth,
          'custom:address': address,
        }
      });
      navigate("/EmailVerification");  // Redirect to EmailVerification after successful sign up
    } catch (error) {
      setError(error.message);
      console.log('error signing up', error);
    }
  };

  return (
    <dialog open>
      <article>
        <Link to="/"><div aria-label="Close" className="close"></div></Link>
        <div>
          <hgroup>
            <h1>Sign Up</h1>
            <h2>회원가입을 진행해주세요</h2>
          </hgroup>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="User ID" />
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="비밀번호" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input value={birth} onChange={e => setAge(e.target.value)} placeholder="Birth" />
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
          <button onClick={handleSignUp}>회원가입</button>
          {error && <p>{error}</p>}
        </div>
      </article>
    </dialog>
  );
}

export default SignUp;
