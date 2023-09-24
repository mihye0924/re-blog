import datailcontent from '@/assets/scss/contents/detailContent.module.scss'
// import data from '@/api/list'  
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react'  


function DetailContent() {  
  const [datas, setDatas] = useState(JSON.parse(window.localStorage.getItem("list")))
  const [emotionActive, setEmotionActive] = useState(false)
  const location = useLocation();
  const largeCategory = Number(location.pathname.split("/")[2])
  const middleCategory = Number(location.pathname.split("/")[3])
  const contentId = Number(location.pathname.split("/")[4])   

  // 공감표현 - 애니메이션 추가
  const handleEmtionToggle = useMemo(() => {
    return (() => {
      if (emotionActive) {
        setEmotionActive(false)
      } else {
        setEmotionActive(true)
      } 
    })
  },[emotionActive])
  
  // 공감표현 - 카운트 클릭 이벤트 
  const handleSympathy = useMemo(() => {
    return ((index) => { 
    const datas = JSON.parse(window.localStorage.getItem('list')) 
    datas.forEach(item => {  
        if(item.lagreCategory === largeCategory && 
          item.id === contentId &&
          item.middleCategory === middleCategory) {
            switch(index) {
              case 1: //좋아요
                item.sympathy.good += 1  
                break;
                case 2: // 슬퍼요
                item.sympathy.sad += 1   
                break;
                case 3: // 웃겨요
                item.sympathy.laugh += 1   
                break;
                case 4: // 화나요
                item.sympathy.angry += 1   
                break; 
          }
          item.sympathy.total = item.sympathy.good + item.sympathy.sad + item.sympathy.laugh + item.sympathy.angry
        }
        window.localStorage.setItem("list", JSON.stringify(datas))  
      });
  
      setDatas([...datas]) 
    })
  }, [largeCategory, middleCategory, contentId])
  

  // 조회수 카운트
  const handleGetItem = () => {
    const newDatas = window.localStorage.getItem('list')
      if(newDatas) {
        const datas = JSON.parse(newDatas)
        datas.forEach((item) => {
          if (item.lagreCategory === largeCategory &&
            item.id === contentId &&
            item.middleCategory === middleCategory) {
              item.views += 1
              window.localStorage.setItem("list", JSON.stringify(datas))
            }
        })
        setDatas([...datas])
      } 
  }

  useEffect(() => {      
    handleGetItem()
  }, [])  
  
  return ( 
    <article className={datailcontent.datailcontent_wrap}>
      <div>  
        {datas.map((item) => {
          return (
            item.lagreCategory === largeCategory && 
            item.id === contentId &&
            item.middleCategory === middleCategory &&
            <div key={item.id}>
              <div className={datailcontent.datailcontent_header}>
                <div className={datailcontent.datailcontent_header_top}>
                  <h1>
                    {
                    item.profileImg ?
                    <img src={item.profileImg} alt="" /> :
                    <img src='/images/common/profile_default.png' alt='기본프로필'/>
                    }  
                  </h1>
                  <span>{item.profileName}</span>
                  <span>{item.smallCategory2}</span>
                </div>
                <ul className={datailcontent.datailcontent_header_bottom}>
                  {
                    item.hashTag.map((item2) => {
                      return (
                        item2.label &&
                        <li key={item2.id}>
                          <span># {item2.label}</span>  
                        </li>
                      )
                    })   
                  }
                </ul>
              </div>
              <div className={datailcontent.datailcontent_content}>
                  <h2>{item.label}</h2>
                  <h3>{item.subLabel}</h3>
                  <div className={datailcontent.datailcontent_content_img}>
                    {
                      item.contentImg && <img src={item.contentImg} alt=''/>
                   }
                  </div>
              </div>
              <div className={datailcontent.datailcontent_footer}>
                <div className={datailcontent.datailcontent_footer_top}>
                  <div className={datailcontent.datailcontent_footer_top_left}>
                    <span>조회 { item.views ? item.views : 0} 회</span>
                    <span>댓글</span>
                    <span>공감 {item.sympathy.total ? item.sympathy.total : 0} </span>
                    </div>
                    <div className={`${datailcontent.datailcontent_footer_top_right} ${emotionActive && datailcontent['datailcontent_footer_top_right_active']}`}>
                      {
                        emotionActive && 
                        <>
                        <button onClick={() => {handleSympathy(1)}}>
                            <span>{item.sympathy.good}</span>
                          </button>  
                          <button onClick={() => {handleSympathy(2)}}>
                            <span>{item.sympathy.sad}</span>
                          </button>  
                          <button onClick={() => {handleSympathy(3)}}>
                            <span>{item.sympathy.laugh}</span>
                          </button>  
                          <button onClick={() => {handleSympathy(4)}}>
                            <span>{item.sympathy.angry}</span>
                          </button>
                        </>  
                      }
                    </div>
                </div>
                <div className={datailcontent.datailcontent_footer_bottom}>
                  <button onClick={() => {handleEmtionToggle()}}>
                      <i className='icon' aria-hidden="true" />
                      <span>공감표현</span>
                  </button> 
                  <button>
                    <i className='icon' aria-hidden="true" />
                    <span>댓글쓰기</span>
                  </button> 
                  <button>
                    <i className='icon' aria-hidden="true" />
                    <span>공유하기</span>
                  </button> 
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}
export default DetailContent