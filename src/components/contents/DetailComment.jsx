import detailComment from '@/assets/scss/contents/detailComment.module.scss'
import { Context } from '@/context/Context';
import { useContext } from 'react';
function DetailComment({commentLength}) {
  const {newProfile} = useContext(Context);   
  return (
    <article className={detailComment.detailComment}>
      <div className={detailComment.detailComment_wrap}>
        <div className={detailComment.detailComment_header}>
          <p>댓글 {commentLength}</p>
        </div>
        <div className={detailComment.detailComment_write}>
            <div className={detailComment.detailComment_write_thumb}>
              <img src={newProfile.img} alt='' />
            </div>
            <div className={detailComment.detailComment_write_comment}>
              <textarea placeholder='남길말을 입력하세요'/>
              <div className={detailComment.detailComment_write_comment_button}>
                <button>댓글작성</button>
              </div>
            </div>
        </div>
        <ul className={detailComment.detailComment_comment}>
          <li className={detailComment.detailComment_comment_list}>
            <div className={detailComment.detailComment_comment_list_thumb}>
              <img src='/images/common/profile.png' alt='' />
            </div>
            <div className={detailComment.detailComment_comment_list_item}>
              <div className={detailComment.detailComment_comment_list_item_wrap}>
                <div className={detailComment.detailComment_comment_list_item_head}>
                  <p><span className={detailComment.detailComment_comment_list_item_head_name}>닉네임</span><span>별명</span></p>
                </div>
                <div className={detailComment.detailComment_comment_list_item_content}>
                혹시 이런경우는 어떻게 해야할까요?혹시 이런경우는 어떻게 해야할까요?
                </div>
                <div className={detailComment.detailComment_comment_list_item_bottom}>
                  <span className={detailComment.detailComment_comment_list_item_bottom_time}>59분</span><button>답글 달기</button>
                </div>
               </div>
            </div>
          </li>
          <li className={detailComment.detailComment_comment_list}>
            <div className={detailComment.detailComment_comment_list_thumb}>
              <img src='/images/common/profile.png' alt='' />
            </div>
            <div className={detailComment.detailComment_comment_list_item}>
              <div className={detailComment.detailComment_comment_list_item_wrap}>
                <div className={detailComment.detailComment_comment_list_item_head}>
                  <p><span className={detailComment.detailComment_comment_list_item_head_name}>닉네임</span><span>별명</span></p>
                </div>
                <div className={detailComment.detailComment_comment_list_item_content}>
                혹시 이런경우는 어떻게 해야할까요?혹시 이런경우는 어떻게 해야할까요?
                </div>
                <div className={detailComment.detailComment_comment_list_item_bottom}>
                  <span className={detailComment.detailComment_comment_list_item_bottom_time}>59분</span><button>답글 달기</button>
                </div>
               </div>
            </div>
          </li>
        </ul>
      </div>
    </article>
  )
}
export default DetailComment