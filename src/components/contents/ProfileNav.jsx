import  navList from '@/api/profileNav'
import profileNav from '@/assets/scss/contents/profileNav.module.scss' 
import { MainContext } from '@/context/MainContext';
import { useContext, useMemo } from 'react';

const ProfileNav = () => { 
  const {state2, dispatch2} = useContext(MainContext);  
  const handleNav = useMemo(() => {
    return((e) => {
      dispatch2({ 
        type:'CATEGORY',
        payload: {mainNav : e.target.value}
      })
    })
  },[dispatch2])
  return (
    <div className={profileNav.profileNav_wrap}>
      <ul className={profileNav.profileNav_main}>
        {navList.map((item) => (
          <li key={item.id} className={`${item.id === state2.mainNav ? profileNav['profileNav_main_active'] : ''}`}>
            <button onClick={handleNav} value={item.id}>  
              {item.label}
            </button>
          </li>
        ))}
      </ul> 
    </div>

  )
} 
export default ProfileNav