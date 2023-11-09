
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;