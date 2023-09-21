import write from '@/assets/scss/contents/write.module.scss'
const Write = ({ onWrite, login }) => {
  return (  
    login &&
    <section className={write.write_wrap}>
      <div>
          <button onClick={()=>{onWrite()}}>
          <i className='icon'>+</i>  
          <span>새글 작성하기</span>
        </button>
      </div>
    </section> 
  )
}
export default Write