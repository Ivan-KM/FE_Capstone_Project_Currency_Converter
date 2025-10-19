    import { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";

    export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // valid email format
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
        // Minimum 8 characters, at least 1 letter and 1 number

        if (!email || !password) {
        setMessage("❌ Please enter email and password.");
        } else if (!emailPattern.test(email)) {
        setMessage("❌ Please enter a valid email address.");
        } else if (!passwordPattern.test(password)) {
        setMessage(
            "❌ Password must be at least 8 characters long and contain at least one letter and one number."
        );
        } else {
        setMessage("✅ Login successful! Redirecting to Home...");
        setTimeout(() => {
            navigate("/home");
        }, 2000);
        }
    };

    return (
        <div
        className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8"
        style={{ backgroundColor: "#091261" }}
        >
        <h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-center"
            style={{ color: "#FFD700" }}
        >
            Login to KIMX
        </h1>

        <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-2xl shadow-lg w-80 sm:w-96 space-y-4"
        >
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#091261] transition"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+" 
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#091261] transition"
            />
            <button
            type="submit"
            className="w-full bg-green-600 font-bold py-5 rounded-full text-lg hover:bg-green-700 transition"
            >
            <span style={{ color: "#FFD700" }}>Login</span>
            </button>

            <p
            className="text-center mt-2 text-sm"
            style={{ color: "#FFD700" }}
            >
            Don't have an account?{" "}
            <Link
                to="/signup"
                className="font-bold hover:text-yellow-300 transition"
            >
                Sign Up
            </Link>
            </p>
        </form>

        {message && (
            <p
            className="mt-4 text-center text-sm sm:text-base font-bold"
            style={{ color: "#FFD700" }}
            >
            {message}
            </p>
        )}
        </div>
    );
    }
