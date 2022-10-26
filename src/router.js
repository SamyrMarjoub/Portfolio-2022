import App from "./App";
import Financas from './components/financas'
import Notas from "./components/notas";
import Genshin from "./components/genshin";
import Fallguys from "./components/fallguys";
import Portfolio from './components/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Rotas = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact index path='/' element={<App />} />
                <Route exact path="/gerenciadorfinancas" element={<Financas/>}/>
                <Route exact path="/gerenciadornotas" element={<Notas/>}/>
                <Route exact path="/genshinpage" element={<Genshin/>}/>
                <Route exact path="/fallguyspage" element={<Fallguys/>}/>
                <Route exact path="/firstportfolio" element={<Portfolio/>}/>

            </Routes>
        </BrowserRouter >
    )

}
export default Rotas