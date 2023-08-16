import { useContext } from 'react';
import OrdersContext from './OrdersContext';

const useOrder = () => {
    const ctx = useContext(OrdersContext);

    if (!ctx) {
        return new Error('錯誤的 Context');
    }
    return ctx;
};
export default useOrder;
