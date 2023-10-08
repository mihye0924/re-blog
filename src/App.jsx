
import { useEffect, useReducer, useState } from 'react';
import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import LoginPopup from '@/components/contents/LoginPopup'
import Router from '@/components/Router'
import RightLayout from '@/components/layout/RightLayout'
import data from '@/api/list'  
import { useNavigate } from 'react-router-dom'; 
import { Context } from '@/context/Context';
import { userInitial, userReducer } from '@/reducer/reducer';
 

function App() {     
  const [state, dispatch] = useReducer(userReducer, userInitial);
  const navigate = useNavigate();  


  // 프로필 - 헤더 값 변동
  const dummyStorage = {
    img: '',
    name: '',
    sectors: '',
    textarea: ''
  }
  const profiles = localStorage.getItem("profile")
  const [loginModal, setLoginModal] = useState(false) //로그인 모달
  const [newProfile, setNewProfile] = useState(profiles ? JSON.parse(profiles) : dummyStorage) //프로필
  const [newWrite, setNewWrite] = useState(data)
  
  useEffect(() => {    
    if (!localStorage.getItem("list")) {  
      localStorage.setItem("list", JSON.stringify(data)) 
    }  
  }, [])
  
  useEffect(() => { 
    if (!state.isLogin && window.location.pathname === '/Profile') { 
      alert('접근이 불가능합니다.')
      navigate("/") 
   } 
  })
  return (
    <>
     <Context.Provider value={
      {
        state,
        dispatch, 
        loginModal,
        setLoginModal,
        newProfile,    
        setNewProfile, 
        newWrite, 
        setNewWrite,
        }
      }> 
        <Header/>
        {
          loginModal ? <LoginPopup/> : false
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