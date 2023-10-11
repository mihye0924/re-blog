import navList from '@/api/navList'
import categoryList from '@/api/categoryList'
import nav from '@/assets/scss/contents/nav.module.scss' 
import { MainContext } from '@/context/MainContext';
import { useContext, useMemo } from 'react';

const Nav = () => { 
  const { state2, dispatch2 } = useContext(MainContext);   


  const handleNav = useMemo(() => {
    return((e) => {
      dispatch2({ 
        type:'CATEGORY',
        payload: {mainNav : e.target.value}
      })
    })
  },[dispatch2])
  const handleSubNav = useMemo(() => {
    return((e)=>{
      dispatch2({
        type:'CATEGORY',
        payload: {subNav : e.target.value}
      }) 
    })
  },[dispatch2])

  return (
    <div className={nav.nav_wrap}>
      <nav>
        <ul className={nav.nav_main}>
          {navList.map((item) => (
            <li key={item.id} className={`${item.id === state2.mainNav? nav['nav_main_active'] : ''}`}>
             <button 
                onClick={handleNav} value={item.id}> 
                {item.label}
              </button>
            </li>
          ))}
        </ul>  
      </nav>
      {
        state2.mainNav === 1 && 
        <nav className={nav.nav_sub}>
          <ul>
            {categoryList.map((item) => (
              <li key={item.id} className={`${item.id === state2.subNav? nav['nav_sub_active'] : ''}`}>
                 <button 
                 onClick={handleSubNav} value={item.id}>
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