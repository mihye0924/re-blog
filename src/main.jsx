
import ReactDOM from 'react-dom/client' 
import App from './App.jsx'
import Profile from '@/pages/Profile.jsx';
import '@/assets/scss/index.scss'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';  

const login = window.localStorage.getItem("login")
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {
          login && <Route path="/Profile" element={<Profile />} />
        }
      </Routes>
    </BrowserRouter>
  </> 
  // </React.StrictMode>
)
