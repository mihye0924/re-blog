
import LeftLayout from '@/components/layout/LeftLayout'
function Main({ onWrite, login }) {
  return (
    <LeftLayout onWrite={ onWrite } login={login} />
  )
}
export default Main