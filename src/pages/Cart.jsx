import { Navigate, useNavigate } from 'react-router-dom';
import useCart from '../context/useCart';
import useOrder from '../context/useOrder';
import { useState } from 'react';

const Cart = () => {
    const { state, handleAddToCart, handleDeleteCart, handleRemoveCarts } = useCart();
    const { handleCreateOrder } = useOrder();
    const navigate = useNavigate();
    const [text, setText] = useState('');

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
                                    <td colSpan={6} className='text-end fs-4 fw-bolder'>
                                        {state?.total !== 0 && `總金額：$NT ${state.total}`}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className='row w-100'>
                            <div className='col-6'></div>
                            <div className='col-6'>
                                <label htmlFor='message' className='form-label'>
                                    請填寫備註
                                </label>
                                <textarea
                                    name='cartMessage'
                                    id='message'
                                    cols='30'
                                    rows='3'
                                    placeholder='填寫備註'
                                    className='form-control '
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <button
                                type='button'
                                className='float-end btn btn-dark w-25 mt-3'
                                onClick={() => {
                                    handleCreateOrder({
                                        orderId: new Date().getTime(),
                                        ...state,
                                        isPaid: false,
                                        message: text,
                                    });
                                    handleRemoveCarts();
                                    navigate('/orders');
                                }}
                            >
                                結帳
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    購物車尚未有品項，
                    <button type='button' onClick={() => navigate('/')} className='btn btn-outline-dark'>
                        去逛逛
                    </button>
                </div>
            )}
        </div>
    );
};
export default Cart;
