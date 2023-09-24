import writePopup from '@/assets/scss/contents/writePopup.module.scss'
import data from '@/api/list' 
import login from '@/api/login' 
import categoryList from '@/api/categoryList'
import navList from '@/api/navList'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Context } from '@/context/Context'; 

function WritePopup() { 
  const { setWriteModal, newProfile, newWrite, setNewWrite } = useContext(Context);
  const [category1, setCategory1] = useState(false)
  const [category2, setCategory2] = useState(false)
  const [category1Option, setCategory1Option] = useState('대분류') //카테고리1 값
  const [category2Option, setCategory2Option] = useState('중분류') //카테고리2 값
  const [category1Num, setCategory1Num] = useState(1)
  const [category2Num, setCategory2Num] = useState(1)
  const [hash, setHash] = useState("") 
  const [hashList, setHashList] = useState([]) //해시태그
 
  const [contentNum, setContentNum] = useState(JSON.parse(window.localStorage.getItem("list")).length)
  const [title, setTitle] = useState("") //제목
  const [content, setContent] = useState("") //글 
  const [imgFile, setImgFile] = useState([]) //이미지 리스트
  const imgRef = useRef(); 

  const profile = newProfile //프로필 기본값 
  // const [timer, setTimer] = useState(0)  
 

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
      switch(e.target.innerText) {
        case '브랜드관':
          setCategory1Num(1) 
          break;
        case '전체':
          setCategory1Num(2) 
          break;
        case '자유':
          setCategory1Num(3) 
          break;
        case '유머': 
          setCategory1Num(4) 
          break;
      }
    })
  },[])

  //중분류 옵션
  const handleCategory2Data = useMemo(() => {
    return((e) => {
      setCategory2(false)
      setCategory2Option(e.target.innerText) 
      switch(e.target.innerText) {
        case '편의점':
          setCategory2Num(1)  
          break;
        case '카페':
          setCategory2Num(2)  
          break; 
        case '음식점':
          setCategory2Num(3)  
          break;
        case '의류':
          setCategory2Num(4)  
          break;
        case '회계':
          setCategory2Num(5)  
          break; 
        case '무역·유통': 
          setCategory2Num(6)  
          break;
        case '기타': 
          setCategory2Num(7)  
          break;
      } 
    })
  },[])
 
  // 해시태그 - 제거
  const handleHashTagRemove = (index) => {
    hashList.splice(index, 1)  
    setHashList([...hashList]) 
  }

  // 해시태그 - 엔터시 값 입력
  const handleHashTagKeyPress =  useMemo(() => {
    return((e) => {      
      console.log(e)
      if(e.code === "Enter") {    
        setHashList([...hashList, { label : e.target.value}])
        
        if(e.target.value === "") {
          alert('값을 입력해주세요')
        }
        setHash("")  
      } 
    })
  },[hashList])  
  // 이미지 업로드 - input의 onChange
  const saveImgFile = useMemo(() => { 
    return(() => { 
      const file = imgRef.current.files[0];
      const reader = new FileReader();   
      // if( file.size > 3024 ) {
      //   alert('파일 사이즈가 너무 큽니다.')
      //   return false
      // }
      if(file) {
        reader.onloadend = () => {
          setImgFile([...imgFile, { img: reader.result}]) 
        }  
        reader.readAsDataURL(file);
      }   
      imgRef.current.value = ""; // 같은 파일 upload를 위한 처리 
    })
    },[imgFile]) 

  // 이미지 업로드 - 이미지 제거
  const handleImgRemove = useMemo(() => {  
    return((index) => {   
        imgFile.splice(index, 1)
        setImgFile([...imgFile])   
    })
  },[imgFile])    

  const hanldeWrite = useMemo(() => { 
   return(()=> { 
    if(category1Option === "대분류") {
      alert("대분류 옵션을 선택해주세요")
      return true
    }else if(category1Option ==='브랜드관' && category2Option ==="중분류") {
      alert("중분류 옵션을 선택해주세요")
      return true
    }else if(title === "") {
      alert("제목을 입력해주세요")
      return true
    }else if(content === "") {
      alert("글을 입력해주세요") 
      return true
    }  
    
    setNewWrite([...data, {
      "id" : contentNum,
      "views" : 0,
      "good": false,
      "favorite": false,
      "profileImg": !profile.img ? "/images/common/thumbnail.svg" : profile.img,
      "lagreCategory": category1Num,
      "middleCategory": category2Num,
      "profileName": !profile.name ? login[0].id : profile.name,
      "label": title,
      "subLabel": content,
      "contentImg": imgFile ? imgFile : '',
      "uploadTime": 0,
      "hashTag" : hashList ? hashList : '',
      "sympathy": {
        "good": 0,
        "sad" : 0,
        "laugh" : 0,
        "angry" : 0,
        "total" : 0
      }
    }])
    // window.localStorage.setItem("list",JSON.stringify(newWrite))
    setTimeout(() => {
      setWriteModal(false)
    }, 100) 
    console.log(newWrite) 
  }) 
  },[category1Option, category2Option, title, content, contentNum, setNewWrite, profile.img, profile.name, category1Num, category2Num, imgFile, hashList, newWrite, setWriteModal])
 


  useEffect(() => {   
    setContentNum(Number(contentNum) + 1)
    // setInterval(() => {
    //   const now = new Date()
    //   const seconds = now.getSeconds(); 
  
    //   // console.log(seconds)
    //   if(seconds >= 59) {
    //     setTimer(timer + 1)
    //   }
    // }, 1000);
  },[]) 
  // console.log(timer, "타이머")
  
  return (
    <div className={writePopup.writePopup}>
      <div className={writePopup.writePopup_wrap}>
        <section className={writePopup.writePopup_header}> 
          <div className={writePopup.writePopup_header_wrap}> 
            <span>글쓰기</span>
            <button onClick={()=>{setWriteModal(false)}}><span>닫기</span><i className='icon close'/></button>
          </div>
        </section>
        <section className={writePopup.writePopup_contents}>
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
                              <button onClick={(e) => { handleCategory1Data(e) }} >{item.label}</button>
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
                                <button onClick={(e) => { handleCategory2Data(e) }} >{item.label}</button>
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
              <input 
                type="text" 
                placeholder='제목을 입력하세요' 
                onChange={(e)=> {setTitle(e.target.value)}} 
                value={title}
              />
              <textarea 
                type="textarea" 
                placeholder='지금 나누고 싶은 이야기는 무엇인가요?' 
                onChange={(e) => {setContent(e.target.value)}}
                value={content}
              />
          </div>  
        </section>
        <section className={writePopup.writePopup_hashTag}>
          <input 
            type="text" 
            placeholder='해시태그' 
            value={hash}
            onChange={(e) => {setHash(e.target.value)}}  
            onKeyPress={handleHashTagKeyPress} 
          />
          <ul className={writePopup.writePopup_hashTag_list}> 
            
                {
                  hashList.map((item,index)=> {
                    return(
                      item &&
                      <li key={index}>
                        <span>{item.label}</span>
                        <button onClick={() => {handleHashTagRemove(index)}}>x</button>
                      </li>
                    )
                  })
                }     
          </ul>
        </section> 
        <section className={writePopup.writePopup_img}>
          <ul>
            {
              imgFile.map((item, index) => {
                return(
                  <li key={index}>
                    <img src={item.img} alt=""/>
                    <button onClick={()=>{handleImgRemove(index)}} className={writePopup.writePopup_img_button}>x</button>
                  </li>
                )
              })
            }
          </ul>
        </section>
        <section className={writePopup.writePopup_footer}>
          <div className={writePopup.writePopup_footer_wrap}>
            { 
            <>
            <input
              className={writePopup.writePopup_footer_copybutton}
              type="file"
              accept="image/*" 
              onChange={saveImgFile} 
              ref={imgRef}
            />
            </>
            }
            <button className={writePopup.writePopup_footer_textbutton} onClick={hanldeWrite}>
              작성하기
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
export default WritePopup