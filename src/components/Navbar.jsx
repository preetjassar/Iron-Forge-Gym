import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white flex justify-between items-center px-10 py-5">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <FaDumbbell className="text-orange-500 text-3xl" />

                <h2 className="text-3xl font-bold">
                    <span className="text-white">IRON </span>
                    <span className="text-orange-500">FORGE</span>
                </h2>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-8">
                <Link to="/" className="hover:text-orange-500 transition">
                    Home
                </Link>

                <Link to="/register" className="hover:text-orange-500 transition">
                    Register
                </Link>

                <Link to="/pricing" className="hover:text-orange-500 transition">
                    Pricing
                </Link>

                <Link to="/about" className="hover:text-orange-500 transition">
                    About
                </Link>

                <Link to="/calculations" className="hover:text-orange-500 transition">
                    Calculations
                </Link>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
                <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                    Login
                </button>

                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                    Join Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;