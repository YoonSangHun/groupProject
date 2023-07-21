import NavBar from "../components/NavBar";
import CardSwiper from "../components/CardSwiper";
import { Link } from "react-router-dom";


const Detail = () => {
    return (
        <main className="container">
            <hr/><NavBar /><hr/>
            <header className="container">
                <article id="article">
                    {/* 검색창 */}
                    <input 
                        type="search" 
                        id="search" 
                        name="search" 
                        placeholder="기업명을 입력하면 해당 기업의 정보를 확인하실 수 있어요 :)" 
                    />
                    <hgroup>
                        <br/>
                        {/* 추후 DB에서 기업 이름 호출 */}
                        <h1 text align="center">"카카오" 의 상세정보를 확인하세요.</h1><br/>
                        <h2 text align="center">
                            <strong>마우스 휠을 돌려가며 도움이 되는 정보를 확인하세요!
                            </strong>
                        </h2>
                    </hgroup>
                </article>
                <article id="article">
                    <CardSwiper />
                </article>
            </header>    
            <div className="grid">
                <div/>
                <Link to = "/"><button className="primary"><strong>Main Page</strong></button></Link>
                <div/>
            </div>
        </main>
    );
}

export default Detail;