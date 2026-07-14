import React from "react";
import { FaDumbbell } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-black text-white flex justify-between items-center px-10 py-5">



            <div className="flex items-center gap-3 mb-5">
                <FaDumbbell className="text-orange-500 text-3xl " />

                <h2 className="text-3xl font-bold">
                    <span className="text-white">IRON </span>
                    <span className="text-orange-500">FORGE</span>
                </h2>
            </div>



            <nav className="flex gap-8">
                <a href="#" className="hover:text-orange-500 no-underline">
                    Home
                </a>
                <a href="#" className="hover:text-orange-500 no-underline">
                    Register
                </a>
                <a href="#" className="hover:text-orange-500 no-underline">
                    Students
                </a>
                <a href="#" className="hover:text-orange-500 no-underline">
                    About
                </a>
            </nav>

            <div className="flex gap-4">

                <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                    Login
                </button>

                <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
                    Join Now
                </button>

            </div>
        </nav>
    );
};

export default Navbar;