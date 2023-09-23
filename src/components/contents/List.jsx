import list from '@/assets/scss/contents/list.module.scss'
import data from '@/api/list'   
import { useEffect, useMemo, useState } from 'react';

const List = ({ mainNav, subNav, login }) => {   
  const [datas, setDatas] = useState(data) 

  // 리스트 - 좋아요 기능
  const handleLike = useMemo(() => {
    return ((e,item) => {
      item.good = !item.good 
      window.localStorage.setItem("list", JSON.stringify(datas))
      setDatas([...datas]) 
    })
  },[datas])

  // 리스트 - 북마크
  const handleFavorite = useMemo(() => {
    return ((e,item) => { 
      if(login) {
        item.favorite = !item.favorite
        window.localStorage.setItem("list", JSON.stringify(datas))
        setDatas([...datas]) 
      }else {
        alert('로그인이 필요합니다.')
      }
      }
    )
  },[login, datas])
     
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
        window.location.href= `detail/${item.lagreCategory}/${item.middleCategory}/${item.id}`
      } else {
        window.location.href= `detail/${item.lagreCategory}/0/${item.id}`
      } 
    })
  },[])
 
  // 리스트 - 게시글 정렬하기
  const handleSort = useMemo(() => {  
    return (() => { 
      const sortList = datas.sort((a,b) => {
        if(a.uploadTime > b.uploadTime) return 1;
        if(a.uploadTime < b.uploadTime) return -1;
          return 0;
        });  
       setDatas([...sortList])
   })
  },[])

  // 리스트 - 로컬 데이터 가져오기
  const handleLocalGetItem = () => { 
    const getDatas =  JSON.parse(window.localStorage.getItem("list")) 
    if (getDatas) { 
      setDatas([...getDatas])
      getDatas.forEach((item) => {
        if(!login && item.favorite) {
          item.favorite = !item.favorite
        }
      })
    }        
  }
   
  useEffect(() => {   
    handleSort()
    handleLocalGetItem()
  }, [login])

  const dummyStorage = {
    img: '',
    name: '',
    sectors: '',
    textarea: ''
  }
  const profiles = window.localStorage.getItem("profile")
  const newProfile = profiles ? JSON.parse(profiles) : dummyStorage 
 
  return (   
    <section className={`${list.list_wrap}`}>
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
                        newProfile.img !== '' ?
                        <img src={newProfile.img} alt="" /> :
                        <img src={item.profileImg} alt=''/>
                      }
                      <span>{
                        newProfile.name !== '' ?
                        newProfile.name :
                        item.profileName //더미 이름입니다.
                      }</span> 
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