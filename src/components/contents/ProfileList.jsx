import profileList from '@/assets/scss/contents/profileList.module.scss'
import data from '@/api/list'  
import { useContext, useEffect, useMemo, useState } from 'react' 
import { ProfileContext } from '@/context/ProfileContext';
import { Context } from '@/context/Context';

const ProfileList = () => {   
  const {mainNav} = useContext(ProfileContext);    
  const {newProfile, LocalItem, setLocalItem} = useContext(Context);   
  // const [datas, setLocalItem] = useState(data) 

  // 리스트 - 좋아요 기능
  const handleLike = useMemo(() => {
    return ((e,item) => {
      item.good = !item.good 
      window.localStorage.setItem("list", JSON.stringify(LocalItem))
      setLocalItem(LocalItem) 
    })
  },[LocalItem, setLocalItem])

   // 리스트 - 북마크
   const handleFavorite = useMemo(() => {
    return ((e,item) => { 
        item.favorite = !item.favorite
        window.localStorage.setItem("list", JSON.stringify(LocalItem))
        setLocalItem(LocalItem) 
      }
    )
  },[LocalItem, setLocalItem])
  
  // 카테고리 별 네비게이션
  const categoryNav = useMemo(() => {
    return ((item) => {
      if (Number(mainNav) === 1) {
        return true
      } else if (Number(mainNav) === 2) {
        return false
      } else if(Number(mainNav) === 3) {
        return item.favorite === true
      }
    })
  },[mainNav])

  // 리스트 -  url 주소 확인 후 detail페이지로 값 보내기
  const handleLink = useMemo(() => {
    return ((item) => {
      if (item.lagreCategory && item.middleCategory) {
        window.location.href= `detail/${item.lagreCategory}/${item.middleCategory}/${item.id}`
      } else {
        window.location.href= `detail/${item.lagreCategory}/0/${item.id}`
      } 
    })
  },[])

  // 리스트 - 게시글 정렬하기
  const handleSort = useMemo(() => {  
    return (() => { 
      const sortList = LocalItem.sort((a,b) => {
        if(a.uploadTime > b.uploadTime) return 1;
        if(a.uploadTime < b.uploadTime) return -1;
          return 0;
        });  
       setLocalItem([...sortList])
   })
  },[])

  // 리스트 - 로컬 데이터 가져오기
  const handleLocalGetItem = () => { 
    const obj = window.localStorage.getItem("list")
    if (obj) {
      const newData = JSON.parse(obj)   
      setLocalItem(newData)
    }     
  }

  useEffect(() => { 
    handleSort()
    handleLocalGetItem() 
  },[]) 

  return (   
    <section className={`${profileList.profileList_wrap}`}>
      <ul className={profileList.profileList_ul}>  
        { 
          LocalItem.map((item, id) => {
            return (
              categoryNav(item) &&
              <li key={id}>
                <div className={profileList.profileList_content}> 
                  <div className={profileList.profileList_write}>
                    <div> 
                      {
                        newProfile.img ?
                        <img src={newProfile.img} alt="" /> :
                        <img src='/images/common/profile_default.png' alt='기본프로필'/>
                      }  
                      <span>{newProfile.name}</span>
                      <span>{item.smallCategory2}</span>
                    </div>
                    <span>{item.uploadTime} 분전</span>
                  </div>
                  <div className={profileList.profileList_label}>
                    <div>
                        <button onClick={() => { handleLink(item) }}>
                          <span>{item.label}</span>
                      </button>
                        <button onClick={() => { handleLink(item) }}>
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
                      <button onClick={(e) => { 
                        handleLike(e, item)
                      }}>  
                        <i className={item.good ? 'icon_heart_full' : 'icon_heart'} aria-hidden="true" /> 
                        <span>공감</span>
                      </button>
                      <button> 
                        <i className='icon' aria-hidden="true"/>
                        <span>댓글</span>
                      </button>
                    </div>
                    <div className={profileList.profileList_sympathy_right}>
                      <button onClick={(e) => { handleFavorite(e, item) }}>
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