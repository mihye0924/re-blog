// import { useEffect } from 'react'
import left from '@/assets/scss/layout/left.module.scss'
import { popularList } from '@/api/popularList.jsx' 
import { newsList } from '@/api/newsList.jsx' 
import List from '@/components/common/List.jsx'    
import { Link } from 'react-router-dom'
const leftLayout = () => {
  return (
  <aside className={left.left_wrap}>
  <div className={left.left_wrap_div}> 
    <List list={popularList} keys={"popular"}/>
    <List list={newsList} keys={"news"}/>
    <div className={left.left_download}>
      <div className={left.left_download_title}> 
          <span>앱 다운로드</span>
      </div>
      <ul className={left.left_download_ul}>
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
    <div className={left.left_footer}>
      <ul className={left.left_info}>
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
      <div className={left.left_copyright}>
        © 2021 owwners, All rights reserved.
        </div>
    </div>
  </div>
</aside>
  )
}
export default leftLayout