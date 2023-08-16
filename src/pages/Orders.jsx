import useOrder from '../context/useOrder';

const Orders = () => {
    const { state, handleUpdateOrder } = useOrder();

    return (
        <>
            {state?.orders?.length ? (
                <>
                    <h2 className='fw-bolder py-2'>訂單詳情</h2>
                    <div>
                        {state?.orders?.map((order) => (
                            <div key={order.orderId} className='border border-2 p-3 mb-3'>
                                <h3>訂單編號：{order.orderId}</h3>
                                <h4>
                                    訂單狀態：{' '}
                                    {order.isPaid ? (
                                        <span className='text-success'>已付款</span>
                                    ) : (
                                        <button
                                            type='button'
                                            className='btn btn-dark'
                                            onClick={() => handleUpdateOrder(order)}
                                        >
                                            結帳
                                        </button>
                                    )}
                                </h4>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>品項</th>
                                            <th>單價</th>
                                            <th>數量</th>
                                            <th>小計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.cart.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>${item.price * item.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4} className='text-end fs-4 fw-bolder'>
                                                訂單總價錢：$NT {order.total}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        ))}
                    </div>{' '}
                </>
            ) : (
                '尚未建立訂單'
            )}
        </>
    );
};
export default Orders;
