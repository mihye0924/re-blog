import { navList, categoryList } from '@/api/Nav'
import nav from '@/assets/scss/layout/nav.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [mainNav, setMainNav] =  useState(1)
  const [subNav, setSubNav] = useState(1)
   
  return (
    <div className={nav.nav_wrap}>
      <ul className={nav.nav_main}>
        {navList.map((item) => (
          <li key={item.id} className={`${item.id === mainNav ? nav['nav_main_active'] : ''}`}>
            <button onClick={() => {setMainNav(item.id)}}> 
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <nav className={nav.nav_sub}>
          <ul>
          {categoryList.map((item) => (
            <li key={item.id} className={`${item.id === subNav ? nav['nav_sub_active'] : ''}`}>
              <button onClick={() => setSubNav(item.id)}>
                {item.label}
              </button>
            </li>
            ))}
          </ul>
      </nav>
    </div>

  )
} 
export default Nav