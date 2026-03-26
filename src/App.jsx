import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Bloodwork from "./pages/Bloodwork";
import Consult from "./pages/Consult";
import Training from "./pages/Training";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0c0d10] transition-colors duration-300">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/bloodwork" element={<Bloodwork />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
