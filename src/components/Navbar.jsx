import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icon.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        return false;
    });

    const location = useLocation();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="relative w-full z-50">
            <div className="flex justify-between items-center h-[72px] px-10 lg:px-18 md:px-24 bg-white dark:bg-[#0c0d10] mx-auto w-full max-w-[1920px] transition-colors duration-300">
                <div className="flex items-center lg:gap-[50px]">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <img
                                src={logo}
                                alt="ThrivMed Logo"
                                className="w-[166px] h-[33px] object-contain cursor-pointer dark:invert transition-all duration-300"
                            />
                        </Link>
                    </div>

                    <ul className="hidden lg:flex items-center gap-[35px] h-full pt-1">
                        <li>
                            <Link
                                to="/"
                                className={`relative w-fit font-dm-sans text-[16px] font-normal tracking-[0] leading-[normal] transition-colors hover:text-[#2c313c] dark:hover:text-white ${isActive("/") ? "text-[#2c313c] dark:text-white" : "text-[#878e9c] dark:text-gray-400"
                                    }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`relative w-fit font-dm-sans font-normal text-[16px] tracking-[0] leading-[normal] transition-colors hover:text-[#2c313c] dark:hover:text-white ${isActive("/about") ? "text-[#2c313c] dark:text-white" : "text-[#878e9c] dark:text-gray-400"
                                    }`}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                className={`relative w-fit font-dm-sans font-normal text-[16px] tracking-[0] leading-[normal] transition-colors hover:text-[#2c313c] dark:hover:text-white ${isActive("/courses") ? "text-[#2c313c] dark:text-white" : "text-[#878e9c] dark:text-gray-400"
                                    }`}
                            >
                                Courses
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>

                    <div className="hidden lg:block">
                        <button className="bg-[#2663FF] text-white px-[35px] py-[15px] h-[53px] rounded-[90px] text-[18px] font-medium font-dm-sans hover:brightness-110 transition-all shadow-md shadow-blue-500/10 flex items-center justify-center leading-none">
                            Digital Twin
                        </button>
                    </div>

                    {/* Hamburger Menu Icon */}
                    <button
                        className="lg:hidden p-2 text-gray-600 dark:text-gray-300 outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-[60px] left-0 right-0 z-50 bg-white/95 dark:bg-[#111216]/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 lg:hidden animate-fade-in-up">
                    <ul className="flex flex-col gap-4 mb-6">
                        <li>
                            <Link
                                to="/"
                                className={`block py-2 text-[16px] font-normal font-dm-sans transition-opacity ${isActive("/") ? "text-[#2D313D] dark:text-white" : "text-[#878E9C] dark:text-gray-400"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`block py-2 text-[16px] font-normal font-dm-sans transition-opacity hover:opacity-80 ${isActive("/about") ? "text-[#2D313D] dark:text-white" : "text-[#878E9C] dark:text-gray-400"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                className={`block py-2 text-[16px] font-normal font-dm-sans transition-opacity hover:opacity-80 ${isActive("/courses") ? "text-[#2D313D] dark:text-white" : "text-[#878E9C] dark:text-gray-400"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Courses
                            </Link>
                        </li>
                        <li className="pt-2 border-t border-gray-100 dark:border-gray-800">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center gap-3 py-2 text-[16px] font-normal font-dm-sans text-[#878E9C] dark:text-gray-400 transition-opacity"
                            >
                                {isDarkMode ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                                        </svg>
                                        Light Mode
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                        Dark Mode
                                    </>
                                )}
                            </button>
                        </li>
                    </ul>
                    <button className="w-full bg-[#2663FF] text-white px-[35px] py-[15px] h-[53px] rounded-[90px] text-[18px] font-medium font-dm-sans hover:brightness-110 transition-all shadow-lg shadow-blue-500/20">
                        Digital Twin
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
