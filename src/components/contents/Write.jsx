import write from '@/assets/scss/contents/write.module.scss'
const Write = () => {
  return (  
    <section className={write.write_wrap}>
      <div>
          <button>
          <i className='icon'>+</i>  
          <span>새글 작성하기</span>
        </button>
      </div>
    </section> 
  )
}
export default Write