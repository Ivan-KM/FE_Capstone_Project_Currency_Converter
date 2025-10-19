    import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
    import Login from "./pages/Login";
    import Signup from "./pages/Signup";
    import Home from "./pages/Home";
    import About from "./pages/About";
    import Contact from "./pages/Contact";
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";

    export default function App() {
    return (
        <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">
            <Routes>
                {/* Redirect root / to login */}
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </main>
            <Footer />
        </div>
        </Router>
    );
    }
