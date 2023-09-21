import datailheader from '@/assets/scss/contents/detailHeader.module.scss'
import data from '@/api/list' 
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
function DetailHeader({login}) { 
  const navigate = useNavigate();
  const [active, setActive] = useState(false)
  const [datas, setDatas] = useState(data)
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
      if(login) {
        datas.forEach((item) => {
          if (item.lagreCategory === largeCategory &&
            item.id === contentId &&
            item.middleCategory === middleCategory) {
            if (item.favorite) {
              item.favorite = false 
              setFavorite('icon_favorite')
             } else {
               item.favorite = true  
               setFavorite('icon_favorite_yellow_2') 
             }
          }
          window.localStorage.setItem("list",JSON.stringify(datas))
          setDatas([...datas]) 
        }) 
      }else {
        alert('로그인 필요합니다.')
      }
     })
  },[login, datas, largeCategory, middleCategory, contentId])
  
  // 북마크 - 로컬 데이터로 메인과 상세 연결
  const handleLocalSetItem = () => { 
    const arr = window.localStorage.getItem("list")   
    if(arr){
      const list = JSON.parse(arr) 
      list.forEach((item) => {
        if (item.lagreCategory === largeCategory &&
          item.id === contentId &&
          item.middleCategory === middleCategory) {  
          if (item.favorite) {
            setFavorite('icon_favorite_yellow_2') 
          } else {
            setFavorite('icon_favorite')
            }
          }
      }) 
      setDatas([...list])
    }   
  }
  useEffect(() => { 
    handleLocalSetItem()
  },[]) 

 
  
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