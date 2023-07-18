import { Link } from "react-router-dom";

const Confirm = () => {
    return(
        <dialog open>
            <article>
                <h3>정말 Reset하시겠습니까?</h3>
                <p>'확인' 을 누르면 검사한 정보의 초기화가 진행돼요!</p>
                <footer>
                <Link to ="/MyPage"><button className="secondary outline">취소</button></Link>
                <button className="secondary">확인</button>
                </footer>
            </article>
        </dialog>
    );
}

export default Confirm;