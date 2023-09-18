import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import Popup from './components/common/Popup'
import RightLayout from './components/layout/RightLayout'
import LeftLayout from './components/layout/LeftLayout'
import { useState } from 'react'
function App() {   
  const [isLogin, setIsLogin] = useState(false)
  function onClick() {
    setIsLogin(true)
  }
  return (
    <>
      <Header onClick={onClick}  />
      {
        isLogin ? <Popup onClose={() => {setIsLogin(false)}} /> : false
      }
      <section className={main.main_content}>
        <RightLayout />
        <LeftLayout />
      </section>
    </>
  )
}

export default App
