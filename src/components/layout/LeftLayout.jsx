

import left from '@/assets/scss/layout/left.module.scss'
import Nav from '@/components/contents/Nav'
import List from '@/components/contents/List'
import Write from '@/components/contents/Write'
import { useState } from 'react'
const LeftLayout = ({ onWrite }) => {
  const [mainNav, setMainNav] =  useState(1)
  const [subNav, setSubNav] = useState(1)  

  return ( 
    <article className={left.left_wrap}> 
      <Nav
        mainNav={mainNav}
        subNav={subNav} 
        onMainClick={(e)=>{ setMainNav(e.target.value) }}
        onSubClick={(e) => { setSubNav(e.target.value) }}
      />
      <Write onWrite={ onWrite } />
      <List
        onWrite={ onWrite }
        mainNav={mainNav}
        subNav={subNav}
      />
    </article>  
  )
}
export default LeftLayout