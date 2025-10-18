import { useState } from "react";

    export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! Your message has been sent.`);
            setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div
        className="min-h-screen flex items-center justify-center bg-[#091261] p-6"
        >
      <div className="w-full max-w-md space-y-6"> {/* limits form width */}
        <h1
            className="text-3xl sm:text-4xl font-bold text-center"
            style={{ color: "#FFD700" }}
        >
            Contact KIMX Services
        </h1>

        <p className="text-gray-200 text-center">
            Have questions about currency conversions, KIMX services, or feedback about
            the app? We’d love to hear from you!
        </p>

        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-6 space-y-4"
        >
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#091261] transition"
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#091261] transition"
            />

            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="border border-gray-300 p-3 w-full rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#091261] transition"
            />

            <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
                style={{ backgroundColor: "#FFD700", color: "#091261" }}
            >
                Send Message
            </button>
            </form>
        </div>
        </div>
    );
}
