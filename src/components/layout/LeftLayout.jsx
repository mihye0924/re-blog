

import left from '@/assets/scss/layout/left.module.scss'
import Nav from '@/components/contents/Nav'
import List from '@/components/contents/List'
import Write from '@/components/contents/Write' 
const LeftLayout = () => { 
  return ( 
    <article className={left.left_wrap}> 
      <Nav />
      <Write />
      <List/>
    </article>  
  )
}
export default LeftLayout