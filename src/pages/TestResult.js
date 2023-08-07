import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const TestResult = () => {
    // 결과 기업리스트 호출함수
    // 데이터 요청 후 저장할 상태 변수
    const [corpNames, setCorpNames] = useState([]);

    // useEffect를 활용하여 API 호출 및 데이터 저장
    useEffect(() => {
    // API 요청 함수 (쿼리 파라미터로 cluster 값을 전달)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://g39725izal.execute-api.eu-north-1.amazonaws.com/stage1/getlistcluster",
          {
            params: {
              cluster: 6, // 적절한 cluster 값을 전달
            },
            responseType: "json",
          }
        );
        // 응답에서 corp_name 데이터 추출하여 상태 변수에 저장
        const data = response.data;
        const corpNamesData = data.map((item) => item.corp_name);
        setCorpNames(corpNamesData);
      } catch (error) {
        console.error("API 요청 중 오류:", error);
      }
    };
    fetchData();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링 될 때에만 API 호출


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
                  <img src="img/설문조사결과_팔방미인유부장.png" 
                       alt="유부장"
                       style={{
                           display: 'block', // 이미지를 블록 요소로 변경하여 가로 중앙 정렬을 적용.
                           margin: '0 auto', // 가로 중앙 정렬을 위해 왼쪽과 오른쪽에 자동 마진을 설정.
                           maxWidth: '100%', // 이미지의 최대 너비를 100%로 설정하여 부모 요소너비에 맞춤적용.
                }} />
                </animated.article>
            
                {/* 해당기업 서머리 */}
                <animated.article id="companies" style={companiesAnimation}>
                  <details>
                    <summary style={ { textAlign:"center"}}><strong><mark>Click</mark> 하여 기업리스트 확인</strong><br/><br/>(리스트 복사 후<mark>상세정보 검색</mark>에 활용 해보세요!)</summary>
                      <h5 style={{ textAlign:"center" }}>
                        <br/>
                        <mark>{/* corpNames 데이터 출력 */}
                        {corpNames.map((corpName, index) => (
                        <span key={index}>{corpName}<br/></span>
                        ))}
                        </mark>
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
                </div><hr/><hr/><hr/>
            </animated.main>

    )
};

export default TestResult;