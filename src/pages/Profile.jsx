import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import ProfilePopup from '@/components/contents/ProfilePopup'
import ProfileLeftLayout from '@/components/layout/ProfileLeftLayout'
import RightLayout from '@/components/layout/RightLayout'
import { useState } from 'react';

function Profile(){
  const loginStatus = window.localStorage.getItem("login");
  const [isLogin, setIsLogin] = useState(loginStatus)

  const [isProfile, setIsProfile] = useState(false)
  function handleProfile() {
    setIsProfile(true)
  }
  

  return (
    <div className=''>
      <Header handleProfile={handleProfile} ProfileTo={'/Profile'} login={isLogin} />
      {
        isProfile && <ProfilePopup onClose={() => {setIsProfile(false)}}  />
      }
      <section className={main.main_content}>
        <ProfileLeftLayout />
        <RightLayout />
      </section>
    </div>
  )
}
export default Profile