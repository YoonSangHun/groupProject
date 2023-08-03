import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const verifyEmail = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      navigate("/Login");
    } catch (error) {
      setError(error.message);
      console.log('error confirming sign up', error);
    }
  };

  return (
    <dialog open>
      <article>
        <hgroup>
          <h1>Email Verification!</h1>
          <h2>회원가입 시 입력한 이메일 주소로 전송된 인증코드를 입력해주세요!</h2>
        </hgroup>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="입력하셨던 ID" />
        <input value={code} onChange={e => setCode(e.target.value)} placeholder="Verification code" />
        <button onClick={verifyEmail}>인증 완료하기</button>
        {error && <p>{error}</p>}
      </article>
    </dialog>
  );
}

export default EmailVerification;
