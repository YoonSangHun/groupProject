import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { animated, useSpring } from 'react-spring';

const questions = [
    {
        id: 1,
        text: '질문 1.',
        options: ['샬라샬라', '샬라샬라2'],
      },
      {
        id: 2,
        text: '질문 2.',
        options: ['샬라샬라', '샬라샬라2'],
      },
      {
        id: 3,
        text: '질문 3.',
        options: ['샬라샬라', '샬라샬라2'],
      },
      {
        id: 4,
        text: '질문 4.',
        options: ['샬라샬라', '샬라샬라2'],
      },
      {
        id: 5,
        text: '질문 5.',
        options: ['샬라샬라', '샬라샬라2'],
      },
      {
        id: 6,
        text: '질문 6.',
        options: ['샬라샬라', '샬라샬라2'],
      },
      {
        id: 7,
        text: '질문 7.',
        options: ['샬라샬라', '샬라샬라2'],
      },
  
];

const TypeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  // 문제가 바뀔 때 전체 화면에 애니메이션 효과를 부여하기 위한 useSpring 훅
  const fadeAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
  });

  const handleAnswerChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption('');
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption('');
      }
    }
  };

  return (
    <animated.main className="container" style={fadeAnimation}>
      <hr />
      <NavBar />
      <hr />
      <animated.article id="article">
        <h2>{questions[currentQuestionIndex].text}</h2>
        <div>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                id={`radio-${index}`}
                name="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleAnswerChange}
              />
              <label htmlFor={`radio-${index}`}>{option}</label>
              <br />
            </React.Fragment>
          ))}
        </div>
      </animated.article>
      <div className="grid">
        <button className="primary outline" onClick={handlePreviousQuestion}>
          <strong>← 이전 질문으로</strong>
        </button>
        <button onClick={handleNextQuestion}>
          <strong>다음 질문으로 →</strong>
        </button>
      </div>
    </animated.main>
  );
};

export default TypeTest;

