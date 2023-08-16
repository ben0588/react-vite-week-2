import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/scss/bootstrap.scss';
import { CartProvider } from './context/CartContext.jsx';
import { HashRouter } from 'react-router-dom';
import { OrdersProvider } from './context/OrdersContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <HashRouter>
        <CartProvider>
            <OrdersProvider>
                <App />
            </OrdersProvider>
        </CartProvider>
    </HashRouter>
    // </React.StrictMode>
);
