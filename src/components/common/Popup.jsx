import popup from '@/assets/scss/common/popup.module.scss'

const Popup = () => { 
    return (
      <div className={popup.popup}>
        <div className={popup.popup_wrap}>
          <div className={popup.popup_header}>
            <div className={popup.popup_header_wrap}>
              <span>로그인</span>
              <button><span>닫기</span><i className='icon close'/></button>
            </div>
          </div>
          <div className={popup.popup_contents}>
            <div className={popup.popup_contents_text}>
              <p>간편하게 로그인하고<br/>오너들과 이야기를 나눠보세요</p>
            </div>
            <div className={popup.popup_contents_buttons}>
              <button><span>카카오톡</span></button>
              <button><span>네이버</span></button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Popup;