import {  BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import { useState } from 'react';
import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import { login } from '@/api/login.jsx' 
import LoginPopup from '@/components/contents/LoginPopup'
import RightLayout from '@/components/layout/RightLayout'
import Profile from '@/pages/Profile.jsx';
import Detail from '@/pages/Detail.jsx';
import Main from '@/pages/Main'
function App() {   
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false)
  function onClick() {
    setLoginModal(true)
  }
  
  const loginCheck = window.localStorage.getItem("login")
  // 로그인
  const [idValue, setIdValue] = useState('')
  const [pwValue, setPwValue] = useState('')
  const loginStatus = window.localStorage.getItem("login");
  const [isLogin, setIsLogin] = useState(loginStatus)
  function handleLogin() {
    login.map((item) => {
      if(item.id === idValue && item.pw === pwValue) {
        setLoginModal(false)
        setIsLogin(true)
        window.localStorage.setItem("login", true);
      } else if(item.id !== idValue && item.pw !== pwValue) {
        alert('회원정보가 없습니다.')
      } else if(item.id !== idValue ) {
        alert('아이디가 잘못됐습니다.')
      } else if(item.pw !== pwValue) {
        alert('비밀번호가 잘못됐습니다.')
      }
    })
  }
  function logout() {
    setIsLogin(false)
    window.localStorage.removeItem("login");
  }

  return (
    <>
     <Router>
        <Header onClick={onClick}  ProfileTo={'/Profile'} login={isLogin} logout={logout} />
        {
          loginModal ? <LoginPopup onClose={() => {setLoginModal(false)}} handleLogin={handleLogin} saveUserId={(e) => {setIdValue(e.target.value)}} saveUserPw={(e) => {setPwValue(e.target.value)}}  /> : false
        }
        <section className={main.main_content}>
        <Routes>
          <Route path="/" element={<Main />} />
          {
            loginCheck && <Route path="/Profile" element={<Profile />} />
          }
          <Route path="/detail" element={<Detail />} />
        </Routes> 
        <RightLayout />
      </section>
     </Router>
    </>
  )
}
export default App