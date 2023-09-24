import navList from '@/api/navList'
import categoryList from '@/api/categoryList'
import nav from '@/assets/scss/contents/nav.module.scss' 
import { Context } from '@/context/Context';
import { useContext } from 'react';

const Nav = () => { 
  const {mainNav, subNav, setMainNav, setSubNav} = useContext(Context); 

  return (
    <div className={nav.nav_wrap}>
      <nav>
        <ul className={nav.nav_main}>
          {navList.map((item) => (
            <li key={item.id} className={`${item.id === Number(mainNav) ? nav['nav_main_active'] : ''}`}>
              <button onClick={(e)=>{setMainNav(e.target.value)}} value={item.id}> 
                {item.label}
              </button>
            </li>
          ))}
        </ul>  
      </nav>
      {
        Number(mainNav)  === 1 && 
        <nav className={nav.nav_sub}>
          <ul>
            {categoryList.map((item) => (
              <li key={item.id} className={`${item.id === Number(subNav) ? nav['nav_sub_active'] : ''}`}>
                <button onClick={(e)=>{setSubNav(e.target.value)}} value={item.id}>
                  {item.label}
                </button>
              </li>
              ))}
            </ul>
        </nav> 
      }
    </div>

  )
} 
export default Nav