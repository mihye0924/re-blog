import datailcontent from '@/assets/scss/contents/detailContent.module.scss'
import { data } from '@/api/List' 
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

  // 공감표현 이름 설정
  const sympathy = [
    {
      id: 1,
      label: '좋아요'
    },
    {
      id: 2,
      label: '슬퍼요'
    },
    {
      id: 3,
      label: '웃겨요'
    },
    {
      id: 4,
      label: '화나요'
    }
  ]
 

  // 공감표현 애니메이션 추가
  const handleEmtionToggle = () => {
    if (emotionActive) {
      setEmotionActive(false)
    } else {
      setEmotionActive(true)
    } 
  }
   
  // 공감표현 카운트 값 업데이트
  const handleSympathyCheck = (item) => {
    switch (item.id) {
      case 1:
        return good;
      case 2:
        return sad;
      case 3:
        return laugh;
      case 4:
        return angry;
    }
  }

  // 공감표현 카운트 클릭 이벤트
  const handleSympathy = (index) => {  
    switch (index) {
    case 0:
      setGood(good + 1)
        break;
    case 1:
      setSad(sad + 1) 
      break;
    case 2:
      setLaugh(laugh + 1) 
      break;
    case 3:
      setAngry(angry + 1) 
      break;
    }
  }
 
  useEffect(() => { 
    setSympathyTotal(good + sad + laugh + angry)
  }) 

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
                    <span>공감 {sympathyTotal}</span>
                    </div>
                    <div className={`${datailcontent.datailcontent_footer_top_right} ${emotionActive && datailcontent['datailcontent_footer_top_right_active']}`}>
                      {
                        emotionActive &&
                        sympathy.map((item, index) => {
                          return (
                            <button key={item.id} onClick={() => {handleSympathy(index)}}>
                              <span>{handleSympathyCheck(item)}</span>
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