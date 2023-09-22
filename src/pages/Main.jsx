
import LeftLayout from '@/components/layout/LeftLayout'
function Main({ onWrite, onclose, login }) {
  return (
    <LeftLayout 
    onWrite={ onWrite } 
    onclose={ onclose }
    login={login} 
    />
  )
}
export default Main