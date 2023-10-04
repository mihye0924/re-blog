import detailComment from '@/assets/scss/contents/detailComment.module.scss'
import { Context } from '@/context/Context';
import data from '@/api/list'  
import { useContext, useEffect, useMemo, useState } from 'react';
function DetailComment({commentLength}) {
  const {newProfile} = useContext(Context);   
  const [commentValue, setCommentValue] = useState()
  const [commentList, setCommentList] = useState(data)
  const handleCommentPush = useMemo(() => {
    return (()=> {
      setCommentList([...commentList], commentList.push(
        {
          id: commentList.length + 1,
          img: newProfile.img,
          name: newProfile.name,
          nickname: '별명은 어떻게 하지?',
          time: '1',
          text: commentValue
        }
      ))
    })
  }, [])
  useEffect(() => {
    data.forEach((item) => {
      console.log(item)
      item.comment = []
    })
    handleCommentPush()
  },[])
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
            commentList.text !== '' ?
            commentList.map(item => {
              return (
                <li key={item.id} className={detailComment.detailComment_comment_list}>
                  <div className={detailComment.detailComment_comment_list_thumb}>
                    <img src={item.img ? item.img  : '/images/common/profile.png'} alt='' />
                  </div>
                  <div className={detailComment.detailComment_comment_list_item}>
                    <div className={detailComment.detailComment_comment_list_item_wrap}>
                      <div className={detailComment.detailComment_comment_list_item_head}>
                        <p><span className={detailComment.detailComment_comment_list_item_head_name}>{item.name}</span><span>{item.nickname}</span></p>
                      </div>
                      <div className={detailComment.detailComment_comment_list_item_content}>
                        {item.text}
                      </div>
                      <div className={detailComment.detailComment_comment_list_item_bottom}>
                        <span className={detailComment.detailComment_comment_list_item_bottom_time}>{item.time}분</span><button>답글 달기</button>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
            : false
          }
        </ul>
      </div>
    </article>
  )
}
export default DetailComment