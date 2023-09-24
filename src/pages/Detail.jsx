
import left from '@/assets/scss/layout/left.module.scss'
import DetailHeader from '@/components/contents/DetailHeader'
import DetailContent from '@/components/contents/DetailContent'
import DetailComment from '@/components/contents/DetailComment' 
import { DetailContext } from '@/context/DetailContext';

function Detail() {
  return (
    <DetailContext.Provider>
      <article className={left.left_wrap}> 
          <DetailHeader />
          <DetailContent/>
          <DetailComment /> 
      </article>
    </DetailContext.Provider>
  )
}
export default Detail