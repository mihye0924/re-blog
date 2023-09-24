import  navList from '@/api/profileNav'
import profileNav from '@/assets/scss/contents/profileNav.module.scss' 
import { ProfileContext } from '@/context/ProfileContext';
import { useContext } from 'react';

const ProfileNav = () => { 
  const {mainNav, setMainNav} = useContext(ProfileContext);  

  return (
    <div className={profileNav.profileNav_wrap}>
      <ul className={profileNav.profileNav_main}>
        {navList.map((item) => (
          <li key={item.id} className={`${item.id === Number(mainNav) ? profileNav['profileNav_main_active'] : ''}`}>
            <button onClick={(e) => {setMainNav(e.target.value)}} value={item.id}> 
              {item.label}
            </button>
          </li>
        ))}
      </ul> 
    </div>

  )
} 
export default ProfileNav