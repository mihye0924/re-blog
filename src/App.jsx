import main from '@/assets/scss/layout/main.module.scss'
import RightLayout from './components/layout/RightLayout'
import LeftLayout from './components/layout/LeftLayout'
function App() {   
  return (
    <section className={main.main_content}>
      <RightLayout />
      <LeftLayout />
    </section>
  )
}

export default App
