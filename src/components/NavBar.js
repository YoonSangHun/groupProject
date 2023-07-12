import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <main className ="container">
            {/* 네비게이션 바 */}
            <nav>
                <ul />
                <ul>
                    {/*Logo 가 들어갈 부분  */}
                    <Link to = "/"><strong style={{fontSize: '35px'}}><i>UniCom</i></strong></Link>
                </ul>
                <nav className='container fluid'>
                <ul/><ul/><ul/><ul/><ul/><ul/>
                <ul>
                    {/* 기업상세화면 */}
                    <Link to = "/Detail">Detail</Link>
                </ul>
                <ul>
                    {/* 로그인 */}
                    <Link to = "/Login">Login</Link>
                    
                </ul>
                <ul>
                    {/* 회원가입 버튼 */}
                    <Link to = "/SignUp">SignUp</Link>
                </ul>
                <ul>
                    <Link to = "/MyPage">My page</Link>
                </ul>
                </nav>
            </nav>

        </ main>
    );
}

export default NavBar; 