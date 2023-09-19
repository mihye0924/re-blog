import list from '@/assets/scss/contents/list.module.scss'
import { data } from '@/api/List' 
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

  return ( 
    <section className={`${list.list_wrap} ${onWrite ? list['list_wrap_active']: false}`}>
      <ul className={list.list_ul}>
        {
          data.brand.map((item) => { 
            return ( 
              <li key={item.id}>
                <div className={list.list_content}> 
                  <div className={list.list_write}>
                    <div>
                      <img src={item.profileImg} alt={item.profileName} />
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
                      <img src={item.contentImg} alt={item.smallCategory2} />
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