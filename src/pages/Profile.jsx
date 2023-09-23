import ProfileLeftLayout from '@/components/layout/ProfileLeftLayout'
import ProfilePopup from '@/components/contents/ProfilePopup'
import { useState } from 'react'
import { ProfileContext } from '@/context/ProfileContext';

function Profile(){
  const [popup, setPopup] = useState(false)  //프로필 팝업
  const [mainNav, setMainNav] =  useState(1) //프로필 네비게이션 

  return (
    <ProfileContext.Provider value={{ 
      popup: popup,
      mainNav: mainNav,
      setPopup: setPopup,
      setMainNav: setMainNav
    }}> 
    <>
      {
        popup ? <ProfilePopup  /> : false
      }
      <ProfileLeftLayout />
    </>
    </ProfileContext.Provider>
  )
}
export default Profile