import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import Popup from './components/common/Popup'
import RightLayout from './components/layout/RightLayout'
import LeftLayout from './components/layout/LeftLayout'
import {login} from '@/api/login.jsx' 
import { useEffect, useState } from 'react';
function App() {   
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false)
  function onClick() {
    console.log(loginModal)
    setLoginModal(true)
  }

  // 로그인
  const [idValue, setIdValue] = useState('')
  const [pwValue, setPwValue] = useState('')
  const loginStatus = window.localStorage.getItem("login");
  const [isLogin, setIsLogin] = useState(loginStatus || false)
  function handleLogin() {
    login.map((item) => {
      if(item.id === idValue && item.pw === pwValue) {
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
  useEffect(() => {
    window.localStorage.setItem("login", isLogin);
  }, [isLogin]);
  return (
    <>
      <Header onClick={onClick} login={ login } />
      {
        loginModal ? <Popup onClose={() => {setLoginModal(false)}} handleLogin={handleLogin} saveUserId={(e) => {setIdValue(e.target.value)}} saveUserPw={(e) => {setPwValue(e.target.value)}}  /> : false
      }
      <section className={main.main_content}>
        <RightLayout />
        <LeftLayout />
      </section>
    </>
  )
}

export default App
