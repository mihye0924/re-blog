import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@/assets/scss/index.scss'
import {  HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> 
    <HashRouter  basename={import.meta.env.BASE_URL}>
      <App />
    </HashRouter>
  // </React.StrictMode>
)