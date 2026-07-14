import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaDumbbell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
        const navigate = useNavigate();
    return (
        <footer className="bg-[#111111] text-gray-300 pt-16">

            <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-12">

                {/* Logo Section */}
                <div>

                    <div className="flex items-center gap-3 mb-5">
                        <FaDumbbell className="text-orange-500 text-3xl rotate-45" />

                        <h2 className="text-3xl font-bold">
                            <span className="text-white">IRON </span>
                            <span className="text-orange-500">FORGE</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 leading-8 mb-6">
                        A premium strength & fitness studio built for people serious about
                        results, elite coaching and a motivating community.
                    </p>

                    <div className="flex gap-4">

                        <div className="w-11 h-11 rounded-full border border-gray-700 flex justify-center items-center text-white hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                            <FaInstagram />
                        </div>

                        <div className="w-11 h-11 rounded-full border border-gray-700 flex justify-center items-center text-white hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                            <FaTwitter />
                        </div>

                        <div className="w-11 h-11 rounded-full border border-gray-700 flex justify-center items-center text-white hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                            <FaFacebook />
                        </div>

                        <div className="w-11 h-11 rounded-full border border-gray-700 flex justify-center items-center text-white hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer">
                            <FaYoutube />
                        </div>

                    </div>

                </div>

                {/* Quick Links */}

                <div>

                    <h3 className="text-xl font-bold text-white mb-6">
                        QUICK LINKS
                    </h3>

                    <ul>

                        <li onClick={() => navigate("/")} className="hover:text-orange-500 cursor-pointer">
                            Home
                        </li>

                        <li onClick={() => navigate("/about")} className="hover:text-orange-500 cursor-pointer">
                            About
                        </li>

                        <li onClick={() => navigate("/programs")} className="hover:text-orange-500 cursor-pointer">
                            Programs
                        </li>

                        <li onClick={() => navigate("/trainers")} className="hover:text-orange-500 cursor-pointer">
                            Trainers
                        </li>

                        <li onClick={() => navigate("/pricing")} className="hover:text-orange-500 cursor-pointer">
                            Pricing
                        </li>

                        <li onClick={() => navigate("/gallery")} className="hover:text-orange-500 cursor-pointer">
                            Gallery
                        </li>

                        <li onClick={() => navigate("/contact")} className="hover:text-orange-500 cursor-pointer">
                            Contact
                        </li>
                    </ul>

                </div>

                {/* More */}

                <div>

                    <h3 className="text-xl font-bold text-white mb-6">
                        MORE
                    </h3>

                    <ul>

                        <li className="mb-4 hover:text-orange-500 transition cursor-pointer">
                            BMI Calculator
                        </li>

                        <li className="mb-4 hover:text-orange-500 transition cursor-pointer">
                            BMR Calculator
                        </li>

                        <li className="hover:text-orange-500 transition cursor-pointer">
                            Become a Member
                        </li>

                    </ul>

                </div>

                {/* Newsletter */}

                <div>

                    <h3 className="text-xl font-bold text-white mb-6">
                        STAY UPDATED
                    </h3>

                    <p className="text-gray-400 mb-6 leading-7">
                        Get fitness tips, workout plans and exclusive gym updates.
                    </p>

                    <div className="flex">

                        <input
                            type="email"
                            placeholder="you@email.com"
                            className="flex-1 bg-[#1d1d1d] border border-gray-700 text-white placeholder:text-gray-500 px-5 py-3 rounded-l-full outline-none focus:border-orange-500"
                        />

                        <button className="bg-orange-500 text-white px-7 rounded-r-full hover:bg-orange-600 transition">
                            Join
                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom Footer */}

            <div className="border-t border-gray-800 mt-14">

                <div className="max-w-7xl mx-auto py-6 flex justify-between items-center">

                    <p className="text-gray-500">
                        © 2026 <span className="text-orange-500">IRON FORGE</span>. All rights reserved.
                    </p>

                    <p className="text-gray-500">
                        Designed By Bhawan and Preet  using React & Tailwind CSS
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;