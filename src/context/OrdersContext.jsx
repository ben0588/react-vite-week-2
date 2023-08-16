import { createContext, useReducer } from 'react';

const OrdersContext = createContext();

const initialState = {
    orders: [],
};

const ordersReducer = (state, action) => {
    const newOrders = [...state.orders];

    switch (action.type) {
        case 'CREATE_ORDERS':
            newOrders.push(action.payload);
            return {
                ...state,
                orders: newOrders,
            };
        case 'UPDATE_ORDER_PAID':
            const changePaid = newOrders.map((item) =>
                item.ordersId === action.payload.ordersId ? { ...item, isPaid: true } : item
            );
            return {
                ...state,
                orders: changePaid,
            };
        default:
            return state;
    }
};

export const OrdersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ordersReducer, initialState);

    const handleCreateOrder = (data) => {
        dispatch({
            type: 'CREATE_ORDERS',
            payload: data,
        });
    };

    const handleUpdateOrder = (data) => {
        dispatch({
            type: 'UPDATE_ORDER_PAID',
            payload: data,
        });
    };

    const defaultValues = {
        state,
        handleCreateOrder,
        handleUpdateOrder,
    };

    return <OrdersContext.Provider value={defaultValues}>{children}</OrdersContext.Provider>;
};

export default OrdersContext;
