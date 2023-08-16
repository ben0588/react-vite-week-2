import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className='col-12 py-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
export default Layout;
