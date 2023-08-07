import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const TestResult2 = () => {
    
    // 기업 정보를 담을 상태 변수
    const [companies, setCompanies] = useState([]);
  
    // useEffect를 사용하여 컴포넌트가 마운트되면 한 번만 실행되는 비동기 함수를 정의합니다.
    useEffect(() => {
      // API에서 기업 정보를 가져오는 함수를 호출합니다.
      const fetchCompanies = async () => {
        try {
          // API 요청을 보내고 응답 데이터에서 기업 정보를 추출합니다.
          const response = await axios.get(
            "https://g39725izal.execute-api.eu-north-1.amazonaws.com/stage1/corp"
          );
          const companiesData = response.data;
          
          // 기업 정보를 상태 변수에 설정합니다.
          setCompanies(companiesData);
        } catch (error) {
          console.error("Error fetching companies:", error.message);
        }
      };
    
      // fetchCompanies 함수를 실행합니다.
      fetchCompanies();
    }, []);
      
    const fadeAnimation = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(-20px)' },
      });
    const articleAnimation = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 1000, // article은 이전 애니메이션 후 2초 딜레이 적용, 1.3초의 실행시간 적용
      config: { duration: 1300 },
    });
    
    const h2Animation = useSpring({
        opacity: articleAnimation.opacity.to((val) => 1 - val), // articleAnimation의 opacity 값과 반대 값을 사용합니다.
        config: { duration: 1300 }, // articleAnimation과 동일한 실행 시간을 사용합니다.
      });
    
      const resultimageAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 4500, // resultimage는 이전 애니메이션 후 4초 딜레이 적용, 1.3초의 실행시간 적용
        config: { duration: 1700 },
    });

    const companiesAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 8000, // companies는 이전 애니메이션 후 2초 딜레이 적용, 1.3초의 실행시간 적용
        config: { duration: 1500 },
    });
    
    // h2 로딩효과 사라지는지 여부를 관리하는 상태 값
    const [h2Hidden, setH2Hidden] = useState(false);

    useEffect(() => {
        // resultimageAnimation이 변화할 때마다 h2 요소의 상태 값을 변경합니다.
        if (resultimageAnimation.opacity.start === 0 && resultimageAnimation.opacity.to === 1) {
          setH2Hidden(true);
        }
    }, [resultimageAnimation]);

    
    return (
            <animated.main className="container" style={fadeAnimation}>
                <hr />
                <NavBar />
                <hr />
                {/* 소개 문구 */}

                {/* 질문지 부분 */}
                <animated.article id="article" style={articleAnimation}>
                  <br/>
                  <h1 className='single-line-text' 
                      style={{
                             display: 'flex',          // Flex 컨테이너로 설정하여 세로 중앙 정렬을 적용합니다.
                             alignItems: 'center',     // 아이템들을 세로 중앙으로 정렬합니다.
                             justifyContent: 'center', // 아이템들을 가로 중앙으로 정렬합니다.
                             height: '100%',}}         // 부모 요소의 높이에 맞추기 위해 높이를 100%로 설정합니다.
                  >결과를 기다려 주세요...!
                  </h1>
                  <animated.h2
                  aria-busy="true"
                  style={{
                    textAlign: "center",
                    opacity: h2Animation.opacity,
                    display: h2Hidden ? "none" : "block", }} // h2Hidden 상태 값에 따라 표시 여부 설정
                  ></animated.h2>
                </animated.article>
                {/* 결과에 맞는 이미지 출력 */}
                <animated.article id="resultimage" style={resultimageAnimation}>
                  <img src="img/설문조사결과_안전제일정대리.png" 
                       alt="유부장"
                       style={{
                           display: 'block', // 이미지를 블록 요소로 변경하여 가로 중앙 정렬을 적용합니다.
                           margin: '0 auto', // 가로 중앙 정렬을 위해 왼쪽과 오른쪽에 자동 마진을 설정합니다.
                           maxWidth: '100%', // 이미지의 최대 너비를 100%로 설정하여 부모 요소의 너비에 맞추도록 합니다.
                }} />
                </animated.article>
                
                {/* 해당기업 서머리 */}
                <animated.article id="companies" style={companiesAnimation}>
                  <details>
                    <summary style={ { textAlign:"center"}}><strong><mark>Click</mark> 하여 기업리스트 확인</strong><br/><br/>(리스트를 복사해두셨다가 <mark>상세정보 검색</mark>에 활용하시면 편해요!)</summary>
                      <h5 style={{ textAlign:"center" }}>
                        <br/>
                        {companies.map((company, index) => (
                        <mark key={index}>{company.corp_name}</mark>
                        ))}
                      </h5>
                  </details>
                </animated.article>
                
                <div className="grid">
                  <Link to = "/TypeTest">
                      <button className="secondary outline">
                      <strong>테스트 다시하기</strong>
                      </button>
                  </Link>
                  <Link to = "/Detail">
                      <button className="secondary">
                      <strong>기업 세부정보 알아보기</strong>
                      </button>
                  </Link>
                </div>
            </animated.main>

    )
};

export default TestResult2;