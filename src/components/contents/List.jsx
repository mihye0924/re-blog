import list from '@/assets/scss/contents/list.module.scss'
import data from '@/api/list'  
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const List = ({ mainNav, subNav, onWrite }) => {   
  const [datas, setDatas] = useState(data)
  const navigate = useNavigate();
  // 좋아요 기능
  const handleLike = (e,item) => {
    item.good = !item.good
    window.localStorage.setItem("list", JSON.stringify(datas))
    setDatas([...datas])
  }

  // 북마크
  const handleFavorite = (e,item) => {
    item.favorite = !item.favorite
    window.localStorage.setItem("list", JSON.stringify(datas))
    setDatas([...datas])
  }
    

  // 카테고리 별 네비게이션
  const categoryNav = (item) => {
    if (Number(mainNav) === 1) {
      return item.middleCategory === Number(subNav)
    } else if (Number(mainNav) === 2) {
      return true
    } else {
      return item.lagreCategory === Number(mainNav)
    }
  }

  const handleLink = (item) => {
    if (item.lagreCategory && item.middleCategory) {
      navigate(`detail/${item.lagreCategory}/${item.middleCategory}/${item.id}`)
    } else {
      navigate(`detail/${item.lagreCategory}/0/${item.id}`)
    }

  } 
 

  useEffect(() => { 
    const obj = window.localStorage.getItem("list")
    if (obj) {
      const newData = JSON.parse(obj)   
      setDatas([...newData])
   }  
  },[])
  // const now = new Date();	// 현재 날짜 및 시간 
  // const minutes = now.getMinutes();	// 분
  // console.log("분 : ", minutes); 
 
  return (   
    <section className={`${list.list_wrap} ${onWrite ? list['list_wrap_active']: false}`}>
      <ul className={list.list_ul}>  
        { 
          datas.map((item, id) => {
            return (
              categoryNav(item) &&
              <li key={id}>
                <div className={list.list_content}> 
                  <div className={list.list_write}>
                    <div>
                      {
                        item.profileImg ?
                        <img src={item.profileImg} alt="" /> :
                        <img src='/images/common/profile_default.png' alt='기본프로필'/>
                      }
                      <span>{item.profileName}</span>
                      <span>{item.smallCategory2}</span>
                    </div>
                    <span>{item.uploadTime}</span>
                  </div>
                  <div className={list.list_label}>
                    <div>
                        <button onClick={() => { handleLink(item) }}>
                          <span>{item.label}</span>
                      </button>
                        <button onClick={() => { handleLink(item) }}>
                          <span>{item.subLabel}</span>
                      </button>
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
                        <i className={item.good ? 'icon_heart_full' : 'icon_heart'} aria-hidden="true" /> 
                        <span>공감</span>
                      </button>
                      <button> 
                        <i className='icon' aria-hidden="true"/>
                        <span>댓글</span>
                      </button>
                    </div>
                    <div className={list.list_sympathy_right}>
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
export default List