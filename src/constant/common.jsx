import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrolltoTop from "../components/ScrolltoTop";
const Common = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrolltoTop />
        </div>
    );
};

export default Common;