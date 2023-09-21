
import left from '@/assets/scss/layout/left.module.scss'
import DetailHeader from '@/components/contents/DetailHeader'
import DetailContent from '@/components/contents/DetailContent'
import DetailComment from '@/components/contents/DetailComment'

function Detail({login, handleFavorite}) {
  return (
    <article className={left.left_wrap}> 
        <DetailHeader login={login} handleFavorite={handleFavorite}/>
        <DetailContent login={login}/>
        <DetailComment /> 
    </article>
  )
}
export default Detail