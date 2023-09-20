import profileMain from '@/assets/scss/contents/profileMain.module.scss' 

const ProfileMain = () => { 
  
  return (
    <div className={profileMain.profileMain_wrap}>
      <div className={profileMain.profileMain_header}>
        <div className={profileMain.profileMain_header_wrap}>
          <span>내프로필</span>
          <button><i className={profileMain.profileMain_header_more}/></button>
        </div>
      </div>
      <div className={profileMain.profileMain_contents}>
        <div className={profileMain.profileMain_contents_wap}>
          
        </div>  
      </div>  
    </div>

  )
} 
export default ProfileMain