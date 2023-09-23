import write from '@/assets/scss/contents/write.module.scss'
import { useContext } from 'react';
import { Context } from '@/context/Context';
const Write = () => {
  const {isLogin, setWriteModal} = useContext(Context);   
  return (  
    isLogin &&
    <section className={write.write_wrap}>
      <div>
          <button onClick={()=>{setWriteModal(true)}}>
          <i className='icon'>+</i>  
          <span>새글 작성하기</span>
        </button>
      </div>
    </section> 
  )
}
export default Write