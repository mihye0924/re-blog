
import { useEffect, useState } from 'react';
import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import LoginPopup from '@/components/contents/LoginPopup'
import WritePopup from '@/components/contents/WritePopup'
import Router from '@/components/Router'
import RightLayout from '@/components/layout/RightLayout'
import data from '@/api/list'  
import { useNavigate } from 'react-router-dom'; 
import { Context } from '@/context/Context';
import login from '@/api/login'
 

function App() {    
  const navigate = useNavigate();
  const loginStatus = window.localStorage.getItem("login");
 
  const [loginId, setLoginID] = useState(login)
  const [idValue, setIdValue] = useState('') // 아이디 체크 
  const [pwValue, setPwValue] = useState('') // 비밀번호 체크
  const [isLogin, setIsLogin] = useState(loginStatus) // 로그인
  const [loginModal, setLoginModal] = useState(false) // 로그인 모달 
  const [writeModal, setWriteModal] = useState(false) // 글쓰기 모달

  const [mainNav, setMainNav] =  useState(1) // 목록- 대분류
  const [subNav, setSubNav] = useState(1)  // 목록- 중분류
  
  const [writeTitle, setWriteTitle]= useState(""); // 글쓰기 제목
  const [newWrite, setNewWrite] = useState(data) // 글쓰기
  const [LocalItem, setLocalItem] = useState(JSON.parse(window.localStorage.getItem("list")))

  // 프로필 - 헤더 값 변동
  const dummyStorage = {
    img: '',
    name: '',
    sectors: '',
    textarea: ''
  }
  const profiles = localStorage.getItem("profile")
  const [newProfile, setNewProfile] = useState(profiles ? JSON.parse(profiles) : dummyStorage)
  
  
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
        loginId: loginId,
        isLogin: isLogin, 
        idValue: idValue, 
        pwValue: pwValue, 
        mainNav: mainNav,
        subNav: subNav,
        newProfile: newProfile, 
        newWrite : newWrite, 
        LocalItem: LocalItem,
        writeTitle: writeTitle,
        setLoginID: setLoginID,
        setIsLogin: setIsLogin,
        setLoginModal: setLoginModal, 
        setIdValue: setIdValue,
        setPwValue: setPwValue,
        setWriteModal: setWriteModal,
        setMainNav: setMainNav,
        setSubNav: setSubNav,
        setNewProfile: setNewProfile, 
        setNewWrite: setNewWrite,
        setLocalItem: setLocalItem,
        setWriteTitle: setWriteTitle,
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