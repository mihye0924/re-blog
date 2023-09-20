
import detail from '@/assets/scss/contents/detail.module.scss'
import DetailHeader from '@/components/contents/DetailHeader'
import DetailContent from '@/components/contents/DetailContent'
import DetailComment from '@/components/contents/DetailComment'

function Detail() {
  return (
    <section className={detail.detail_content}> 
      <div className={detail.detail_wrap}> 
        <DetailHeader />
        <DetailContent />
        <DetailComment />
      </div> 
    </section>
  )
}
export default Detail