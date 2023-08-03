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
                <article id="logo">
                    <h4 text align="center"><i>About...</i></h4>
                    <img src={logoUrl} alt="logo"/>
                    <footer text align="center"><small><strong><mark>{ company_name }</mark></strong>는요...!</small></footer>  
                </article>
                <article id="wordcloud">
                    <h4 text align="center"><i>Word Cloud...</i></h4>
                    <img src='img\wordcloudtest3.png' alt="wordcloud"/>
                    <footer text align="center"><small><strong><mark>이런 장점</mark></strong>이 있어요!</small></footer>  
                </article>               
            </div><hr/>

            <div className="grid">
                <article id="genderratio">
                    <h4 text align="center"><i>Gender Ratio</i></h4>
                    <img src='img/sgraph.png' alt="genderratio"/>
                    <footer text align="center"><small>구성원의 <strong><mark>남녀성비</mark></strong>는 어떨까요?</small></footer>                  
                </article>
                <article id="incomestate">
                    <h4 text align="center"><i>Income State</i></h4>
                    <img src='img\incomestate.png' alt="incomestate"/>
                    <footer text align="center"><small><strong><mark>재무제표 정보</mark></strong>를 그래프로!</small></footer>                  
                </article>
            </div><hr/>    
            <div className='grid'>
                <article id="type">
                        <h4 text align="center"><i>Type...</i></h4>
                        <img src='img\9.jpg' alt="type"/>
                        <footer text align="center"><small><strong><mark>ㅇㅇ유형</mark></strong>으로 분류되었어요!</small></footer>  
                    </article>
                    <article id="Average Salary">
                        <h4 text align="center"><i>Average Salary</i></h4>
                        <img src='img\salary.png' alt="salary"/>
                        <footer text align="center"><small><strong><mark>평균 연봉</mark></strong>과 업계평균을 비교...?</small></footer>                  
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
