import '@picocss/pico/css/pico.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Detail from './pages/Detail';
import MyPage from './pages/MyPage';
import Confirm from './components/Confirm';
import Test from './pages/Test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Detail" element={<Detail />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="MyPage/Confirm" element={<Confirm />}></Route>

        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
