import datailcontent from '@/assets/scss/contents/detailContent.module.scss'
import data from '@/api/list' 
import sympathy from '@/api/sympathy' 
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react' 

function DetailContent() { 
  const [emotionActive, setEmotionActive] = useState(false)
  const location = useLocation();
  const largeCategory = Number(location.pathname.split("/")[2])
  const middleCategory = Number(location.pathname.split("/")[3])
  const contentId = Number(location.pathname.split("/")[4])  
  const [good, setGood] = useState(0) // 좋아요
  const [sad, setSad] = useState(0) // 슬퍼요
  const [laugh, setLaugh] = useState(0) //웃겨요
  const [angry, setAngry] = useState(0) // 화나요
  const [sympathyTotal, setSympathyTotal] = useState(0) //공감표현 총개수

  // 공감표현 애니메이션 추가
  const handleEmtionToggle = () => {
    if (emotionActive) {
      setEmotionActive(false)
    } else {
      setEmotionActive(true)
    } 
  }
  
  const handleSympathyGetItem = () => {
    const arr = window.localStorage.getItem("sympathy") 
    if(arr){
      const sympathy = JSON.parse(arr)
      sympathy.forEach((item) => {
        if(item.lagreCategory === largeCategory && 
          item.id === contentId &&
          item.middleCategory === middleCategory ){  
            setGood(item.sympathy.good) 
            setSad(item.sympathy.sad) 
            setLaugh(item.sympathy.laugh) 
            setAngry(item.sympathy.angry)  
          }
      })
    }
  }

  // 공감표현 카운트 클릭 이벤트 
  const handleSympathy = (index) => {  
    data.forEach(item => {  
      if(item.lagreCategory === largeCategory && 
        item.id === contentId &&
        item.middleCategory === middleCategory ){
          switch(index) {
            case 0: //좋아요
              item.sympathy.good += 1 
              break;
              case 1: // 슬퍼요
              item.sympathy.sad += 1 
              break;
              case 2: // 웃겨요
              item.sympathy.laugh += 1 
              break;
              case 3: // 화나요
              item.sympathy.angry +=1 
              break; 
          }
        }
        window.localStorage.setItem("sympathy", JSON.stringify(data)) 
    });
    handleSympathyGetItem()
    handleSympathyCheck()
  } 
  const handleSympathyCheck = (index) => {
    if(index === 0) {
      return good
    }else if( index === 1) {
      return sad
    }else if( index === 2) {
      return laugh
    }else {
      return angry
    }
  }
 
  useEffect(() => {  
    handleSympathyGetItem()
    handleSympathyCheck()
    // setSympathyTotal(good + sad + laugh + angry)
  },[]) 

  return ( 
    <article className={datailcontent.datailcontent_wrap}>
      <div>  
        {data.map((item) => {
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
                    <img src={item.profileImg} alt={item.profileName} /> :
                    <img src='/images/common/profile_default.png' alt='기본프로필'/>
                    }  
                  </h1>
                  <span>{item.smallCategory1}</span>
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
                    <span>조회 2,123 회</span>
                    <span>댓글</span>
                    <span>공감 </span>
                    </div>
                    <div className={`${datailcontent.datailcontent_footer_top_right} ${emotionActive && datailcontent['datailcontent_footer_top_right_active']}`}>
                      {
                        emotionActive &&
                        sympathy.map((item, index) => {
                          return (
                            <button key={item.id} onClick={() => {handleSympathy(index)}}>
                              <span>{handleSympathyCheck(index)}</span>
                            </button> 
                          )
                        })
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