import loginPopup from '@/assets/scss/contents/loginPopup.module.scss'
import Button from '@/components/common/Button'

const LoginPopup = ({onClose, handleLogin, saveUserPw, saveUserId}) => {
    return (
      <div className={loginPopup.loginPopup}>
        <div className={loginPopup.loginPopup_wrap}>
          <div className={loginPopup.loginPopup_header}>
            <div className={loginPopup.loginPopup_header_wrap}>
              <span>로그인</span>
              <button onClick={onClose}><span>닫기</span><i className='icon close'/></button>
            </div>
          </div>
          <div className={loginPopup.loginPopup_contents}>
            <div className={loginPopup.loginPopup_contents_text}>
              <p>간편하게 로그인하고<br/>오너들과 이야기를 나눠보세요</p>
            </div>
            <div className={loginPopup.loginPopup_contents_form}>
              <div className={loginPopup.loginPopup_contents_form_wrap}>
                <input className={loginPopup.loginPopup_contents_form_input} type="text" name="userName" placeholder="ID" onChange={(e) => {saveUserId(e)}} />
                <input className={loginPopup.loginPopup_contents_form_input} type="password" name="userPassword" placeholder="Password" onChange={(e) => {saveUserPw (e)}}/>
                <Button size type="submit" name='로그인' onClick={handleLogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginPopup;