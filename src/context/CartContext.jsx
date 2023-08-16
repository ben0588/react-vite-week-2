import { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    cart: [],
    total: 0,
};

const cartTotal = (newCart) => newCart.map((item) => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0);

const cartReducer = (state, action) => {
    const newCart = [...state.cart];
    const index = newCart.findIndex((item) => item.id === action?.payload?.id);
    switch (action.type) {
        case 'ADD_TO_CART':
            if (index === -1) {
                newCart.push(action.payload);
            } else if (newCart[index].quantity < 99) {
                newCart[index].quantity += action.payload.quantity;
            } else {
                newCart[index].quantity = 99;
            }
            return {
                ...state,
                cart: newCart,
                total: cartTotal(newCart),
            };
        case 'DELETE_CART':
            if (index !== -1) {
                newCart.splice(index, 1);
            }
            return {
                ...state,
                cart: newCart,
                total: cartTotal(newCart),
            };
        case 'REMOVE_CARTS':
            return {
                cart: [],
                total: 0,
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const handleAddToCart = (data) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: data,
        });
    };

    const handleDeleteCart = (data) => {
        dispatch({
            type: 'DELETE_CART',
            payload: data,
        });
    };

    const handleRemoveCarts = () => {
        dispatch({
            type: 'REMOVE_CARTS',
        });
    };

    const defaultValues = {
        state,
        handleAddToCart,
        handleDeleteCart,
        handleRemoveCarts,
    };

    return <CartContext.Provider value={defaultValues}>{children}</CartContext.Provider>;
};

export default CartContext;
