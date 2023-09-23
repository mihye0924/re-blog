import left from '@/assets/scss/layout/left.module.scss'
import ProfileNav from '@/components/contents/ProfileNav'
import ProfileMain from '@/components/contents/ProfileMain'
import ProfileList from '@/components/contents/ProfileList' 

const ProfileLeftLayout = () => {

  return (   
    <article className={left.left_wrap}> 
      <ProfileMain />
      <ProfileNav />
      <ProfileList />
    </article>   
  )
}
export default ProfileLeftLayout