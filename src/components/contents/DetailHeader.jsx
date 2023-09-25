import datailheader from '@/assets/scss/contents/detailHeader.module.scss' 
import { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from '@/context/Context';

function DetailHeader() { 
  const {isLogin, newWrite, setNewWrite} = useContext(Context); 
  const navigate = useNavigate();
  const [active, setActive] = useState(false) 
  const [favorite, setFavorite] = useState('icon_favorite') 
  const location = useLocation();
  const largeCategory = Number(location.pathname.split("/")[2])
  const middleCategory = Number(location.pathname.split("/")[3])
  const contentId = Number(location.pathname.split("/")[4])   
  const [datas, setDatas] = useState(JSON.parse(window.localStorage.getItem("list")) ) 
 
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
            if(isLogin) {
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
  },[isLogin, largeCategory, middleCategory, contentId])
  
  // 북마크 - 로컬 데이터로 메인과 상세 연결
  const handleLocalGetItem = () => {  
    const datas = JSON.parse(window.localStorage.getItem("list") ) 
    datas.forEach((item) => {
    if (item.lagreCategory === largeCategory &&
      item.id === contentId &&
      item.middleCategory === middleCategory) {  
        if(isLogin) {
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

  // 게시글 수정하기
  const handleModify = useMemo(() => { 
  },[])

  // 게시글 삭제하기
  const handleDelete = useMemo(() => { 
   return (() => { 
    datas.forEach((item,index) => {
      if(item.id === contentId) {
        datas.splice(index, 1) 
      }
    });
    setNewWrite(datas)   
    setLocal(datas) 
    window.location.href = "/" 
   })
  },[contentId, datas, setNewWrite])

  const setLocal = (datas) => {
    window.localStorage.setItem("list", JSON.stringify(datas))
  }


  useEffect(() => { 
    handleLocalGetItem() 
  },[isLogin]) 
 
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
              <button onClick={handleModify}>수정하기</button>
            </li>
            <li>
              <button onClick={handleDelete}>삭제하기</button>
            </li>
          </ul>
        }
      </div>
    </section>
  )
}
export default DetailHeader