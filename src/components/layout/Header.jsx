import header from '@/assets/scss/layout/header.module.scss';
import Button from '@/components/common/Button.jsx' 
import { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '@/context/Context'; 
import {handleLink} from '@/js/list'


const Header = () => {
    const {state, dispatch, setLoginModal, newProfile, datas, setDatas} = useContext(Context);   
    const [filterOpen, setFilterOpen] = useState(false)  
    const [input, setInput] = useState('');
    const navigate = useNavigate();
  
    // 프로필
    const profile = newProfile  
    // 검색결과
    const filter = useMemo(() => {
        return(() => {   
            if(input) { 
                setFilterOpen(true)
                datas.forEach((item) => {    
                    if(item.label.includes(input) ||
                    item.subLabel.includes(input) ||
                    item.profileName.includes(input)
                    ){     
                        item.search = true 
                        setDatas(datas)
                    }else{
                        item.search = false 
                        setDatas(datas)
                    }
                    window.localStorage.setItem("list", JSON.stringify(datas))
                });    
            }else{
                    setFilterOpen(false)
                }
            })  
    },[input, datas, setDatas])

    return (
        !state.isLogin ? 
        <header className={header.header_wrap}>
            <div className={header.header}>
                <div className={header.header_logo}>
                    <h1>
                        <a href='/'>
                            <img src="/re-blog/images/layout/logo.png" alt="로고" />
                        </a>
                    </h1>
                    <div className={header.header_search}>
                        <input type="text" 
                            placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요" 
                            onKeyUp={filter}   
                            onChange={(e) => {setInput(e.target.value)}}
                            value={input}
                        />
                    </div>
                </div>
                <div className={header.header_button}>
                    <button className={header.header_alarm}>
                        <img src="/re-blog/images/layout/alarm.png" alt="알림"/>
                    </button>
                    <Button name="로그인" color="white" onClick={() => {setLoginModal(true)}} />
                </div>
            </div> 
            {
                filterOpen &&
                <div id='search' className={header.header_search_filter} onClick={() => {setFilterOpen(false)}}>
                    <div>
                        <ul className={header.header_search_filter_ul}>
                            <div className={header.header_search_filter_reblog}>
                                {input} <span>- Re.Blog 검색</span>
                            </div>
                            {  
                                datas.map((item, index) => { 
                                    return(    
                                        <li key={index} className={`${header.header_search_filter_ul_li} ${item.search ? 'show':'hide'}`}> 
                                            <div className={header.header_search_filter_top}> 
                                                {
                                                    newProfile.img ?
                                                    <img src={newProfile.img} alt="" /> :
                                                    <img src='/re-blog/images/common/profile_default.png' alt='기본프로필'/>
                                                }  
                                                <span>{newProfile.name ? newProfile.name : state.loginId}</span>
                                            </div>
                                            <div className={header.header_search_filter_bottom}>
                                                <div>
                                                    <button onClick={() => { handleLink(item, navigate) }}>
                                                        <span>{item.label}</span>
                                                    </button>
                                                    <button onClick={() => { handleLink(item, navigate) }}>
                                                        <span>{item.subLabel}</span>
                                                    </button>
                                                </div>
                                                <div className={header.header_search_filter_bottom_img}>
                                                {
                                                    item.contentImg[0] ?
                                                    <img src={item.contentImg[0].img} alt={item.smallCategory2} />
                                                    : '이미지를 불러올 수 없습니다.'
                                                }
                                                </div>
                                            </div>
                                        </li>  
                                    )
                                })  
                            }
                        </ul>
                    </div>
                </div>
            }
        </header> 
        :
        <header className={header.header_wrap}>
            <div className={header.header}>
                <div className={header.header_logo}>
                    <h1>
                        <a href='/'>
                            <img src="/re-blog/images/layout/logo_black.png" alt="로고" />
                        </a>
                    </h1>
                    <div className={header.header_search}>
                        <input type="text" 
                            placeholder="찾고싶은 주제 혹은 닉네임을 입력하세요"  
                            onKeyUp={filter}   
                            onChange={(e) => {setInput(e.target.value)}}
                            value={input}
                        />
                    </div>
                </div>
                <div className={header.header_button}>
                    <button className={header.header_alarm_black}>
                        <img src="/re-blog/images/layout/alarm_black.png" alt="알림"/>
                    </button>
                    <Link className={header.header_profile} to="/Profile" >
                    <img src={
                        profile.img !== '' ? 
                        profile.img : 
                        '/re-blog/images/common/thumbnail.svg'
                        } alt="프로필"
                    />        
                    </Link>
                    {/* <Button name="글쓰기" color="blackborder" /> */}
                    <Link to={'/'} onClick={() => {dispatch({type: "LOGOUT"})}} className={header.header_logout}>
                        <span>로그아웃</span>
                    </Link>
                </div>
            </div>
            {
                filterOpen &&
                <div id='search' className={header.header_search_filter} onClick={() => {setFilterOpen(false)}}>
                    <div>
                        <ul className={header.header_search_filter_ul}>
                            <div className={header.header_search_filter_reblog}>
                                {input} <span>- Re.Blog 검색</span>
                            </div>
                            {  
                                datas.map((item,index) => { 
                                    return(    
                                        <li key={index} className={`${header.header_search_filter_ul_li} ${item.search ? 'show':'hide'}`}> 
                                            <div className={header.header_search_filter_top}> 
                                                {
                                                    newProfile.img ?
                                                    <img src={newProfile.img} alt="" /> :
                                                    <img src='/re-blog/images/common/profile_default.png' alt='기본프로필'/>
                                                }  
                                                <span>{newProfile.name ? newProfile.name : state.loginId}</span>
                                            </div>
                                            <div className={header.header_search_filter_bottom}>
                                                <div>
                                                    <button onClick={() => { handleLink(item) }}>
                                                        <span>{item.label}</span>
                                                    </button>
                                                    <button onClick={() => { handleLink(item) }}>
                                                        <span>{item.subLabel}</span>
                                                    </button >
                                                </div>
                                                <div className={header.header_search_filter_bottom_img}>
                                                {
                                                    item.contentImg[0] ?
                                                    <img src={item.contentImg[0].img} alt={item.smallCategory2} />
                                                    : '이미지를 불러올 수 없습니다.'
                                                }
                                                </div>
                                            </div>
                                        </li>  
                                    )
                                })  
                            }
                        </ul>
                    </div>
                </div>
            }
        </header>
    );
};

export default Header;