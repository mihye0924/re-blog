import profilePopup from '@/assets/scss/contents/profilePopup.module.scss'
// import Button from '@/components/common/Button'
import { useRef, useState } from 'react';

const ProfilePopup = ({onClose}) => {
      // input value 닉네임
      const [inputValue, setInputValue] = useState(0);
      // textarea value 소개
      const [textareaValue, setTextareaValue] = useState(0);
      const newImg = window.localStorage.getItem("profile")
      function imgClose() {
        window.localStorage.romoveItem("profile")
      }
      // img upload
      const [imgFile, setImgFile] = useState(newImg || '');
      const imgRef = useRef();
      // 이미지 업로드 input의 onChange
      const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
              setImgFile(reader.result);
            };
          };
        window.localStorage.setItem("profile", imgFile)
    return (
      <div className={profilePopup.profilePopup}>
        <div className={profilePopup.profilePopup_wrap}>
          <div className={profilePopup.profilePopup_header}>
            <div className={profilePopup.profilePopup_header_wrap}>
              <button onClick={onClose}><span>닫기</span><i className='icon close'/></button>
            </div>
          </div>
          <div className={profilePopup.profilePopup_contents}>
            <div className={profilePopup.profilePopup_contents_top}>
              <img
                src={imgFile ? imgFile :`/images/common/thumbnail.svg`}
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
                    <label htmlFor='nickname'>소개</label>
                    <span>{inputValue.length ? inputValue.length : 0}/10</span>
                  </div>
                  <input id='nickname' className={profilePopup.profilePopup_contents_form_input} maxLength={10} type="text" placeholder="ID" onChange={(e) => {setInputValue(e.target.value)}} />
                </div>
                <div className={profilePopup.profilePopup_contents_form_item}>
                  <div className={profilePopup.profilePopup_contents_form_label}>
                    <label htmlFor='nickname'>업종</label>
                  </div>
                  <input id='nickname' className={profilePopup.profilePopup_contents_form_input} type="text" placeholder="ID" />
                </div>
                <div className={profilePopup.profilePopup_contents_form_item}>
                  <div className={profilePopup.profilePopup_contents_form_label}>
                    <label htmlFor='intro'>소개</label>
                    <span>{textareaValue.length ? textareaValue.length : 0}/80</span>
                  </div>
                  <textarea id='intro' maxLength={80} className={profilePopup.profilePopup_contents_form_textarea} onChange={(e) => {setTextareaValue(e.target.value)}} />
                </div>
              </div>
            </div>
          </div>
            <div className={profilePopup.profilePopup_footer}>
              <div className={profilePopup.profilePopup_footer_wrap}>
                <button className={profilePopup.profilePopup_footer_copybutton}><i /></button>
                <button className={profilePopup.profilePopup_footer_textbutton}>작성하기</button>
              </div>
            </div>
        </div>
      </div>
    );
};

export default ProfilePopup;