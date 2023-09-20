import left from '@/assets/scss/layout/left.module.scss'
import ProfileNav from '@/components/contents/ProfileNav'
import ProfileMain from '@/components/contents/ProfileMain'
import ProfileList from '@/components/contents/ProfileList'
import { useState } from 'react'
const ProfileLeftLayout = () => {
  const [mainNav, setMainNav] =  useState(1)

  return ( 
    <article className={left.left_wrap}> 
      <ProfileMain />
      <ProfileNav
        mainNav={mainNav}
        onMainClick={(e)=>{ setMainNav(e.target.value) }} 
      />
      <ProfileList
        mainNav={mainNav}
      />
    </article>  
  )
}
export default ProfileLeftLayout