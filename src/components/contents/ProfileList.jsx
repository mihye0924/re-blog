import profileList from '@/assets/scss/contents/profileList.module.scss'
import { data } from '@/api/list' 
import { useEffect, useState } from 'react'
const ProfileList = ({ onWrite }) => {   
  // 좋아요 기능
  const handleLike = (e, item) => {
    const event = e.target.firstChild 
    item.good = true   
     
    if (event.classprofileList.contains('icon_heart')) { 
        event.className = 'icon_heart_full'
      } else {
        event.className = 'icon_heart' 
    } 
  } 

  // 북마크
  const handleFavorite = (e, item) => {
    const event = e.target.firstChild 
    item.favorite = true   
    
    if (event.classprofileList.contains('icon_favorite')) { 
      event.className = 'icon_favorite_yellow' 
    } else {
      event.className = 'icon_favorite'  
    } 
  }
     

  // const now = new Date();	// 현재 날짜 및 시간 
  // const minutes = now.getMinutes();	// 분
  // console.log("분 : ", minutes); 
 
  return (   
    <section className={`${profileList.profileList_wrap} ${onWrite ? profileList['profileList_wrap_active']: false}`}>
      <ul className={profileList.profileList_ul}>  
        { 
          data.map((item) => {
            return (
              <li key={item.id}>
                <div className={profileList.profileList_content}> 
                  <div className={profileList.profileList_write}>
                    <div>
                      {
                        item.profileImg ?
                        <img src={item.profileImg} alt={item.profileName} /> :
                        <img src='/images/common/profile_default.png' alt='기본프로필'/>
                      }
                      <span>{item.smallCategory1}</span>
                      <span>{item.smallCategory2}</span>
                    </div>
                    <span>{item.uploadTime}</span>
                  </div>
                  <div className={profileList.profileList_label}>
                    <div>
                      <p>{item.label}</p>
                      <p>{item.subLabel}</p>
                    </div>
                    <div className={profileList.profileList_sympathy_img}>
                      {
                        item.contentImg ?
                        <img src={item.contentImg} alt={item.smallCategory2} />
                        : '이미지를 불러올 수 없습니다.'
                      }
                    </div>
                  </div>
                  <div className={profileList.profileList_sympathy}>
                    <div className={profileList.profileList_sympathy_left}> 
                      <button onClick={(e) => { 
                        handleLike(e, item)
                      }}>  
                        <i className='icon_heart' aria-hidden="true" /> 
                        <span>공감</span>
                      </button>
                      <button> 
                        <i className='icon' aria-hidden="true"/>
                        <span>댓글</span>
                      </button>
                    </div>
                    <div className={profileList.profileList_sympathy_right}>
                      <button onClick={(e) => { handleFavorite(e, item) }}>
                        <i className='icon_favorite' aria-hidden="true" />
                        <span>북마크</span>
                      </button>
                    </div>
                  </div> 
                </div>
            </li>
            )
          })
        }
      </ul>
    </section>
  )
}
export default ProfileList