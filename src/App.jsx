import main from '@/assets/scss/layout/main.module.scss'
import Header from '@/components/layout/Header.jsx'
import Popup from '@/components/common/Popup'
import RightLayout from '@/components/layout/RightLayout'
import LeftLayout from '@/components/layout/LeftLayout'
import { useState } from 'react' 

function App() {   
  
  const [isLogin, setIsLogin] = useState(false)
  const [login, setIogin] = useState(false) //로그인 될 경우

  function onClick() {
    setIsLogin(true)
  }
  return (
    <>
      <Header onClick={onClick} login={ login } />
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
