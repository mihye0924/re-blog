import detailComment from '@/assets/scss/contents/detailComment.module.scss'
import { Context } from '@/context/Context';
import { useContext, useEffect, useMemo, useState } from 'react';
function DetailComment({commentLength}) {
  const {newProfile} = useContext(Context);   
  const [commentValue, setCommentValue] = useState()
  const [commentList, setCommentList] = useState(JSON.parse(window.localStorage.getItem("list")))
  const handleCommentPush = useMemo(() => {
    return (() => {
      commentList.forEach(item => {
        item.comment.push(
          {
            id: commentList.length + 1,
            img: newProfile.img,
            name: newProfile.name,
            nickname: '별명은 어떻게 하지?',
            time: '1',
            text: commentValue
          }
        )
      })
    })
  }, [])
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
              <textarea placeholder='남길말을 입력하세요' value={commentValue} onChange={(e) => {setCommentValue(e.target.value)}}/>
              <div className={detailComment.detailComment_write_comment_button}>
                <button onClick={handleCommentPush}>댓글작성</button>
              </div>
            </div>
        </div>
        <ul className={detailComment.detailComment_comment}>
          {
            commentList.map(item => {
              item.comment.map(comment => {
                return(
                  <li key={comment.id} className={detailComment.detailComment_comment_list}>
                    sdada
                    <div className={detailComment.detailComment_comment_list_thumb}>
                      <img src={comment.img ? comment.img  : '/images/common/profile.png'} alt='' />
                    </div>
                    <div className={detailComment.detailComment_comment_list_item}>
                      <div className={detailComment.detailComment_comment_list_item_wrap}>
                        <div className={detailComment.detailComment_comment_list_item_head}>
                          <p><span className={detailComment.detailComment_comment_list_item_head_name}>{comment.name}</span><span>{comment.nickname}</span></p>
                        </div>
                        <div className={detailComment.detailComment_comment_list_item_content}>
                          {comment.text}
                        </div>
                        <div className={detailComment.detailComment_comment_list_item_bottom}>
                          <span className={detailComment.detailComment_comment_list_item_bottom_time}>{comment.time}분</span><button>답글 달기</button>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })
            })
          }
        </ul>
      </div>
    </article>
  )
}
export default DetailComment