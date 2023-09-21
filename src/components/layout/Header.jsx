import header from '@/assets/scss/layout/header.module.scss';
import Button from '@/components/common/Button.jsx' 
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onClick, login, logout, ProfileTo }) => { 
    
    return (
        !login ? <header className={header.header_wrap}>
        <div className={header.header}>
            <div className={header.header_logo}>
                <h1>
                    <a href='/'>
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
                        <a href='/'>
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
                    <Link className={header.header_profile} to={ProfileTo} >
                        {/* <img src={data ? data.img : '/images/common/thumbnail.svg'} alt="프로필"/>         */}
                        <img src='/images/common/thumbnail.svg' alt="프로필"/>        
                    </Link>
                    {/* <Button name="글쓰기" color="blackborder" /> */}
                    <Link to={'/'} onClick={logout} className={header.header_logout}>
                        <span>로그아웃</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default React.memo(Header);