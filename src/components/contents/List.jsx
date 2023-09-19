import list from '@/assets/scss/contents/list.module.scss'
import { data } from '@/api/List' 
import { useEffect, useState } from 'react'
const List = ({ mainNav, subNav, onWrite }) => {   
  
  // 좋아요 기능
  const handleLike = (e, item) => {
    const event = e.target.firstChild 
    item.good = true   
     
    if (event.classList.contains('icon_heart')) { 
        event.className = 'icon_heart_full'
      } else {
        event.className = 'icon_heart' 
    } 
  } 

  // 즐겨찾기
  const handleFavorite = (e, item) => {
    const event = e.target.firstChild 
    item.favorite = true   
    
    if (event.classList.contains('icon_favorite')) { 
      event.className = 'icon_favorite_yellow' 
    } else {
      event.className = 'icon_favorite'  
    } 
  }
   
  const [isMounted, setIsMouted] = useState(false)
  const [array, setArray] = useState([])
 
  
  data.brand.forEach((item) => {
    array.push(item)
  })
  data.free.forEach((item2) => { 
    array.push(item2)
  }) 
  data.humor.forEach((item3) => {
    array.push(item3)
  });  

  useEffect(() => {   
    setIsMouted(true)
    setArray(array)
  },[])

  const now = new Date();	// 현재 날짜 및 시간 
  const minutes = now.getMinutes();	// 분
  console.log("분 : ", minutes); 


  // console.log(mainNav, Number(subNav))

  return (   
    <section className={`${list.list_wrap} ${onWrite ? list['list_wrap_active']: false}`}>
      <ul className={list.list_ul}>  
        {
          isMounted &&
          array.map((item,id) => { 
            return (   
              <li key={id}>
                <div className={list.list_content}> 
                  <div className={list.list_write}>
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
                  <div className={list.list_label}>
                    <div>
                      <p>{item.label}</p>
                      <p>{item.subLabel}</p>
                    </div>
                    <div className={list.list_sympathy_img}>
                      {
                        item.contentImg ?
                        <img src={item.contentImg} alt={item.smallCategory2} />
                        : '이미지를 불러올 수 없습니다.'
                      }
                    </div>
                  </div>
                  <div className={list.list_sympathy}>
                    <div className={list.list_sympathy_left}> 
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
                    <div className={list.list_sympathy_right}>
                      <button onClick={(e) => { handleFavorite(e, item) }}>
                        <i className='icon_favorite' aria-hidden="true" />
                        <span>즐겨찾기</span>
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
export default List