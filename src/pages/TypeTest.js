import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';

const questions = [
    {
        id: 1,
        text: '질문 1. 안정과 성장',
        options: ['부채가 적고 안정적인 회사가 제일 좋은 회사지!', '무슨소리, 매년 매출이 증가하며 성장하는 모습을 보여야 좋은회사지!'],
      },
      {
        id: 2,
        text: '질문 2. 남초냐 여초냐 그것이 문제로다',
        options: ['남자 동료들 많으면 으쌰으쌰! 편하기까지! 더 좋은거 아니야?', '꼼꼼하고 세심하기까지 한 여자 동료들, 많을수록 좋던데...?'],
      },
      {
        id: 3,
        text: '질문 3. 개처럼 많이 벌어갈래, 정승대우 받고살래?',
        options: ['회사 복지? 죽을때까지 다니게? 복지보단 연봉많이주는게 최고지!', '회사 오~래오래 다니려면 복리후생이 중요할껄?'],
      },
      {
        id: 4,
        text: '질문 4. "황금 밸런스게임"',
        options: ['퇴근 후 가족과의 시간, 취미 생활 또는 자기개발 시간이 많~~이 필요하다', '직장은 학교다, 많이 배우고 전문가로 성장해야지!'],
      },
      {
        id: 5,
        text: '질문 5. 돈 많이버는 일 따오는 "꼰대 기업의 딜레마"',
        options: ['꼰대는 질색! 융통성도 있고 소통을 중시하는 경영진이 가장 중요하다!', '융통성? 에이, 회사가 무럭무럭 자라나는데 집중해야(매출신장) 나도 오~래 많이벌고 다니지!'],
      },
      {
        id: 6,
        text: '질문 6. 아무리 분위기도 중요하다지만...',
        options: ['어떤 동료가 주변에 있는지보다 사내 분위기(업무시스템, 문화)가 중요하다!', '큰 ~~ 욕심 없이 묵묵~~히 오래다니는 주변 동료들 보면, 난 힘이나더라...?'],
      },
      {
        id: 7,
        text: '질문 7. "2보 전진을 위한 1보 후퇴", "벌던 분야에서 반보 전진"',
        options: ['회사 발전을 위해 서슴없이 과감한 투자를 하는 기업', '새로운 곳에 투자하기보다 안정적 경영가도를 중시하는 기업'],
      },
  
];

const TypeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResultButton, setShowResultButton] = useState(false);

  // 문제가 바뀔 때 전체 화면에 애니메이션 효과를 부여하기 위한 useSpring 훅
  const fadeAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
  });

  const handleAnswerChange = (e) => {
    setSelectedOption(e.target.value);
    if (currentQuestionIndex === 6) {
    setShowResultButton(true); 
    } else {
        setShowResultButton(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption('');
      setShowResultButton(false);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption('');
        setShowResultButton(false); // 다음 질문으로 넘어가면 "결과 보러가기" 버튼 숨기기
      } else {
        setShowResultButton(true); // 마지막 질문일 때 "결과 보러가기" 버튼 보이기
      }
    }
  };

  return (
    <animated.main className="container" style={fadeAnimation}>
      <hr />
      <NavBar />
      <hr />
      <animated.article id="article">
        <h2 className='single-line-text'>{questions[currentQuestionIndex].text}</h2>
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
              <br/><br/><br/>
            </React.Fragment>
          ))}
        </div>
      </animated.article>
      <div className="grid">
        <button className="primary outline" onClick={handlePreviousQuestion}>
          <strong>← 이전 질문으로</strong>
        </button>

        {showResultButton ? (
          <button className='secondary'>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}> {/* 결과 보러가기 버튼에 결과 페이지 경로를 연결 */}
              <strong>결과 보러가기</strong>
            </Link>
          </button>
        ) : (
          <button onClick={handleNextQuestion}>
            <strong>다음 질문으로 →</strong>
          </button>
        )}
      </div>
    </animated.main>
  );
};

export default TypeTest;

