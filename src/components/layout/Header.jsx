import header from '@/assets/scss/layout/header.module.scss';
import Button from '@/components/common/Button.jsx'
// import { useState } from 'react';

const Header = ({onClick }) => {
    // const [isLogin, setLogin] = useState(false)
    return (
        <header className={header.header_wrap}>
            <div className={header.header}>
                <div className={header.header_logo}>
                    <h1>
                        <a href='#'>
                            <img src="/images/layout/logo.png" alt="로고" />
                        </a>
                    </h1>
                    <div className={header.header_search}>
                        <input type="text" placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요"/>
                    </div>
                </div>
                <div className={header.header_button}>
                    <button>
                        <img src="/images/layout/alarm.png" alt="알림"/>
                    </button>
                    <Button name="로그인" color="white" onClick={onClick} />
                </div>
            </div>
        </header>
    );
};

export default Header;