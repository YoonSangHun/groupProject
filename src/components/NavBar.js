import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <main className ="container">
            {/* 네비게이션 바 */}
            <nav>
                <ul />
                <ul>
                    {/*Logo 가 들어갈 부분  */}
                    <Link to = "/"><img src="./img/logo.jpg" alt="unicom logo"/></Link>
                </ul>
                <nav className='container fluid'>
                <ul/><ul/><ul/><ul/><ul/><ul/>
                <ul>
                    {/* 기업상세화면 */}
                    <Link to = "/Detail"><strong>Detail</strong></Link>
                </ul>
                <ul>
                    {/* 회원가입 */}
                    
                    <Link to = "/SignUp"><strong>SignUp</strong></Link>
                </ul>
                <ul>
                    {/* 로그인 */}
                    <Link to = "/Login"><strong>Login</strong></Link>
                </ul>
                <ul>
                    {/* 마이페이지 */}
                    <Link to = "/MyPage"><strong>My page</strong></Link>
                </ul>
                </nav>
            </nav>

        </ main>
    );
}

export default NavBar; 