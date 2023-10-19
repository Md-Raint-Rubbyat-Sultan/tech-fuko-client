import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/shared/Header/Header';
import NavBar from '../components/shared/NavBar/NavBar';
import Footer from '../components/shared/Footer/Footer';

const Root = () => {
    return (
        <div className='font-raleway' data-theme="light">
            <Header />
            <div className='grid grid-cols-1 lg:grid-cols-5'>
                <NavBar />
                <div className='col-span-4'>
                    <Outlet />
                </div>
            </div>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Root;