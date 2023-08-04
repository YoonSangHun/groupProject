import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import { Link } from 'react-scroll';
import { animated, useSpring } from 'react-spring';
import CardSwiper2 from '../components/CardSwiperDetail';

const Detail = () => {
    const [searchInput, setSearchInput] = useState(''); // New state variable for the search input
    const [corp_code, setCorpCode] = useState(''); // State variable for the corp_code
    const [company_name, setCompanyName] = useState(''); // State variable for the company name
    const [logoUrl, setLogoUrl] = useState('');

    const getLogoUrl = (corp_code, company_name) => {
        const encodedCompanyName = encodeURIComponent(company_name);
        const url = `https://unicom-s3.s3.eu-north-1.amazonaws.com/%EC%8B%9C%EA%B0%81%ED%99%94/%EC%8B%9C%EA%B0%81%ED%99%94_${encodedCompanyName}/${encodedCompanyName}+%EB%A1%9C%EA%B3%A0.png`;
        return url;
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        setCorpCode('170558');
        setCompanyName(searchInput);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };
    // 여기부터 애니메이션 효과 정의
    const fadeInAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 },
      });
    
      const article1Animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500,
        config: { duration: 500 },
      });
    
      const logoAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 1500,
        config: { duration: 500 },
      });
    
      const wordcloud1Animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 2500,
        config: { duration: 500 },
      });

      const locationAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 5500,
        config: { duration: 500 },
      });

      const averagesalaryAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 6500,
        config: { duration: 500 },
      });

      const genderratioAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 7500,
        config: { duration: 500 },
      });

      const salestrendAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 8500,
        config: { duration: 500 },
      });

      const incomestateAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 9500,
        config: { duration: 500 },
      });

      const welfareAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 10500,
        config: { duration: 500 },
      });
    //   여기까지 애니메이션 효과 정의
    useEffect(() => {
        if (corp_code && company_name) {
            setLogoUrl(getLogoUrl(corp_code, company_name));
        }
    }, [corp_code, company_name]);

    return (
        <animated.main className="container" id="main" style={fadeInAnimation}>
          <hr />
          <NavBar />
          <hr />

          {/* 검색창이 있는 도입 article */}
          <animated.article id="article1" style={article1Animation}>
            <hgroup>
              <br/>
              <h1 text align="center">"UniCom!  <mark>{ company_name || '0 0 0 0' }</mark> 은(는) 어떤 기업이죠?</h1><br/>
              <h2 text align="center">
                <strong>원하는 기업의 여러 정보를 확인하실 수 있는 페이지에요!</strong>
              </h2>
            </hgroup>
            <div className="grid">
              <form onSubmit={handleSearchSubmit}>
                <input 
                  type="search" 
                  id="search" 
                  name="search" 
                  placeholder="기업명으로 검색해보세요!" 
                  value={searchInput}
                  onChange={handleSearchInputChange} />
                <input type="submit" value="Search" />
              </form>
            </div>
          </animated.article>
          <hr />

          {/* 첫째줄 */}
          <div className="grid">

            {/* 로고 삽입부 */}
            <animated.article id="logo" style={logoAnimation}>
              <h4 text align="center">About...</h4><hr/>
              <img src={logoUrl} alt="logo"/>
              <footer text align="center"><small><strong><mark>{ company_name }</mark></strong>는요...!</small></footer>  
            </animated.article>

            {/* 총평 워드클라우드 삽입부 */}
            <animated.article id="wordcloud1" style={wordcloud1Animation}>
              <h4 text align="center">한 눈에 보는 이 기업 <mark>Keyword!</mark></h4><hr/>
              <CardSwiper2 />
              <footer text align="center"><small><strong><mark>마우스 휠</mark>을 돌려 여러 특징을 확인하세요.</strong></small></footer>  
            </animated.article>
          </div>
          <hr />

          {/* 둘째줄 */}
          <div className='grid'>
            {/* 위치 정보 삽입부*/}
            <animated.article id="location" style={locationAnimation}>
                <h4 text align="center">이 동네에 있는 회사네요!</h4><hr/>
                <img src='img\map.png' alt="location"/>
                <footer text align="center"><small><strong><mark>집 가까운 게</mark>최고죠!</strong></small></footer>  
            
            </animated.article>
            
            {/* 평균연봉 삽입부*/}
            <animated.article id="averagesalary" style={averagesalaryAnimation}>
                <h4 text align="center"><i>평균 연봉은 어느정도 될까?</i></h4><hr/>
                <img src='img\salary.png' alt="salary"/>
                <footer text align="center"><small><strong>업계 평균은 <mark>빨간색</mark>이 회사는</strong><strong><mark>파란색!</mark></strong></small></footer>                  
            </animated.article>
          </div>
          <hr/>

          {/* 셋째줄 */}
          <div className='grid'>
            {/* 구성원비 삽입부 */}
            <animated.article id="genderratio" style={genderratioAnimation}>
            <h4 text align="center">구성원의 성비는...?</h4><hr/>
                <img src='img\sgraph.png' alt="genderratio"/>
                <footer text align="center"><small><strong><mark>직원의 성비</mark>어떤 회사가 좋으세요?</strong></small></footer> 
            </animated.article>

            {/* 매출추세 삽입부 */}
            <animated.article id="salestrend" style={salestrendAnimation}>
                <h4 text align="center">연도별 매출을 확인하세요!</h4><hr/>
                <img src='img\salestrend.png' alt="salestrend"/>
                <footer text align="center"><small><strong><mark>연도 별 매출 증감추세</mark></strong>를 확인하실 수 있어요.</small></footer>    
            </animated.article>
          </div>
          <hr />

          {/* 마지막 줄 */}
          <div className='grid'>
            {/* 레이더차트 삽입부 */}
            <animated.article id="incomestate" style={incomestateAnimation}>
                <h4 text align="center">재무 성향을 레이더로 시각화했어요!</h4><hr/>
                <img src='img\navien.png' alt="incomestate"/>
                <footer text align="center"><small><strong><mark>안정성</mark>은 숫자가 작을수록 긍정적이라는 뜻이에요.</strong></small></footer>  
            </animated.article>

            {/* 복지별점 삽입부 */}
            <animated.article id="welfare" style={welfareAnimation}>
                <h4 text align="center">복지만족도에 별점을 매겨봤어요 :)</h4><hr/>
                <img src='img\welfare.png' alt="welfare"/>
                <footer text align="center"><small><strong><mark>워크넷 리뷰데이터</mark>를 참고했어요!</strong></small></footer>
            </animated.article>
          </div>
          <hr />

          {/* 버튼구역 */}
          <div className="grid">
            {/* 맨 위로 버튼 */}
            <div />
            <Link to="main" smooth={true}>
              <button className="primary outline">
                <strong>맨 위로</strong>
              </button>
            </Link>
            <div />
          </div>
        </animated.main>
      );
    }
    
    export default Detail;