
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Navbar */}
            <Navbar />

            {/* Main content that grows and pushes footer down */}
            <main className="flex-grow max-w-7xl w-full mx-auto px-4">
                <Outlet />
            </main>

            {/* Bottom Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
