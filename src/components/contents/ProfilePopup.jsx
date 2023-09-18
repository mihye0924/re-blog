import profilePopup from '@/assets/scss/contents/profilePopup.module.scss'
import Button from '@/components/common/Button'

const LoginPopup = ({onClose, handleLogin, saveUserPw, saveUserId}) => {
    return (
      <div className={profilePopup.profilePopup}>
        <div className={profilePopup.profilePopup_wrap}>
          <div className={profilePopup.profilePopup_header}>
            <div className={profilePopup.profilePopup_header_wrap}>
              <span>로그인</span>
              <button onClick={onClose}><span>닫기</span><i className='icon close'/></button>
            </div>
          </div>
          <div className={profilePopup.profilePopup_contents}>
            <div className={profilePopup.profilePopup_contents_text}>
              <p>간편하게 로그인하고<br/>오너들과 이야기를 나눠보세요</p>
            </div>
            <div className={profilePopup.profilePopup_contents_form}>
              <div className={profilePopup.profilePopup_contents_form_wrap}>
                <input className={profilePopup.profilePopup_contents_form_input} type="text" name="userName" placeholder="ID" onChange={(e) => {saveUserId(e)}} />
                <input className={profilePopup.profilePopup_contents_form_input} type="password" name="userPassword" placeholder="Password" onChange={(e) => {saveUserPw (e)}}/>
                <Button size type="submit" name='로그인' onClick={handleLogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginPopup;