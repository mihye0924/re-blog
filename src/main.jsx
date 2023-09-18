
import ReactDOM from 'react-dom/client' 
import App from './App.jsx'
import '@/assets/scss/index.scss'
import Header from '@/components/layout/Header.jsx'
import Popup from './components/common/Popup'
import {BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
const [isLogin, setLogin] = useState(false)
function onClick() {
  console.log('hi')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
  <BrowserRouter>
   <Header onClick={onClick} />
   <Popup />
    <App />
  </BrowserRouter>
  </> 
  // </React.StrictMode>
)
