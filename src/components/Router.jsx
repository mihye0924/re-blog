import { Routes, Route } from 'react-router-dom';
import Profile from '@/pages/Profile.jsx';
import Detail from '@/pages/Detail.jsx';
import Main from '@/pages/Main' 
function router({ onWrite, login, onclose }) { 
  
  const loginCheck = window.localStorage.getItem("login")
  return (
      <Routes>
      <Route path="/" element={<Main onWrite={onWrite} login={login} onclos={onclose} />} />
        {
          loginCheck && <Route path="/Profile" element={<Profile />} />
        }
        <Route path="/detail/:lagre/:middle/:id" element={<Detail login={login} />} /> 
      </Routes>  
  )
}
export default router