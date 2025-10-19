    import { useState } from "react";
    import { useNavigate } from "react-router-dom";

    export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Example signup logic
        if (email && password) {
        setMessage("✅ Signup successful! Redirecting to Home...");

        // Redirect after 2 seconds
        setTimeout(() => {
            navigate("/"); // navigate to home page
        }, 2000);
        } else {
        setMessage("❌ Please fill all fields.");
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
            Create an Account
        </h1>

        <form
            onSubmit={handleSignup}
            className="bg-white p-6 rounded-2xl shadow-lg w-80 sm:w-96 space-y-4"
        >
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#091261] transition"
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
            <span style={{ color: "#FFD700" }}>Sign Up</span>
            </button>
        </form>

        {/* Signup message */}
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
