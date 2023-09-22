import writePopup from '@/assets/scss/contents/writePopup.module.scss'
// import data from '@/api/list' 
import categoryList from '@/api/categoryList'
import navList from '@/api/navList'
import { useEffect, useMemo, useState } from 'react'
import parse from 'html-react-parser';

function WritePopup({onclose}) {
  // const [datas, setDatas] = useState(data) 
  const [category1, setCategory1] = useState(false)
  const [category2, setCategory2] = useState(false)
  const [category1Option, setCategory1Option] = useState('대분류')
  const [category2Option, setCategory2Option] = useState('중분류')
  const [hash, setHash] = useState("")
  const [hashList, setHashList] = useState([])
  

  // 대분류 토클
  const handleCategory1 = () => {
    if(category1) {
      setCategory1(false)
    }else{
      setCategory1(true)
    }
  }

  // 중분류 토글
  const handleCategory2 = () => {
    if(category2) {
      setCategory2(false)
    }else{
      setCategory2(true)
    }
  }

  //대분류 옵션 
  const handleCategory1Data = useMemo(() => {
    return((e) => { 
      setCategory1(false)
      setCategory1Option(e.target.innerText)
    })
  },[])

  //중분류 옵션
  const handleCategory2Data = useMemo(() => {
    return((e) => {
      console.log(e.target.innerText)
      setCategory2(false)
      setCategory2Option(e.target.innerText)
    })
  },[])

  // 해시태그 - 값 찾기
  const handleHashTag = useMemo(() => {
    return((e) => {  
      setHash(e.target.value)
    })
  },[])  

  const handleRemove = (index) => {
    hashList.splice(index, 1)  
    setHashList([...hashList])
    console.log(hashList) 

  }

  // 해시태그 - 엔터시 값 입력
  const handleHashTagKeyPress =  useMemo(() => {
    return((e) => {      
      if(e.code === "Enter") {   
        hashList.push(e.target.value) 
        setHashList([...hashList])
        
        if(e.target.value === "") {
          alert('값을 입력해주세요')
        }
        setHash("")  
      } 
    })
  },[hashList]) 
  
  useEffect(() => {   
  },[])


  return (
    <div className={writePopup.writePopup}>
      <div className={writePopup.writePopup_wrap}>
        <div className={writePopup.writePopup_header}> 
          <div className={writePopup.writePopup_header_wrap}> 
            <span>글쓰기</span>
            <button onClick={onclose}><span>닫기</span><i className='icon close'/></button>
          </div>
        </div>
        <div className={writePopup.writePopup_contents}>
          <div className={writePopup.writePopup_contents_top}>
            <nav className={writePopup.writePopup_contents_top_nav}>
              <ul>
                <li>
                  <button 
                  className={category1? 'active':''}
                  onClick={() => {handleCategory1()}}>{category1Option}</button> 
                  <ul className={writePopup.writePopup_contents_top_sub}>
                      {
                        category1 &&
                        navList.map((item) => {
                          return (
                            <li key={item.id} >
                              <button onClick={(e) => { handleCategory1Data(e) }}>{item.label}</button>
                            </li>
                          )
                        })
                      }
                  </ul>
                </li>
                <li>
                  {
                     category1Option === '브랜드관' &&
                    <> 
                    <button className={category2? 'active':''}
                    onClick={() => {handleCategory2()}}>{category2Option}</button>
                    <ul className={writePopup.writePopup_contents_top_sub}> 
                        { 
                        category2 &&
                          categoryList.map((item) => {
                            return (
                              <li key={item.id} >
                                <button onClick={(e) => { handleCategory2Data(e) }}>{item.label}</button>
                              </li>
                            )
                          })
                        }
                    </ul>
                    </>
                  }
                </li> 
              </ul>
            </nav>
          </div>
          <div className={writePopup.writePopup_contents_bottom}>
              <input type="text" placeholder='제목을 입력하세요'/>
              <textarea type="textarea" placeholder='지금 나누고 싶은 이야기는 무엇인가요? '/>
          </div>
          <div className={writePopup.writePopup_contents_top_hashTag}>
            <input 
              type="text" 
              placeholder='해시태그' 
              value={hash}
              onChange={handleHashTag}  
              onKeyPress={handleHashTagKeyPress} 
            />
            <ul className={writePopup.writePopup_contents_top_hashTagList}> 
              
                  {
                    hashList.map((item,index)=> {
                      return(
                        item &&
                        <li key={index}>
                          <span>{item}</span>
                          <button onClick={() => {handleRemove(index)}}>x</button>
                        </li>
                      )
                    })
                  }     
             </ul>
          </div> 
        </div>
        <div className={writePopup.writePopup_footer}>
          <div className={writePopup.writePopup_footer_wrap}>
            {
              <img
                src="/images/common/copy.svg`"
                alt="프로필 이미지"
                className={writePopup.writePopup_footer_copybutton}
              />
            }
            <button className={writePopup.writePopup_footer_textbutton}>작성하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WritePopup