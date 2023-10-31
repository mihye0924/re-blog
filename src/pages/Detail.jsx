
import  { useEffect } from 'react';
import left from '@/assets/scss/layout/left.module.scss'
import DetailHeader from '@/components/contents/DetailHeader'
import DetailContent from '@/components/contents/DetailContent'
import DetailComment from '@/components/contents/DetailComment'  

function Detail() {
  useEffect(() => {
    window.location.pathname = location.pathname
    console.log(location.pathname)
  },[])
  return ( 
      <article className={left.left_wrap}> 
        <DetailHeader />
        <DetailContent/>
        <DetailComment /> 
      </article> 
  )
}
export default Detail