import detailComment from '@/assets/scss/contents/detailComment.module.scss'
import { Context } from '@/context/Context';
import { useContext, useMemo, useState } from 'react';
function DetailComment({commentLength}) {
  const {newProfile, newWrite, setNewWrite} = useContext(Context);   
  const [commentValue, setCommentValue] = useState()
  const largeCategory = Number(location.pathname.split("/")[2])
  const middleCategory = Number(location.pathname.split("/")[3])
  const contentId = Number(location.pathname.split("/")[4])   
  const handleCommentPush = useMemo(() => {
    return (() => { 
      const datas = JSON.parse(window.localStorage.getItem('list')) 
      datas.forEach(item => {  
          if(item.lagreCategory === largeCategory && 
            item.id === contentId &&
            item.middleCategory === middleCategory) {
              item.comment.push(
                {
                  id: item.comment.length + 1,
                  img: newProfile.img,
                  name: newProfile.name,
                  nickname: '뭐해?',
                  time: 1,
                  text: commentValue
                }
              )
          }
        });
        window.localStorage.setItem("list", JSON.stringify(datas))  
        setNewWrite([...datas])
      })
    }, [setNewWrite, largeCategory, contentId, middleCategory, newProfile.img, newProfile.name, commentValue]) 
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
            newWrite.map((item) => {
              return(
                  item.lagreCategory === largeCategory && 
                  item.id === contentId &&
                  item.middleCategory === middleCategory && 
                  item.comment.map((subItem) => {
                   return(
                    <li key={subItem.id} className={detailComment.detailComment_comment_list}>
                      dssadasdsadasd
                    <div className={detailComment.detailComment_comment_list_thumb}>
                      <img src={subItem.img ? subItem.img  : '/images/common/profile.png'} alt='' />
                    </div>
                    <div className={detailComment.detailComment_comment_list_item}>
                      <div className={detailComment.detailComment_comment_list_item_wrap}>
                        <div className={detailComment.detailComment_comment_list_item_head}>
                          <p><span className={detailComment.detailComment_comment_list_item_head_name}>{subItem.name}</span><span>{subItem.nickname}</span></p>
                        </div>
                        <div className={detailComment.detailComment_comment_list_item_content}>
                          {subItem.text}
                        </div>
                        <div className={detailComment.detailComment_comment_list_item_bottom}>
                          <span className={detailComment.detailComment_comment_list_item_bottom_time}>{subItem.time}분</span><button>답글 달기</button>
                        </div>
                      </div>
                    </div>
                  </li>
                   )
                })
              )
            })
          }
        </ul>
      </div>
    </article>
  )
}
export default DetailComment