import NavBar from "../components/NavBar";


// SERVER : https://g39725izal.execute-api.eu-north-1.amazonaws.com/stage1/corp

const Detail = () => {
    return (        
        <main className="container">
            <hr/><NavBar/><hr/>
           
                    <article id="article">                       
                        <hgroup>
                            <br/>
                            {/* 기업 ID GET */}
                            <h1 text align="center">"UniCom!  <kbd>'삼성전자'</kbd> 는 어떤 기업이죠?</h1><br/>
                            <h2 text align="center">
                                <strong>원하는 기업의 여러 정보를 확인하실 수 있는 페이지에요!</strong>
                            </h2>
                        </hgroup>
                        {/* Search 기능 추가할 부분 */}
                        <div className="grid">
                            <input 
                                type="search" 
                                id="search" 
                                name="search" 
                                placeholder="기업명으로 검색해보세요!" />
                        </div>
                    </article><hr/>
            {/* 이미지 상단라인 */}
            <div className="grid">
                    {/* 기업 로고 GET */}
                    <article id="logo">
                        <h4 text align="center"><i>About...</i></h4>
                        <img src='img/samsunglogo.jpg' alt="logo"/>
                        <footer><small><strong><mark>삼성전자</mark></strong>는요...!</small></footer>  
                    </article>
                    {/* 워드클라우드 GET */}
                    <article id="wordcloud">
                        <h4 text align="center"><i>Word Cloud...</i></h4>
                        <img src='img\wckakao.png' alt="wordcloud"/>
                        <footer><small><strong><mark>이런 특징</mark></strong>이 있어요!</small></footer>  
                    </article>
                    {/* 유형분류 GET */}
                    <article id="type">
                        <h4 text align="center"><i>Type...</i></h4>
                        <img src='img\9.jpg' alt="type"/>
                        <footer><small><strong><mark>ㅇㅇ유형</mark></strong>으로 분류되었어요!</small></footer>  
                    </article>


            </div><hr/>
            {/* 그래프 라인 */}
            <div className="grid">
                    {/* 성비그래프 */}
                    <article id="genderratio">
                        <h4 text align="center"><i>Gender Ratio</i></h4>
                        <img src='img/sgraph.png' alt="genderratio"/>
                        <footer><small>구성원의 <strong><mark>남녀성비</mark></strong>는 어떨까요?</small></footer>                  
                    </article>
                    {/* 재무제표 */}
                    <article id="incomestate">
                        <h4 text align="center"><i>Income State</i></h4>
                        <img src='img\incomestate.png' alt="incomestate"/>
                        <footer><small><strong><mark>재무제표 정보</mark></strong>를 그래프로!</small></footer>                  
                    </article>
                    {/* 평균연봉 */}
                    <article id="Average Salary">
                        <h4 text align="center"><i>Average Salary</i></h4>
                        <img src='img\salary.png' alt="salary"/>
                        <footer><small><strong><mark>평균 연봉</mark></strong>과 업계평균을 비교...?</small></footer>                  
                    </article>
            </div>

        </main>
    );
}

export default Detail;