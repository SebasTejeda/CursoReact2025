import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina404 from './components/404.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import App from './components/App.jsx'
import Home from './Home.jsx'
import CriptoPage from './components/cripto/CriptoPAge.jsx'

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App></App>}>
                <Route index element={<Home></Home>}></Route>
            </Route>

            <Route path='/criptomonedas' element={<App></App>}>
            
                <Route index element={<Cuadricula/>}></Route>
                <Route path=':id' element={<CriptoPage></CriptoPage>}></Route>
            </Route>

            <Route path='*' element={<Pagina404></Pagina404>}></Route>
        </Routes>
    </BrowserRouter>
)
