import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import LoginPopup from './components/contents/LoginPopup'
import ProfilePopup from './components/contents/ProfilePopup'
import LeftLayout from './components/layout/LeftLayout'
import RightLayout from './components/layout/RightLayout'
import {login} from '@/api/login.jsx' 
import { useState } from 'react';
function App() {   
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false)
  function onClick() {
    setLoginModal(true)
  }

  // 로그인
  const [idValue, setIdValue] = useState('')
  const [pwValue, setPwValue] = useState('')
  const loginStatus = window.localStorage.getItem("login");
  const [isLogin, setIsLogin] = useState(loginStatus || false)
  const [isProfile, setIsProfile] = useState(false)
  function handleLogin() {
    login.map((item) => {
      if(item.id === idValue && item.pw === pwValue) {
        window.localStorage.setItem("login", isLogin);
        setLoginModal(false)
        setIsLogin(true)
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

  function handleProfile() {
    setIsProfile(true)
  }
  // 글작성
  const [write, setWrite] = useState(false)
  
  function handleWrite() {
    setWrite(true)
  }
  return (
    <>
      <Header onClick={onClick} handleProfile={handleProfile} login={isLogin} logout={logout} write={ handleWrite } />
      {
        loginModal ? <LoginPopup onClose={() => {setLoginModal(false)}} handleLogin={handleLogin} saveUserId={(e) => {setIdValue(e.target.value)}} saveUserPw={(e) => {setPwValue(e.target.value)}}  /> : false
      }
      {
        isProfile && <ProfilePopup onClose={() => {setIsProfile(false)}}  />
      }
      <section className={main.main_content}>
        <LeftLayout onWrite={ write } />
        <RightLayout />
      </section>
    </>
  )
}

export default App
