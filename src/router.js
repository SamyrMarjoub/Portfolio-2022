import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Rotas = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact index path='/' element={<App />} />
            </Routes>
        </BrowserRouter >
    )

}
export default Rotas