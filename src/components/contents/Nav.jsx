import { navList, categoryList } from '@/api/Nav'
import nav from '@/assets/scss/contents/nav.module.scss' 

const Nav = ({mainNav, subNav, onMainClick, onSubClick}) => { 
  
  return (
    <div className={nav.nav_wrap}>
      <nav>
        <ul className={nav.nav_main}>
          {navList.map((item) => (
            <li key={item.id} className={`${item.id === Number(mainNav) ? nav['nav_main_active'] : ''}`}>
              <button onClick={onMainClick} value={item.id}> 
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
                <button onClick={onSubClick} value={item.id}>
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