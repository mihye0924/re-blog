import { Routes, Route } from 'react-router-dom';
import Profile from '@/pages/Profile.jsx';
import Detail from '@/pages/Detail.jsx';
import Main from '@/pages/Main' 
import { MainContext } from '@/context/MainContext';
import { useEffect, useReducer, useState } from 'react';
import { listInitial, listReducer } from '@/reducer/reducer'; 
import WritePopup from '@/components/contents/WritePopup'  

function Router() {   
  const loginCheck = window.localStorage.getItem("login")
  const [writeModal, setWriteModal] = useState(false) // 글쓰기 모달 
  const [writeTitle, setWriteTitle]= useState(""); // 글쓰기 제목 
  const [popup, setPopup] = useState(false)  //프로필 팝업
  const [mainNav, setMainNav] =  useState(1) //프로필 네비게이션   
  const [state2, dispatch2] = useReducer(listReducer, listInitial);  
 
  return ( 
      <MainContext.Provider value={{
        state2,
        dispatch2,   
        writeTitle: writeTitle, 
        setWriteTitle:setWriteTitle,
        writeModal:writeModal,
        setWriteModal: setWriteModal, 
        popup: popup,
        setPopup: setPopup,
        mainNav: mainNav,
        setMainNav: setMainNav
      }}> 
        {
          writeModal ? <WritePopup /> : ''
        }
        <Routes> 
          <Route path="/" element={<Main />} />
            {
              loginCheck && <Route path="/Profile" element={<Profile />} />
            }
          <Route path="/detail/:lagre/:middle/:id" element={<Detail />} /> 
        </Routes>  
      </MainContext.Provider> 
  )
}
export default Router