import Cart from './pages/Cart';
import Orders from './pages/Orders';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Products from './pages/Products';

function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Products />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/orders' element={<Orders />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
