import writePopup from '@/assets/scss/contents/writePopup.module.scss'
import data from '@/api/list' 
import categoryList from '@/api/categoryList'
import navList from '@/api/navList'
import { useEffect, useState } from 'react'
function WritePopup() {
  const [datas, setDatas] = useState(data) 
   
  useEffect(() => {   
    window.localStorage.setItem("list", JSON.stringify(data)) 
    const list = window.localStorage.getItem("list")
    setDatas([...list])
  },[])
  return (
    <div className={writePopup.writePopup}>
      <div className={writePopup.writePopup_wrap}>
        <div className={writePopup.writePopup_header}> 
          <div className={writePopup.writePopup_header_wrap}> 
            <span>글쓰기</span>
            <button><span>닫기</span><i className='icon close'/></button>
          </div>
        </div>
        <div className={writePopup.writePopup_contents}>
          <div className={writePopup.writePopup_top}>
            <nav>
              <ul>
                <li>
                  <button>카테고리1</button> 
                  <ul> 
                      {
                        navList.map((item) => {
                          return (
                            <li key={item.id}>
                              {item.label}
                            </li>
                          )
                        })
                      }
                  </ul>
                </li>
                <li>
                  <button>카테고리2</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={writePopup.writePopup_footer}>
          <div className={writePopup.writePopup_footer_wrap}>
            {
              <img
                src="/images/common/copy.svg`"
                alt="프로필 이미지"
                className={writePopup.writePopup_footer_copybutton}
              />
            }
            <button className={writePopup.writePopup_footer_textbutton}>작성하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WritePopup