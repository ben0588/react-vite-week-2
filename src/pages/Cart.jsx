import { Navigate, useNavigate } from 'react-router-dom';
import useCart from '../context/useCart';
import useOrder from '../context/useOrder';

const Cart = () => {
    const { state, handleAddToCart, handleDeleteCart, handleRemoveCarts } = useCart();
    const { handleCreateOrder } = useOrder();
    const navigate = useNavigate();

    return (
        <div>
            {state?.cart?.length ? (
                <>
                    <h2 className='fw-bolder py-2'>購物車</h2>
                    <div className='table-responsive'>
                        <table className='table align-middle'>
                            <thead>
                                <tr>
                                    <th>品項</th>
                                    <th>描述</th>
                                    <th>數量</th>
                                    <th>單價</th>
                                    <th>小計</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state?.cart?.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <select
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleAddToCart({ ...item, quantity: parseInt(e.target.value) })
                                                }
                                                className='form-control'
                                            >
                                                {[...Array(99)].map((_, i) => (
                                                    <option value={i + 1} key={i}>
                                                        {i + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>${item.price}</td>
                                        <td>${item.price * item.quantity}</td>
                                        <td>
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm'
                                                onClick={() => handleDeleteCart(item)}
                                            >
                                                刪除
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={4} className='text-end fs-5 fw-bolder'>
                                        {state?.total !== 0 && `總金額：$NT ${state.total}`}
                                    </td>
                                    <td colSpan={2}>
                                        <button
                                            type='button'
                                            className='btn btn-dark w-100'
                                            onClick={() => {
                                                handleCreateOrder({
                                                    orderId: new Date().getTime(),
                                                    ...state,
                                                    isPaid: false,
                                                });
                                                handleRemoveCarts();
                                                navigate('/orders');
                                            }}
                                        >
                                            結帳
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </>
            ) : (
                '購物車尚未有品項，去逛逛'
            )}
        </div>
    );
};
export default Cart;
