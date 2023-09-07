import main from '@/assets/scss/layout/main.module.scss'
// import { useEffect } from 'react'
import { popularList } from '@/api/popularList.jsx' 
import { newsList } from '@/api/newsList.jsx' 
import List from '@/components/common/List.jsx'    
import { Link } from 'react-router-dom'
function App() {   
  return (
    <div className={main.main_content}>
      <div className={main.main_right}>

      </div>
      <div className={main.main_left}>
        <div className={main.main_left_div}> 
          <List list={popularList} keys={"popular"}/>
          <List list={newsList} keys={"news"}/>
          <div className={main.main_download}>
            <div className={main.main_download_title}> 
                <span>앱 다운로드</span>
            </div>
            <ul className={main.main_download_ul}>
              <li>
                <button>
                  <img src='/images/content/download/appstore.png' alt='애플스토어' />
                  <span>App Store</span>
                </button>
              </li>
              <li> 
                <button>
                  <img src='/images/content/download/googleplay.png' alt='구글스토어' />
                  <span>Google Play</span>
                </button>
              </li>
            </ul>
          </div>
          <div className={main.main_footer}>
            <ul className={main.main_info}>
              <li>
                <Link to="/">이용약관</Link>
              </li>
              <li>
                <Link to="/">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/">광고정보</Link>
              </li>
            </ul>
            <div className={main.main_copyright}>
              © 2021 owwners, All rights reserved.
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
