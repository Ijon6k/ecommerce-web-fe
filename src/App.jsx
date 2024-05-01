import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import ProductPage from "./Pages/ProductPage";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import { useState } from 'react';

const App = () => {
    const [onLogin, setOnLogin] = useState(false)

    return (
        <>
            <Routers>
                <Routes>
                    <Route path='/' element={<HomePage onLogin={onLogin} />} />
                    <Route path='/products' element={<ProductPage />} />
                    <Route path='/products/detail' element={<ProductDetail />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/login' element={<LoginPage setOnLogin={setOnLogin} />} />
                </Routes>
            </Routers>
        </>
    )
}

export default App