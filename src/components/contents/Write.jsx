import write from '@/assets/scss/contents/write.module.scss'
import { useContext } from 'react';
import { Context } from '@/context/Context';
import { MainContext } from '@/context/MainContext';


const Write = () => {
  const { state } = useContext(Context);   
  const {setWriteModal, setWriteTitle} = useContext(MainContext);   
  return (  
    state.isLogin &&
    <section className={write.write_wrap}>
      <div>
          <button onClick={()=>{setWriteModal(true), setWriteTitle('글쓰기')}}>
          <i className='icon'>+</i>  
          <span>새글 작성하기</span>
        </button>
      </div>
    </section> 
  )
}
export default Write