import { NavLink } from 'react-router-dom';
import useCart from '../context/useCart';

const Navbar = () => {
    const { state } = useCart();
    return (
        <nav className='border-bottom border-2 py-3'>
            <ul className='nav justify-content-center'>
                <li className='nav-item'>
                    <NavLink
                        to='/'
                        className='nav-link fw-bolder fs-5 '
                        style={({ isActive }) => ({ color: isActive ? '#00cec9' : '#2d3436' })}
                    >
                        首頁
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to='/cart'
                        className='nav-link d-flex align-items-center fw-bolder fs-5 '
                        style={({ isActive }) => ({ color: isActive ? '#00cec9' : '#2d3436' })}
                    >
                        購物車
                        {state?.cart?.length ? (
                            <span className='badge text-bg-danger ms-1'>{state?.cart?.length}</span>
                        ) : null}
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to='/orders'
                        className='nav-link fw-bolder fs-5 '
                        style={({ isActive }) => ({ color: isActive ? '#00cec9' : '#2d3436' })}
                    >
                        訂單列表
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
