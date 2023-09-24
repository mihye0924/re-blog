import loginPopup from '@/assets/scss/contents/loginPopup.module.scss'
import Button from '@/components/common/Button'
import login from '@/api/login'  
import { useContext, useMemo } from 'react';
import { Context } from '@/context/Context';

const LoginPopup = () => {
  const { 
    idValue, 
    pwValue, 
    setLoginModal, 
    setIsLogin, 
    setIdValue, 
    setPwValue
  } = useContext(Context);

    // 로그인 팝업 닫기
    const onClose = useMemo(() => {
      return(() => {
        setLoginModal(false)
      })
    },[setLoginModal])

    // 로그인 여부 체크
    const handleLogin = useMemo(() => {
      return(() => {
        login.map((item) => {
          if(item.id === idValue && item.pw === pwValue) {
            setLoginModal(false)
            setIsLogin(true)
            window.localStorage.setItem("login", true);
          } else if(item.id !== idValue && item.pw !== pwValue) {
            alert('회원정보가 없습니다.')
          } else if(item.id !== idValue ) {
            alert('아이디가 잘못됐습니다.')
          } else if(item.pw !== pwValue) {
            alert('비밀번호가 잘못됐습니다.')
          }
        })
      })
    },[idValue, pwValue, setIsLogin, setLoginModal])

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
                <input className={loginPopup.loginPopup_contents_form_input}
                  type="text" 
                  name="userName" 
                  placeholder="ID" 
                  onChange={(e) => {setIdValue(e.target.value)}} 
                />
                <input className={loginPopup.loginPopup_contents_form_input}
                  type="password" 
                  name="userPassword" 
                  placeholder="Password" 
                  onChange={(e) => {setPwValue(e.target.value)}}
                />
                <Button size type="submit" name='로그인' onClick={handleLogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginPopup