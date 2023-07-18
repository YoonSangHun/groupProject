import { Link } from "react-router-dom";


const SignUp = () => {
    return (
            <dialog open>
                <article>
                    <Link to="/"><div aria-label="Close" className="close"></div></Link>
                    <hgroup>
                        <h1>Sign-Up</h1><hr/><br/>
                        <h2>회원가입 팝업입니다 :)</h2>
                    </hgroup>
    
                    <form>
                        {/* Username */}
                        <label htmlFor="text"><strong>User ID</strong></label>
                        <input
                            type="text"
                            id="text"
                            name="text"
                            placeholder="아이디"
                            
                        />
                        {/* {
                            username === "" ? null :
                                username.length <= 3 ? <small>아이디는 3자리 이상이어야 합니다.</small> :
                                    !checkUsername ?
                                        <small>사용 가능한 아이디 입니다.</small>:<small>이미 중복되는 아이디 입니다.</small>
                        } */}
    
                        {/* Password */}
                        <label htmlFor="text"><strong>Password</strong></label>
                        <input type="password" id="text" name="text" placeholder="비밀번호"/>
                        <input type="password" id="text" name="text" placeholder="비밀번호 확인"/>
    
                        {/* Email */}
                        <label htmlFor="text"><strong>Email</strong></label>
                        <input type="email" id="text" name="text" placeholder="이메일 주소를 입력해주세요"/>
    
                        {/* Submit */}
                        <button type="submit">회원가입</button>
                    </form>
                </article>
            </dialog>
        );
    };
    
    export default SignUp;
