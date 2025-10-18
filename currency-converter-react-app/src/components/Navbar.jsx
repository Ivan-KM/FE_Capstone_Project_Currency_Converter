import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="font-bold text-lg tracking-wide">KIMX</h1>
        <div className="flex gap-15">
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
    </nav>
    );
}
