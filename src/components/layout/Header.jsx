import header from '@/assets/scss/layout/header.module.scss';
import Button from '@/components/common/Button.jsx' 

const Header = ({ onClick, write, login, logout, handleProfile }) => { 
    return (
        !login ? <header className={header.header_wrap}>
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
                <button className={header.header_alarm}>
                    <img src="/images/layout/alarm.png" alt="알림"/>
                </button>
                <Button name="로그인" color="white" onClick={onClick} />
            </div>
        </div>
        </header> :
        <header className={header.header_wrap}>
            <div className={header.header}>
                <div className={header.header_logo}>
                    <h1>
                        <a href='#'>
                            <img src="/images/layout/logo_black.png" alt="로고" />
                        </a>
                    </h1>
                    <div className={header.header_search}>
                        <input type="text" placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요"/>
                    </div>
                </div>
                <div className={header.header_button}>
                    <button className={header.header_alarm_black}>
                        <img src="/images/layout/alarm_black.png" alt="알림"/>
                    </button>
                    <button className={header.header_profile} onClick={handleProfile}>
                        <img src="/images/common/profile.png" alt="프로필"/>        
                    </button>
                    <Button name="글쓰기" color="blackborder" onClick={write} />
                    <Button name="로그아웃" color="black" onClick={logout} />
                </div>
            </div>
        </header>
    );
};

export default Header;