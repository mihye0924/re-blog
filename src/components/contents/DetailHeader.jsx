import datailheader from '@/assets/scss/contents/detailHeader.module.scss'
import { data } from '@/api/List' 
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
function DetailHeader() { 
  const navigate = useNavigate();
  const [active, setActive] = useState(false)

  // ... 아이콘 기능 (수정,삭제)
  const handleSelect = () => {
    if (active === false) {
      setActive(true)
    } else {
      setActive(false)
    }
  } 
  useEffect(() => { 
    // 북마크
    data.forEach((item) => { 
      if (item.favorite) { 
        document.querySelector('.icon_favorite').classList = 'icon_favorite_yellow_2'
      }
    })
  },[]) 

  // 북마크
  const handleFavorite = (e) => { 
    const event = e.target
    if (event.classList.contains('icon_favorite')) {
      event.className = 'icon_favorite_yellow_2'
    } else {
      event.className = 'icon_favorite'
    }
     
    
  }
 
  
  return (
    <section className={datailheader.datailheader_wrap}>
      <div className={datailheader.datailheader_left}>
        <button onClick={()=>navigate(-1)}>
          <span>뒤로가기</span>
        </button>
      </div>
      <div className={datailheader.datailheader_right}>
        <button onClick={(e)=>{handleFavorite(e)}} >
          <i className='icon_favorite' aria-hidden="true"/>
          <span>북마크</span>
        </button>
        <button onClick={handleSelect}>
        <i className='icon_more' aria-hidden="true"/>
          <span>수정하기, 삭제하기</span>
        </button>
        {active &&
          <ul className={datailheader.datailheader_select}>
            <li>
              <button>수정하기</button>
            </li>
            <li>
              <button>삭제하기</button>
            </li>
          </ul>
        }
      </div>
    </section>
  )
}
export default DetailHeader