import header from '@/assets/scss/layout/header.module.scss';
import Button from '@/components/common/Button.jsx' 
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '@/context/Context'; 
 

const Header = () => {
    const {isLogin, setIsLogin, setLoginModal, newProfile} = useContext(Context);   
    // const [search, setSearch] = useState("")

    // 로그인 - 팝업
    const LoginPopup = () => {
        setLoginModal(true)
    }

    //로그아웃
    const logout = () => { 
        setIsLogin(false)
        window.localStorage.removeItem("login");
        // window.localStorage.removeItem("profile");
    }  

    // 프로필
    const profile = newProfile
   
        // 검색결과
    // const handleSearch = useMemo(() => {
    //     return((e) => {
    //         setSearch(e.target.value) 
    //         console.log(search) 
    //     })
    // },[])

    return (
        !isLogin ? <header className={header.header_wrap}>
        <div className={header.header}>
            <div className={header.header_logo}>
                <h1>
                    <a href='/'>
                        <img src="/images/layout/logo.png" alt="로고" />
                    </a>
                </h1>
                <div className={header.header_search}>
                    <input type="text" 
                        placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요" 
                        // onChange={handleSearch} 
                        // value={search || ''}
                    />
                </div>
            </div>
            <div className={header.header_button}>
                <button className={header.header_alarm}>
                    <img src="/images/layout/alarm.png" alt="알림"/>
                </button>
                <Button name="로그인" color="white" onClick={LoginPopup} />
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
                        <input type="text" 
                            placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요" 
                            // onChange={handleSearch}
                            // value={search || ''}
                        />
                    </div>
                </div>
                <div className={header.header_button}>
                    <button className={header.header_alarm_black}>
                        <img src="/images/layout/alarm_black.png" alt="알림"/>
                    </button>
                    <Link className={header.header_profile} to="/Profile" >
                    <img src={
                        profile.img !== '' ? 
                        profile.img : 
                        '/images/common/thumbnail.svg'
                        } alt="프로필"
                    />        
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

export default Header;