import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import { Link } from 'react-scroll';
import { animated, useSpring } from 'react-spring';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';



const Detail = () => {
    const [searchInput, setSearchInput] = useState('');
    const [submittedSearch, setSubmittedSearch] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [pieChartUrl, setPieChartUrl] = useState('');
    const [radarChartUrl, setRadarChartUrl] = useState('');
    const [salUrl, setSalUrl] = useState('');
    const [predUrl, setPredUrl] = useState('');
    const [mapUrl, setMapUrl] = useState('');
    const [starUrl, setStarUrl] = useState('');
    const [proUrl, setProUrl] = useState('');
    const [conUrl, setConUrl] = useState('');
    const [titleUrl, setTitleUrl] = useState('');

    const fetchImageUrls = async (searchTerm) => {
        if (!searchTerm) {
            return;  // If searchInput is an empty string, exit the function early.
        }
    
        try {
            const responseCorp = await axios.get('https://g39725izal.execute-api.eu-north-1.amazonaws.com/stage1/corp', {
                params: {
                    corp_name: searchInput,
                },
            });
    
            const data = responseCorp.data;  // parse the JSON string
    
            setLogoUrl(data.logo_url);
            setPieChartUrl(data.pie_chart_url);
            setRadarChartUrl(data.radar_chart_url);
            setSalUrl(data.sal_url);
            setPredUrl(data.pred_url);
            setMapUrl(data.map_url);
            setStarUrl(data.star_url);
            setProUrl(data.pro_url);
            setConUrl(data.con_url);
            setTitleUrl(data.title_url);
    
        } catch (error) {
            console.error(`Error fetching image URLs: `, error);
        }
    };

    const handleSearchSubmit = (e) => {
      e.preventDefault();

      setSubmittedSearch(searchInput); // Set the submittedSearch to the current value of searchInput
      
      fetchImageUrls(searchInput)
          .then((data) => {
              console.log(data);
          })
          .catch((error) => {
              console.error(`Error fetching image URLs: `, error);
          });
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
        delay: 2000,
        config: { duration: 1000 },
      });
    
      const wordcloud1Animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 3500,
        config: { duration: 1000 },
      });

      const locationAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 6000,
        config: { duration: 1000 },
      });

      const genderratioAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 7500,
        config: { duration: 1000 },
      });

      const averagesalaryAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 9000,
        config: { duration: 1000 },
      });

      const salestrendAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 10500,
        config: { duration: 1000 },
      });

      const incomestateAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 12000,
        config: { duration: 1000 },
      });

      const welfareAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 13500,
        config: { duration: 1000 },
      });
    //   여기까지 애니메이션 효과 정의
 
    
    
    return (
        <animated.main className="container" id="main" style={fadeInAnimation}>
          <hr /><NavBar /><hr />
          <animated.article id="article1" style={article1Animation}>
            <hgroup>
              <br/>
              <h1 text align="center">"UniCom!  <mark>{ searchInput || '○○○○' }</mark> 은(는) 어떤 기업이죠?</h1><br/>
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
                  onChange={(e) => setSearchInput(e.target.value)} 
                />
                <input type="submit" value="Search" />
              </form>
            </div>
          </animated.article><hr />

          {submittedSearch.length > 0 && (
            <>
              <div className="grid">
            
                {/* 로고 삽입부 */}
                <animated.article id="logo" style={logoAnimation}>
                  <h4 text align="center">About...</h4><hr/>
                  <img src={logoUrl} alt="logo"/>
                  <footer text align="center"><small><strong><mark>{ searchInput }</mark></strong>은(는)요...!</small></footer>  
                </animated.article>

                {/* 총평 워드클라우드 삽입부 */}
                <animated.article id="wordcloud1" style={wordcloud1Animation}>
                  <h4 text align="center">한 눈에 보는 이 기업 <mark>Keyword!</mark></h4><hr/>
                  <Swiper
                      effect={'coverflow'}
                      mousewheel={true}
                      grabCursor={true}
                      loop={true}
                      centeredSlides={true}
                      slidesPerView={'auto'}
                      coverflowEffect={{
                        rotate: 100,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: true,
                        overhidden: true,
                      }}
                      pagination={true}
                      modules={[EffectCoverflow, Pagination, Mousewheel]}
                    
                > 
                      <SwiperSlide><img src={titleUrl} alt="특징"/></SwiperSlide>
                      <SwiperSlide><img src={proUrl} alt="장점"/></SwiperSlide>
                      <SwiperSlide><img src={conUrl} alt="단점"/></SwiperSlide>
                  </Swiper>
                  <footer text align="center"><small><strong><mark>마우스 휠</mark>을 돌려 여러 특징을 확인하세요.</strong></small></footer>  
                </animated.article>
              </div>
              <hr />

              {/* 둘째줄 */}
              <div className='grid'>
                {/* 위치 정보 삽입부*/}
                <animated.article id="location" style={locationAnimation}>
                    <h4 text align="center">" 출 퇴근이 쉬워야 할텐데! "</h4><hr/>
                    <img src={mapUrl} alt="Location"/>
                    <footer text align="center"><small><strong><mark>집 가까운 게</mark>최고죠!</strong></small></footer>  
                
                </animated.article>
                {/* 구성원비 삽입부 */}
                <animated.article id="genderratio" style={genderratioAnimation}>
                <h4 text align="center">" 구성원의 성비는...? "</h4><hr/>
                    <img src={pieChartUrl} alt="genderratio"/>
                    <footer text align="center"><small><strong><mark>파이차트</mark>로 확인하는 남녀성비</strong></small></footer> 
                </animated.article>
                
              </div>
              <hr/>

          {/* 셋째줄 */}
          <div className='grid'>
            
            {/* 평균연봉 삽입부*/}
            <animated.article id="averagesalary" style={averagesalaryAnimation}>
                <h4 text align="center">" 평균 연봉은 어느정도 될까? "</h4><hr/>
                <img src={salUrl} alt="salary"/>
                <footer text align="center"><small><strong>업계 평균은 <mark>초록색!</mark>이 회사는</strong><strong><mark>파란색!</mark></strong></small></footer>                  
            </animated.article>

            {/* 매출추세 삽입부 */}
            <animated.article id="salestrend" style={salestrendAnimation}>
                <h4 text align="center">" 회사가 오래오래 잘 될까...? "</h4><hr/>
                <img src={predUrl} alt="salestrend"/>
                <footer text align="center"><small><strong><mark>연도 별 매출 증감추세</mark>와 예상된 매출액이에요.</strong></small></footer>    
            </animated.article>
          </div>
          <hr />

          {/* 마지막 줄 */}
          <div className='grid'>
            {/* 레이더차트 삽입부 */}
            <animated.article id="incomestate" style={incomestateAnimation}>
                <h4 text align="center">" 레이더 차트로 확인하는 <mark>회사의 방향성</mark> "</h4><hr/>
                <img src={radarChartUrl} alt="incomestate"/><br/><br/>
                <footer text align="center"><small><strong><mark>안정성</mark>은 숫자가 작을수록 긍정적이라는 뜻이에요.</strong></small></footer>  
            </animated.article>

            {/* 복지별점 삽입부 */}
            <animated.article id="welfare" style={welfareAnimation}>
                <h4 text align="center">" 직원들의 복지 만족도는 어떨까...? "</h4><hr/>
                <img src={starUrl} alt="Welfare"/><br/><br/>
                <footer text align="center"><small><strong>워크넷에서 <mark>복지정보 데이터</mark> 를 가져왔어요!</strong></small></footer>
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
            </>
          )}
          <hr/><hr/><hr/>
        </animated.main>
        
      );
    }
    
    export default Detail;