
import LeftLayout from '@/components/layout/LeftLayout'
import WritePopup from '@/components/contents/WritePopup' 
import { MainContext } from '@/context/MainContext'; 
import { useContext } from 'react';

function Main() {
  const { writeModal } = useContext(MainContext);   
 
  return (
    <> 
    {
      writeModal ? <WritePopup /> : ''
    }
    <LeftLayout />
    </>
  )
}
export default Main