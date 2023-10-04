import list from '@/assets/scss/contents/list.module.scss'
import data from '@/api/list'   
import { useContext, useEffect, useMemo, useState } from 'react';
import { Context } from '@/context/Context'; 
import { useNavigate } from 'react-router-dom';

const List = () => {   
  const {newProfile, isLogin, mainNav, subNav, newWrite, setNewWrite, loginId} = useContext(Context);  
  const [datas, setDatas] = useState(data)  
  const navigate = useNavigate();
  
  // 리스트 - 좋아요 기능
  const handleLike = useMemo(() => {
    return ((e,item) => {
      item.good = !item.good 
      window.localStorage.setItem("list", JSON.stringify(newWrite))
      setNewWrite([...newWrite])   
    })
  },[newWrite, setNewWrite])

  // 리스트 - 북마크
  const handleFavorite = useMemo(() => {
    return ((e,item) => { 
      if(isLogin) {
        item.favorite = !item.favorite
        setNewWrite([...newWrite]) 
        window.localStorage.setItem("list", JSON.stringify(newWrite))
      }else {
        alert('로그인이 필요합니다.')
      }
      }
    )
  },[isLogin, newWrite, setNewWrite])
     
  // 리스트 - 카테고리 별 네비게이션
  const categoryNav = useMemo(() => {
    return ((item) => {
      if (Number(mainNav) === 1) {
        return item.middleCategory === Number(subNav)
      } else if (Number(mainNav) === 2) {
        return true
      } else {
        return item.lagreCategory === Number(mainNav)
      }
    })
  },[mainNav, subNav])
 

  // 리스트 -  url 주소 확인 후 detail페이지로 값 보내기
  const handleLink = useMemo(() => {
    return ((item) => {
      if (item.lagreCategory && item.middleCategory) {
        navigate(`detail/${item.lagreCategory}/${item.middleCategory}/${item.id}`) 
      } else {
        navigate(`detail/${item.lagreCategory}/0/${item.id}`)
      } 
    })
  },[])
 

  // 리스트 - 로컬 데이터 가져오기
  const handleLocalGetItem = () => {   
    const localItem = JSON.parse(window.localStorage.getItem("list"))
    if(localItem){
      setDatas([...localItem]) 
      setNewWrite([...localItem])
      localItem.forEach((item) => {
        if(!isLogin && item.favorite) {
          item.favorite = !item.favorite
        }
      })    
    }
  }
  
  // 리스트 - 게시글 정렬하기
  const handleSort = useMemo(() => {  
    return (() => {  
      const sortList = datas.sort((a,b) => {
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
          return 0;
        });  
        setDatas([...sortList])
   })
  },[datas])
    
  useEffect(() => {   
    handleLocalGetItem()
    handleSort() 
  }, [isLogin]) 

  return (   
    <section className={`${list.list_wrap}`}>
      <ul className={list.list_ul}>  
        { 
          newWrite.map((item, id) => {
            return (
              categoryNav(item) &&
              <li key={id}>
                <div className={list.list_content}> 
                  <div className={list.list_write}>
                    <div> 
                      {
                         newProfile.img ?
                         <img src={newProfile.img} alt="" /> :
                         <img src='/images/common/profile_default.png' alt='기본프로필'/>
                      }  
                      <span>{newProfile.name ? newProfile.name : loginId[0].id}</span>
                    </div>
                    <span>{item.uploadTime} 분전</span>
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
                        item.contentImg[0] ?
                        <img src={item.contentImg[0].img} alt={item.smallCategory2} />
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