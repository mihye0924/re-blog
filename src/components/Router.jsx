import { Routes, Route,  } from 'react-router-dom';
import Profile from '@/pages/Profile.jsx';
import Detail from '@/pages/Detail.jsx';
import Main from '@/pages/Main' 
function router() {
  
  const loginCheck = window.localStorage.getItem("login")
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        {
          loginCheck && <Route path="/Profile" element={<Profile />} />
        }
        <Route path="/detail" element={<Detail />} />
      </Routes>  
  )
}
export default router