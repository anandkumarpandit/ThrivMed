import React from "react";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const CoursesPage = () => {
    return (
        <div className="relative z-10 bg-white dark:bg-[#0c0d10] min-h-screen pt-20 transition-colors duration-300">
            <Courses />
            <Footer />
        </div>
    );
};

export default CoursesPage;
