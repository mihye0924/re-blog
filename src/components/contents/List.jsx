import list from '@/assets/scss/contents/list.module.scss'
import { data } from '@/api/List'
import { useState } from 'react'
const List = ({ mainNav, subNav }) => {
  const [good, setGood] = useState(false); //좋아요
  const [goodIndex, setGoodIndex] = useState(1) //좋아요 번째
  const [favorite, setFavorite] = useState(false) //태그 

  console.log(goodIndex)
  return (
    <section className={list.list_wrap}>
      <ul className={list.list_ul}>
        {
          data.brand.map((item, index) => { 
            return ( 
              <li key={item.id}>
                <div className={list.list_content}> 
                  <div className={list.list_write}>
                    <div>
                      <img src={item.profileImg} alt={item.profileName} />
                      <span>{item.smallCategory1}</span>
                      <span>{item.smallCategory2}</span>
                    </div>
                    <span>{item.uploadTime}</span>
                  </div>
                  <div className={list.list_label}>
                    <div>
                      <p>{item.label}</p>
                      <p>{item.subLabel}</p>
                    </div>
                    <div className={list.list_sympathy_img}>
                      <img src={item.contentImg} alt={item.smallCategory2} />
                    </div>
                  </div>
                  <div className={list.list_sympathy}>
                    <div className={list.list_sympathy_left}>
                      <button onClick={() => { 
                        setGoodIndex(index)
                        item.good = !item.good
                        console.log(item.good)
                      }}>
                        {
                          item.good ? <i className='icon_heart_full' aria-hidden="true" /> :
                          <i className='icon_heart' aria-hidden="true" /> 
                        }
                        <span>공감</span>
                      </button>
                      <button> 
                        <i className='icon' aria-hidden="true"/>
                        <span>댓글</span>
                      </button>
                    </div>
                    <div className={list.list_sympathy_right}>
                      <button>
                        <i className='icon' aria-hidden="true" />
                        <span>즐겨찾기</span>
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