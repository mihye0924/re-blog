import detailComment from '@/assets/scss/contents/detailComment.module.scss'
function DetailComment({commentLength}) {
  return (
    <article className={detailComment.detailComment}>
      <div className={detailComment.detailComment_wrap}>
        <div className={detailComment.detailComment_header}>
          <p>댓글 {commentLength}</p>
        </div>
        <ul className={detailComment.detailComment_comment}>
          <li className={detailComment.detailComment_comment_list}>
            <div className={detailComment.detailComment_comment_list_thumb}>
              <img src='' alt='' />
            </div>
            <div className={detailComment.detailComment_comment_list_item}>
              <div className={detailComment.detailComment_comment_list_item}>
                <div className={detailComment.detailComment_comment_list_item_head}>
                  <p><span>닉네임</span><span>별명</span></p>
                </div>
                <div className={detailComment.detailComment_comment_list_item_content}>
                  댓글
                </div>
                <div className={detailComment.detailComment_comment_list_item_bottom}>
                  <span>59분</span><button>답글 달기</button>
                </div>
               </div>
            </div>
          </li>
        </ul>
        <ul className={detailComment.detailComment_write}>
          <li className={detailComment.detailComment_list}>
            <div className={detailComment.detailComment_list_thumb}>
              <img src='' alt='' />
            </div>
            <div className={detailComment.detailComment_list_comment}>

            </div>
          </li>
        </ul>
      </div>
    </article>
  )
}
export default DetailComment