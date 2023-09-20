import  navList from '@/api/profileNav'
import profileNav from '@/assets/scss/contents/profileNav.module.scss' 

const ProfileNav = ({mainNav,onMainClick, }) => { 
  
  return (
    <div className={profileNav.profileNav_wrap}>
      <ul className={profileNav.profileNav_main}>
        {navList.map((item) => (
          <li key={item.id} className={`${item.id === Number(mainNav) ? profileNav['profileNav_main_active'] : ''}`}>
            <button onClick={onMainClick} value={item.id}> 
              {item.label}
            </button>
          </li>
        ))}
      </ul> 
    </div>

  )
} 
export default ProfileNav