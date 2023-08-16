import { useContext } from 'react';
import CartContext from './CartContext';

const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) {
        return new Error('錯誤的 Context');
    }

    return ctx;
};
export default useCart;
