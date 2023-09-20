import profileMain from '@/assets/scss/contents/profileMain.module.scss' 
// import { useState } from 'react';

const ProfileMain = ({handleProfilePopup, profileInfo}) => { 
  const profile = JSON.parse(window.localStorage.getItem("profile"))
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
            src={profile.img ? profile.img :`/images/common/thumbnail.svg`}
            alt="프로필 이미지"
            className={profileMain.profileMainp_contents_profileimg}
          />
          <div className={profileMain.profileMain_contents_text}>
            <span className={profileMain.profileMain_contents_text_title}>{profile.name}</span>
            <span className={profileMain.profileMain_contents_text_desc}>{profile.sectors}</span>
          </div>
          {
            profile.textarea.length > 0 ? <span>{profile.textarea}</span> : <button onClick={profileInfo} className={profileMain.profileMain_contents_button}>프로필 소개 추가....</button>
          }
        </div>  
      </div>  
    </div>

  )
} 
export default ProfileMain