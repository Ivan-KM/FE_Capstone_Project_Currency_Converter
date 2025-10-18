import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
        setMessage("✅ Login successful! Welcome back.");
    } else {
        setMessage("❌ Invalid email or password. Try again.");
    }
    };

    return (
    <div
        className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8"
      style={{ backgroundColor: "#091261" }} // page background
    >
        <h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        style={{ color: "#FFD700" }} // heading color
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
        </form>

        {message && (
        <p className="mt-4 text-center text-gray-200 text-sm sm:text-base">
            {message}
        </p>
        )}
    </div>
    );
}
