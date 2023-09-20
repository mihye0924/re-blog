import ProfileLeftLayout from '@/components/layout/ProfileLeftLayout'
import ProfilePopup from '@/components/contents/ProfilePopup'
import { useState } from 'react'

function Profile(){
  const [popup, setPopup] = useState(false)
  function onProfileSet(){
    setPopup(false)
  }
  function profileInfo(){
    setPopup(true)
  }
  return (
    <div className=''>
      {
        popup ? <ProfilePopup onProfileSet={onProfileSet} onClose={() => {setPopup(false)}} /> : false
      }
      <ProfileLeftLayout profileInfo={profileInfo} handleProfilePopup={() => {setPopup(true)}} />
    </div>
  )
}
export default Profile