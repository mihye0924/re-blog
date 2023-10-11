import detailComment from '@/assets/scss/contents/detailComment.module.scss'
import { Context } from '@/context/Context';
import { useContext, useMemo, useState } from 'react';
function DetailComment({commentLength}) {
  const {newProfile, datas, setDatas} = useContext(Context);   
  const [commentValue, setCommentValue] = useState()
  const [subCommentValue, setSubCommentValue] = useState()
  const largeCategory = Number(location.pathname.split("/")[2])
  const middleCategory = Number(location.pathname.split("/")[3])
  const contentId = Number(location.pathname.split("/")[4])  


  // 댓글 추가
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
                  text: commentValue,
                  currenction: false
                }
              )
          }
        });
        window.localStorage.setItem("list", JSON.stringify(datas))  
        setCommentValue('')
        setDatas([...datas])
      })
    }, [setDatas, largeCategory, contentId, middleCategory, newProfile.img, newProfile.name, commentValue])

    // 삭제하기
    const handleCommentDel = useMemo(() => {
      return ((index) => {
        const datas = JSON.parse(window.localStorage.getItem('list')) 
        datas.forEach(item => {  
            if(item.lagreCategory === largeCategory && 
              item.id === contentId &&
              item.middleCategory === middleCategory) {
                item.comment.splice(index, 1)
            }
          });
          window.localStorage.setItem("list", JSON.stringify(datas))  
          setDatas([...datas])
      })
    }, [])

    // 수정하기
    const handleCommentCorrection = useMemo(() => {
      return ((index) => {
        const datas = JSON.parse(window.localStorage.getItem('list')) 
        datas.forEach(item => {  
          if(item.lagreCategory === largeCategory && 
            item.id === contentId &&
            item.middleCategory === middleCategory) {
              item.comment.forEach(subItem => {
                subItem.currenction = false
                item.comment[index].currenction = true
                setSubCommentValue(item.comment[index].text)
              })
              }
            });
          window.localStorage.setItem("list", JSON.stringify(datas))  
          setDatas([...datas])
      })
    } , [])

    // 수정 댓글 변경
    const handleCommentCorrectionPush = useMemo(() => {
      return ((index) => {
        const datas = JSON.parse(window.localStorage.getItem('list')) 
        datas.forEach(item => {  
            if(item.lagreCategory === largeCategory && 
              item.id === contentId &&
              item.middleCategory === middleCategory) {
                item.comment[index].text = subCommentValue
                item.comment[index].currenction = false
            }
          });
          window.localStorage.setItem("list", JSON.stringify(datas))  
          setDatas([...datas])
      })
    })

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
            datas.map((item) => {
              return(
                  item.lagreCategory === largeCategory && 
                  item.id === contentId &&
                  item.middleCategory === middleCategory && 
                  item.comment.map((subItem, index) => {
                   return(
                    <li key={subItem.id} className={detailComment.detailComment_comment_list}>
                      <div>
                        <div className={detailComment.detailComment_comment_list_thumb}>
                          <img src={subItem.img ? subItem.img  : '/images/common/profile.png'} alt='' />
                        </div>
                        <div className={detailComment.detailComment_comment_list_item}>
                          <div className={detailComment.detailComment_comment_list_item_wrap}>
                            <div className={detailComment.detailComment_comment_list_item_head}>
                              <p><span className={detailComment.detailComment_comment_list_item_head_name}>{subItem.name}</span><span>{subItem.nickname}</span></p>
                              <div>
                                <button onClick={() => {handleCommentCorrection(index)}}>수정</button>
                                <button onClick={() => {handleCommentDel(index)}}>삭제</button>
                              </div>
                            </div>
                            {
                              subItem.currenction ?
                              <textarea placeholder='남길말을 입력하세요' value={subCommentValue} onChange={(e) => {setSubCommentValue(e.target.value)}}/>
                              :
                              <div className={detailComment.detailComment_comment_list_item_content}>
                                {subItem.text}
                              </div>
                            }
                            <div className={detailComment.detailComment_comment_list_item_bottom}>
                              <span className={detailComment.detailComment_comment_list_item_bottom_time}>{subItem.time}분</span>
                              {
                                subItem.currenction &&
                                <button onClick={() => {handleCommentCorrectionPush(index)}}>댓글작성</button>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <ul className={detailComment.detailComment_comment_list_sub}>
                        {
                          item.subComment.map((subItemComment) => {
                            return (
                              subItemComment.length > 0 &&
                              <li className={detailComment.detailComment_comment_list_sub_item}>
                                <div className={detailComment.detailComment_comment_list_thumb}>
                                  <img src={subItemComment.img ? subItemComment.img  : '/images/common/profile.png'} alt='' />
                                </div>
                                <div className={detailComment.detailComment_comment_list_item}>
                                  <div className={detailComment.detailComment_comment_list_item_wrap}>
                                    <div className={detailComment.detailComment_comment_list_item_head}>
                                      <p><span className={detailComment.detailComment_comment_list_item_head_name}>{subItemComment.name}</span><span>{subItemComment.nickname}</span></p>
                                    </div>
                                    <div className={detailComment.detailComment_comment_list_item_content}>
                                      {subItemComment.text}
                                    </div>
                                    <div className={detailComment.detailComment_comment_list_item_bottom}>
                                      <span className={detailComment.detailComment_comment_list_item_bottom_time}>{subItemComment.time}분</span><button>답글 달기</button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )
                          })
                        }
                      </ul> */}
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