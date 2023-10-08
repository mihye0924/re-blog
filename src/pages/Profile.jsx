import ProfileLeftLayout from '@/components/layout/ProfileLeftLayout'
import ProfilePopup from '@/components/contents/ProfilePopup'
import { useContext } from 'react'
import { MainContext } from '@/context/MainContext';

function Profile(){ 
  const {popup} = useContext(MainContext);  
  return ( 
    <>
      {
        popup ? <ProfilePopup  /> : false
      }
      <ProfileLeftLayout />
    </> 
  )
}
export default Profile