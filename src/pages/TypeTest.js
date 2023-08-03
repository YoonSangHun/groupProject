import NavBar from "../components/NavBar";

const TypeTest = () => {
    return (
        <main className="container">
            <hr/><NavBar /><hr/>
            <article id="article">
                <h2>질문 1.</h2>
                <div>
                    {/*답안 추출 로직, 단답형 */}
                    <input
                        type="radio"
                        id="radio-1"
                        name="radio"
                        value="샬라샬라"
                        // onChange={checkAnswer}
                        // checked={arr[0] === checkedValue}
                    />
                    <label htmlFor="radio-1">라벨</label>
                    <br/><br/>
                    <input
                        type="radio"
                        id="radio-2"
                        name="radio"
                        value="샬라샬라2"
                        // onChange={checkAnswer}
                        // checked={arr[1] === checkedValue}
                    /> 
                    <label htmlFor="radio-2">라벨2</label>
                </div>
                </article>
                <div className="grid">
                    <button className="primary outline">
                        <strong>← 이전 질문으로</strong>
                    </button>
                    <button> 
                    {/* className="outline" onClick={goNext} disabled={(!checkedValue)||(!checkedAnswer)} */}
                        <strong>다음 질문으로 →</strong>
                    </button>
                </div>
      
        </main>
    );
}

export default TypeTest;