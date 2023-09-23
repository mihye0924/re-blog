import datailheader from '@/assets/scss/contents/detailHeader.module.scss' 
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
function DetailHeader({login}) { 
  const navigate = useNavigate();
  const [active, setActive] = useState(false) 
  const [favorite, setFavorite] = useState('icon_favorite') 
  const location = useLocation();
  const largeCategory = Number(location.pathname.split("/")[2])
  const middleCategory = Number(location.pathname.split("/")[3])
  const contentId = Number(location.pathname.split("/")[4])   


  // 북마크 - ... 아이콘 기능 (수정,삭제)
  const handleSelect = useMemo(() => {
    return (() => {
      if (active === false) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }, [active])
  
  // 북마크 - 이벤트 기능
  const handleFavorite = useMemo(() => {    
    return (() => {
      const datas = JSON.parse(window.localStorage.getItem("list")) 
      datas.forEach((item) => {
          if (item.lagreCategory === largeCategory &&
            item.id === contentId &&
            item.middleCategory === middleCategory) {
            if(login) {
              if (item.favorite) {
                item.favorite = false 
                setFavorite('icon_favorite')
              } else {
                item.favorite = true  
                setFavorite('icon_favorite_yellow_2') 
              }
            }else {
              alert('로그인이 필요합니다.')
            }
          }
          window.localStorage.setItem("list",JSON.stringify(datas)) 
        })  
     })
  },[login, largeCategory, middleCategory, contentId])
  
  // 북마크 - 로컬 데이터로 메인과 상세 연결
  const handleLocalGetItem = () => {  
    const datas = JSON.parse(window.localStorage.getItem("list") ) 
    datas.forEach((item) => {
    if (item.lagreCategory === largeCategory &&
      item.id === contentId &&
      item.middleCategory === middleCategory) {  
        if(login) {
            if (item.favorite) {
              setFavorite('icon_favorite_yellow_2') 
            } else {
              setFavorite('icon_favorite')
            }
          }else {
            setFavorite('icon_favorite')
          }
       }
    })  
  } 
  useEffect(() => { 
    handleLocalGetItem()
  },[login]) 
 
  return (
    <section className={datailheader.datailheader_wrap}>
      <div className={datailheader.datailheader_left}>
        <button onClick={()=>navigate(-1)}>
          <span>뒤로가기</span>
        </button>
      </div>
      <div className={datailheader.datailheader_right}>
        <button onClick={(e)=>{handleFavorite(e)}} >
          <i className={ favorite} aria-hidden="true"/>
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