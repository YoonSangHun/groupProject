import { Link } from "react-router-dom";


const MyPage = () => {

    return (
        <dialog open>
                <article>
                    <Link to="/"><div aria-label="Close" className="close"></div></Link>
                    <hgroup>
                        <h1>My Page</h1><hr/><br/>
                        <h2>내 검사결과를 초기화고, 기업 즐겨찾기 리스트를 관리할 수 있어요 :)</h2>
                    </hgroup>
                    <form>
                    <div className='grid'>
                        <Link to = "Confirm"><button className='secondary'>검사정보 Reset</button></Link>
                        <button className='secondary outline'>즐겨찾기 관리</button>
                    </div>
                    </form>
                </article>

        </dialog>
    );
}

export default MyPage;