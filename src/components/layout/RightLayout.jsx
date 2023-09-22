import right from '@/assets/scss/layout/right.module.scss'
import popularList from '@/api/popularList' 
import newsList from '@/api/newsList' 
import SwiperList from '@/components/common/SwiperList'    
import { Link } from 'react-router-dom'
const RightLayout = () => {
  return (
  <aside className={right.right_wrap}>
  <div className={right.right_wrap_div}> 
    <SwiperList list={popularList} keys={"popular"}/>
    <SwiperList list={newsList} keys={"news"}/>
    <div className={right.right_download}>
      <div className={right.right_download_title}> 
          <span>앱 다운로드</span>
      </div>
      <ul className={right.right_download_ul}>
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
    <div className={right.right_footer}>
      <ul className={right.right_info}>
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
      <div className={right.right_copyright}>
        © 2021 owwners, All rights reserved.
        </div>
    </div>
  </div>
</aside>
  )
}
export default RightLayout