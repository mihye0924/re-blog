import profileMain from '@/assets/scss/contents/profileMain.module.scss' 
// import { useState } from 'react';

const ProfileMain = ({handleProfilePopup, profileInfo}) => { 
  const dummyStorage = {
    img: '',
    name: '',
    sectors: '',
    textarea: ''
  }
  const profiles = window.localStorage.getItem("profile")
  const newProfile = profiles ? JSON.parse(profiles) : dummyStorage
  return (
    <div className={profileMain.profileMain_wrap}>
      <div className={profileMain.profileMain_header}>
        <div className={profileMain.profileMain_header_wrap}>
          <span>내프로필</span>
          <button onClick={handleProfilePopup}><i className={profileMain.profileMain_header_more}/></button>
        </div>
      </div>
      <div className={profileMain.profileMain_contents}>
        <div className={profileMain.profileMain_contents_wrap}>
          <img
            // src={imgFile ? imgFile :`/images/common/thumbnail.svg`}
            src={newProfile.img ? newProfile.img :`/images/common/thumbnail.svg`}
            alt="프로필 이미지"
            className={profileMain.profileMainp_contents_profileimg}
          />
          <div className={profileMain.profileMain_contents_text}>
            <span className={profileMain.profileMain_contents_text_title}>{newProfile.name}</span>
            <span className={profileMain.profileMain_contents_text_desc}>{newProfile.sectors}</span>
          </div>
          {
            newProfile.textarea.length > 0 ? <pre>{newProfile.textarea}</pre> : <button onClick={profileInfo} className={profileMain.profileMain_contents_button}>프로필 소개 추가....</button>
          }
        </div>  
      </div>  
    </div>

  )
} 
export default ProfileMain