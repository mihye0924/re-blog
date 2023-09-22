
import { useEffect, useState } from 'react';
import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import login from '@/api/login' 
import LoginPopup from '@/components/contents/LoginPopup'
import WritePopup from '@/components/contents/WritePopup'
import Router from '@/components/Router'
import RightLayout from '@/components/layout/RightLayout'
import data from '@/api/list'  
import { useNavigate } from 'react-router-dom';

function App() { 
  const navigate = useNavigate();
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false)
  function onClick() {
    setLoginModal(true)
  }
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
    window.localStorage.removeItem("profile");
  }

  // 글쓰기
  const [writeModal, setWriteModal] = useState(false)
  function onWrite() { 
      setWriteModal(true)
  }

  useEffect(() => {
    if (!window.localStorage.getItem("list")) {
      window.localStorage.setItem("list", JSON.stringify(data)) 
    } 
  }, [])
  
  useEffect(() => { 
    if (!isLogin && window.location.pathname === '/Profile') { 
      alert('접근이 불가능합니다.')
      navigate("/") 
   }
  })
  return (
    <>
      <Header onClick={onClick} ProfileTo={'/Profile'} login={isLogin} logout={logout} />
      {
          loginModal ? <LoginPopup onClose={() => {setLoginModal(false)}} handleLogin={handleLogin} saveUserId={(e) => {setIdValue(e.target.value)}} saveUserPw={(e) => {setPwValue(e.target.value)}}  /> : false
      }
      {
        writeModal ? <WritePopup /> : ''
      }
        <section className={main.main_content}>
        <Router onWrite={onWrite} login={isLogin} />
        <RightLayout />
      </section>
    </>
  )
}
export default App