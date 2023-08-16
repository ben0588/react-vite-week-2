import { useState } from 'react';
import useCart from '../context/useCart';

const Card = ({ product }) => {
    const { state, handleAddToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title fw-bolder'>{product.name}</h5>
                <p className='card-text mb-0'>{product.description}</p>
                <p className='mb-2'>單價：$NT {product.price}</p>
                <div className='input-group'>
                    <button
                        className='btn btn-outline-dark'
                        type='button'
                        onClick={() => setQuantity((pre) => (pre === 1 ? 1 : pre - 1))}
                    >
                        -
                    </button>
                    <input
                        type='number'
                        className='form-control'
                        value={quantity || ''}
                        onChange={(e) => {
                            if (e.target.value <= 1) {
                                setQuantity(1);
                            } else {
                                setQuantity(parseInt(e.target.value));
                            }
                        }}
                    />
                    <button
                        className='btn btn-outline-dark'
                        type='button'
                        onClick={() => setQuantity((pre) => (pre === 99 ? 99 : pre + 1))}
                    >
                        +
                    </button>
                </div>
                <button
                    type={'button'}
                    className='btn btn-outline-dark w-100 btn-sm'
                    onClick={() => handleAddToCart({ ...product, quantity: quantity })}
                >
                    新增商品
                </button>
            </div>
        </div>
    );
};
export default Card;
