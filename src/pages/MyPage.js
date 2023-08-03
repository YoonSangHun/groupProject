import { Link } from "react-router-dom";

// userdata delete 기능 필요
const MyPage = () => {

    return (
        <dialog open>
                <article>
                    <Link to="/"><div aria-label="Close" className="close"></div></Link>
                    <hgroup>
                        <h1>My Page</h1><hr/><br/>
                        <h2><strong><mark>검사결과</mark>를 초기화 할 수 있어요 :)</strong></h2>
                    </hgroup>
                    <form>
                    <div className='grid'>
                        <Link to = "Confirm"><button className='secondary'>검사정보 Reset</button></Link>
                
                    </div>
                    </form>
                </article>

        </dialog>
    );
}

export default MyPage;