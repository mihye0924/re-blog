import profilePopup from '@/assets/scss/contents/profilePopup.module.scss'
// import Button from '@/components/common/Button'
import { useContext, useEffect, useMemo, useRef, useState} from 'react';
import { MainContext } from '@/context/MainContext'
import { Context } from '@/context/Context'
 
const ProfilePopup = () => {
  const {setPopup} = useContext(MainContext);   
  const {newProfile, setNewProfile} = useContext(Context);    

  // input value 닉네임
  const [inputNameValue, setInputNameValue] = useState(newProfile.name);
  // input value 업종
  const [inputSectorsValue, setInputSectorsValue] = useState(newProfile.sectors);
  // textarea value 소개
  const [textareaValue, setTextareaValue] = useState(newProfile.textarea);

  // image 업로드
  const [imgFile, setImgFile] = useState(newProfile.img);
  const imgRef = useRef();
  
  // image 업로드 - input의 onChange
  const saveImgFile =  useMemo(() => {
   return(() => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImgFile(reader.result);
      };
   })
  },[]); 

  const handleSaveProfile = useMemo(() => {
    return(() => { 
        setNewProfile({
          img: imgFile,
          name: inputNameValue, 
          sectors: inputSectorsValue, 
          textarea: textareaValue
        });
        setTimeout(() => {
          setPopup(false)
        }, 100)
        JSON.parse(localStorage.getItem("profile"))
        // window.location.reload()
    })
  },[imgFile, inputNameValue, inputSectorsValue, setNewProfile, setPopup, textareaValue])

  useEffect(() => {
    window.localStorage.setItem("profile", JSON.stringify(newProfile))
  }, [newProfile])


  return (
    <div className={profilePopup.profilePopup}>
      <div className={profilePopup.profilePopup_wrap}>
        <div className={profilePopup.profilePopup_header}>
          <div className={profilePopup.profilePopup_header_wrap}>
            <button onClick={()=>{setPopup(false)}}><span>닫기</span><i className='icon close'/></button>
          </div>
        </div>
        <div className={profilePopup.profilePopup_contents}>
          <div className={profilePopup.profilePopup_contents_top}>
            <img
              src={imgFile ? imgFile :`${import.meta.env.BASE_URL}/images/common/thumbnail.svg`}
              alt="프로필 이미지"
              className={profilePopup.profilePopup_contents_top_profile}
            />
            <label className={profilePopup.profilePopup_contents_top_label} htmlFor="profileImg"><i className={profilePopup.profilePopup_contents_top_label_edit}/></label>
            <input
              className={profilePopup.profilePopup_contents_top_input}
              type="file"
              accept="image/*"
              id="profileImg"
              onChange={saveImgFile}
              ref={imgRef}
            />
          </div>
          <div className={profilePopup.profilePopup_contents_form}>
            <div className={profilePopup.profilePopup_contents_form_wrap}>
              <div className={profilePopup.profilePopup_contents_form_item}>
                <div className={profilePopup.profilePopup_contents_form_label}>
                  <label htmlFor='nickname'>닉네임</label>
                  <span>{inputNameValue.length ? inputNameValue.length : 0}/10</span>
                </div>
                <input id='nickname' className={profilePopup.profilePopup_contents_form_input} maxLength={10} type="text" placeholder="ID" value={inputNameValue} onChange={(e) => {setInputNameValue(e.target.value)}} />
              </div>
              <div className={profilePopup.profilePopup_contents_form_item}>
                <div className={profilePopup.profilePopup_contents_form_label}>
                  <label htmlFor='Sectors'>업종</label>
                </div>
                <input id='Sectors' className={profilePopup.profilePopup_contents_form_input} value={inputSectorsValue} onChange={(e) => {setInputSectorsValue(e.target.value)}} type="text" placeholder="ID" />
              </div>
              <div className={profilePopup.profilePopup_contents_form_item}>
                <div className={profilePopup.profilePopup_contents_form_label}>
                  <label htmlFor='intro'>소개</label>
                  <span>{textareaValue.length ? textareaValue.length : 0}/80</span>
                </div>
                <textarea id='intro' maxLength={80} className={profilePopup.profilePopup_contents_form_textarea}  value={textareaValue} onChange={(e) => {setTextareaValue(e.target.value)}} />
              </div>
            </div>
          </div>
        </div>
          <div className={profilePopup.profilePopup_footer}>
            <div className={profilePopup.profilePopup_footer_wrap}>
              {
                <img
                  src={imgFile ? imgFile :`${import.meta.env.BASE_URL}/images/common/copy.svg`}
                  alt="프로필 이미지"
                  className={profilePopup.profilePopup_footer_copybutton}
                />
              }  
              <button onClick={handleSaveProfile} id='button' className={profilePopup.profilePopup_footer_textbutton}>작성하기</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfilePopup;