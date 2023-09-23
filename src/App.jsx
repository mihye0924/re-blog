
import { useEffect, useReducer, useState } from 'react';
import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import LoginPopup from '@/components/contents/LoginPopup'
import WritePopup from '@/components/contents/WritePopup'
import Router from '@/components/Router'
import RightLayout from '@/components/layout/RightLayout'
import data from '@/api/list'  
import { useNavigate } from 'react-router-dom'; 
import { Context } from '@/context/Context';
 

function App() {   

  const navigate = useNavigate();
  const loginStatus = window.localStorage.getItem("login");
 
  const [idValue, setIdValue] = useState('') // 아이디 체크 
  const [pwValue, setPwValue] = useState('') // 비밀번호 체크
  const [isLogin, setIsLogin] = useState(loginStatus) // 로그인
  const [loginModal, setLoginModal] = useState(false) // 로그인 모달 
  const [writeModal, setWriteModal] = useState(false) // 글쓰기 모달

  const [mainNav, setMainNav] =  useState(1) // 목록- 대분류
  const [subNav, setSubNav] = useState(1)  // 목록- 중분류


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
     <Context.Provider value={
      {
        isLogin: isLogin, 
        idValue: idValue, 
        pwValue: pwValue, 
        mainNav: mainNav,
        subNav: subNav,
        setIsLogin : setIsLogin,
        setLoginModal: setLoginModal, 
        setIdValue: setIdValue,
        setPwValue: setPwValue,
        setWriteModal: setWriteModal,
        setMainNav: setMainNav,
        setSubNav: setSubNav
        }
      }> 
        <Header/>
        {
          loginModal ? <LoginPopup/> : false
        }
        {
          writeModal ? <WritePopup /> : ''
        }
        <section className={main.main_content}>
          <Router />
          <RightLayout />
        </section>  
      </Context.Provider>
    </>
  )
}
export default App