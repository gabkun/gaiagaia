import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/imgs/gaia.svg';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white text-white shadow-md w-full sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img className="w-16 h-16" alt="logo" src={logo} />
                    <span className="ml-3 text-4xl font-black text-green-600">GAIAS</span>
                    <span className="ml-3 text-4xl font-black text-neutral-700">TECH</span>
                </Link>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2 transition-transform duration-300 transform hover:scale-110"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill=""
                            viewBox="0 0 24 24"
                            stroke="#39B54A"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex flex-1 justify-center items-center space-x-8 text-neutral-700">
                    <Link to="/" className="block text-lg font-light  hover:text-green-400 transition duration-300">Home</Link>
                    <Link to="/about" className="block text-lg font-light hover:text-green-400 transition duration-300">About</Link>
                    <Link to="/pricing" className="block text-lg font-light hover:text-green-400 transition duration-300">Pricing</Link>
                    <Link to="/products" className="block text-lg font-light hover:text-green-400 transition duration-300">Products</Link>
                    <Link to="/services" className="block text-lg font-light hover:text-green-400 transition duration-300">Services</Link>
                </div>

                {/* Login Button (Desktop) */}
                <div className="hidden md:block">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/login';
                        }}
                        className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg flex items-center gap-2 transition duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Login</span>
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white focus:outline-none"
                    aria-label="Close menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    </svg>
                </button>
            {/* Mobile Menu Links */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="px-6 pt-2 pb-3 space-y-1 text-green-600">
                    <Link to="/" className="block text-lg font-light hover:text-green-400 transition duration-300">Home</Link>
                    <Link to="/about" className="block text-lg font-light hover:text-green-400 transition duration-300">About</Link>
                    <Link to="/pricing" className="block text-lg font-light hover:text-green-400 transition duration-300">Pricing</Link>
                    <Link to="/team" className="block text-lg font-light hover:text-green-400 transition duration-300">Team</Link>
                    <Link to="/products" className="block text-lg font-light hover:text-green-400 transition duration-300">Products</Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/login';
                        }}
                        className="w-full text-left px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg flex items-center gap-2 transition duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Login</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
