import profileList from '@/assets/scss/contents/profileList.module.scss'
import data from '@/api/list'  
import { useContext, useEffect, useState } from 'react'  
import { Context } from '@/context/Context';
import { MainContext } from '@/context/MainContext'; 
import { useNavigate } from 'react-router-dom'; 
import { handleProfileLocalGetItem, handleTimer, categoryProfileNav, handleFavorite, handleLike, handleProfileLink } from '@/js/list';

const ProfileList = () => {      
  const { state, newProfile, datas, setDatas } = useContext(Context);  
  const { state2 } = useContext(MainContext);   
  const localData = JSON.parse(localStorage.getItem("list")) // 데이터 가져오기
  const [count, setCount] = useState(1)  // 게시글 분
  const now = new Date()
  const seconds = now.getSeconds() 
  const navigate = useNavigate();
     
  
  useEffect(()=>{ 
    handleProfileLocalGetItem(localData, setDatas) 
  },[])

  useEffect(() => {  
    handleTimer(count, setCount, localData)  
    const timer = setInterval(() => {   
      setCount(seconds)  
    }, 1000);  
    return () => clearInterval(timer)
  }, [count]) 

  return (   
    <section className={`${profileList.profileList_wrap}`}>
      <ul className={profileList.profileList_ul}>  
        { 
          datas.map((item, id) => {
            return (
              categoryProfileNav(item, state2) &&
              <li key={id}>
                <div className={profileList.profileList_content}> 
                  <div className={profileList.profileList_write}>
                    <div> 
                      {
                        newProfile.img ?
                        <img src={newProfile.img} alt="" /> :
                        <img src='/images/common/profile_default.png' alt='기본프로필'/>
                      }  
                         <span>{newProfile.name ? newProfile.name : state.loginId}</span>
                      <span>{item.smallCategory2}</span>
                    </div>
                    <span>{item.uploadTime <= 30 ? item.uploadTime+'분전' : ''}</span>
                  </div>
                  <div className={profileList.profileList_label}>
                    <div>
                        <button onClick={() => { handleProfileLink(item, navigate)}}>
                          <span>{item.label}</span>
                      </button>
                        <button onClick={() => { handleProfileLink(item, navigate) }}>
                          <span>{item.subLabel}</span>
                      </button>
                    </div>
                    <div className={profileList.profileList_sympathy_img}>
                      {
                        item.contentImg[0] ?
                        <img src={item.contentImg[0].img} alt={item.smallCategory2} />
                        : '이미지를 불러올 수 없습니다.'
                      }
                    </div>
                  </div>
                  <div className={profileList.profileList_sympathy}>
                    <div className={profileList.profileList_sympathy_left}> 
                      <button onClick={() => { handleLike(item, datas, setDatas)}}>  
                        <i className={item.good ? 'icon_heart_full' : 'icon_heart'} aria-hidden="true" /> 
                        <span>공감</span>
                      </button>
                      <button> 
                        <i className='icon' aria-hidden="true"/>
                        <span>댓글</span>
                      </button>
                    </div>
                    <div className={profileList.profileList_sympathy_right}>
                      <button onClick={() => { handleFavorite(state, item, datas, setDatas) }}>
                        <i className={item.favorite ? 'icon_favorite_yellow' : 'icon_favorite'} aria-hidden="true" />
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