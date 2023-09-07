import header from '@/assets/scss/layout/header.module.scss';
import Button from '@/components/common/Button.jsx'

const Header = () => {
    return (
        <div className={header.header_wrap}>
            <div className={header.header}>
                <div className={header.header_logo}>
                    <img src="/images/layout/logo.png" alt="로고"/>
                    <div className={header.header_search}>
                        <input type="text" placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요"/>
                    </div>
                </div>
                <div className={header.header_button}>
                    <button>
                        <img src="/images/layout/alarm.png" alt="알림"/>
                    </button>
                    <Button name="로그인" color="white" />
                </div>
            </div>
        </div>
    );
};

export default Header;