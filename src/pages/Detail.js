import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import { Link } from 'react-scroll';

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

    useEffect(() => {
        if (corp_code && company_name) {
            setLogoUrl(getLogoUrl(corp_code, company_name));
        }
    }, [corp_code, company_name]);

    return (        
        <main className="container">
            <hr/><NavBar/><hr/>
            <article id="article1">                       
                <hgroup>
                    <br/>
                    <h1 text align="center">"UniCom!  <kbd>{ company_name || 'ㅇㅇㅇ' }</kbd> 은(는) 어떤 기업이죠?</h1><br/>
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
            {/* 아래부터 시각화 이미지 렌더링 */}
            </article><hr/>
            <div className="grid">
                {/* Logo 위치 */}
                <article id="logo">
                    <h4 text align="center"><i>About...</i></h4>
                    <img src={logoUrl} alt="logo"/>
                    <footer text align="center"><small><strong><mark>{ company_name }</mark></strong>는요...!</small></footer>  
                </article>
                {/* 특징 wordcloud */}
                <article id="wordcloud1">
                    <h4 text align="center">한 눈에 보는 이 기업 특징</h4>
                    <img src='img\wordcloudtest3.png' alt="wordcloud1"/>
                    <footer text align="center"><small><strong><mark>단어의 크기</mark></strong>가 중요해요!</small></footer>  
                </article>               
            </div><hr/>

            <div className="grid">
                {/* 장점 wordcloud */}
                <article id="wordcloud2">
                    <h4 text align="center">Word Cloud <mark>(장점)</mark></h4>
                    <img src='img/wordcloudtest3.png' alt="wordcloud2"/>
                    <footer text align="center"><small>많이 언급된<strong><mark>장점은?</mark></strong></small></footer>                  
                </article>
                {/* 단점 wordcloud */}
                <article id="wordcloud3">
                    <h4 text align="center">Word Cloud <mark>(단점)</mark></h4>
                    <img src='img\wordcloudtest3.png' alt="wordcloud3"/>
                    <footer text align="center"><small>많이 언급된<strong><mark>단점은?</mark></strong></small></footer>                  
                </article>
            </div><hr/>    

            <div className='grid'>
                {/* 위치 정보 */}
                <article id="location">
                    <h4 text align="center">이 동네에 있는 회사네요!</h4>
                    <img src='img\map.png' alt="location"/>
                    <footer text align="center"><small><strong><mark>집 가까운 게</mark>최고죠!</strong></small></footer>  
                {/* 평균연봉 */}
                </article>
                <article id="averagesalary">
                    <h4 text align="center"><i>Average Salary</i></h4>
                    <img src='img\salary.png' alt="salary"/>
                    <footer text align="center"><small><strong>업계 평균은 <mark>빨간색</mark>이 회사는</strong><strong><mark>파란색!</mark></strong></small></footer>                  
                </article>
            </div><hr/>

            <div className='grid'>
                {/* 구성원 성비 */}
                <article id="genderratio">
                    <h4 text align="center">구성원의 성비는...?</h4>
                    <img src='img\sgraph.png' alt="genderratio"/>
                    <footer text align="center"><small><strong><mark>직원의 성비</mark>어떤 회사가 좋으세요?</strong></small></footer>  
                {/* 매출추세 */}
                </article>
                <article id="salestrend">
                    <h4 text align="center">연도별 매출을 확인하세요!</h4>
                    <img src='img\salestrend.png' alt="salestrend"/>
                    <footer text align="center"><small><strong><mark>연도 별 매출 증감추세</mark></strong>를 확인하실 수 있어요.</small></footer>                  
                </article>
            </div><hr/>

            <div className='grid'>
                {/* 레이더 차트 */}
                <article id="incomestate">
                    <h4 text align="center">재무 성향을 레이더로 시각화했어요!</h4>
                    <img src='img\navien.png' alt="incomestate"/>
                    <footer text align="center"><small><strong><mark>안정성</mark>은 숫자가 작을수록 긍정적이라는 뜻이에요.</strong></small></footer>  
                {/* 복지 */}
                </article>
                <article id="welfare">
                    <h4 text align="center">복지만족도에 별점을 매겨봤어요 :)</h4>
                    <img src='img\welfare.png' alt="welfare"/>
                    <footer text align="center"><small><strong><mark>워크넷 리뷰데이터</mark>를 참고했어요!</strong></small></footer>                  
                </article>
            </div><hr/>
                   
            <div className="grid">
                <div />
                    <Link to="article1" smooth={true}>
                        <button className="primary outline">
                            <strong>맨 위로</strong>
                        </button>
                    </Link>
                <div />
            </div>

        </main>
    );
}

export default Detail;
