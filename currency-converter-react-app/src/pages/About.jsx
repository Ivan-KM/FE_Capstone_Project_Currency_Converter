export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#091261] text-[#FFD700] p-6 sm:p-12 text-center space-y-8">
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            About KIMX Currency Converter App
        </h1>

        {/* Intro Paragraph */}
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-white/90">
            <strong>KIMX Currency Converter</strong> is a simple, fast, and reliable web application 
            designed to help users convert between global currencies in real time using live exchange rates. 
            Built with modern tools like <span className="font-semibold text-yellow-400">React</span> and 
            <span className="font-semibold text-yellow-400">Tailwind CSS</span>, the app delivers a clean, responsive, 
            and user-friendly experience across all devices.
        </p>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-4xl font-semibold mt-6">
            About KIMX Services
        </h2>

        {/* Services Paragraph */}
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-white/90">
            <strong>KIMX Services</strong> is a growing digital solutions brand focused on empowering 
            individuals and small businesses with practical, accessible financial tools. Our mission 
            is to simplify how people interact with money — from understanding exchange rates to managing 
            conversions, budgeting, and saving smarter.
        </p>

        {/* Additional Info */}
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-white/90">
            The <strong>Currency Converter App</strong> is just the beginning. KIMX is working towards 
            creating a suite of financial utilities that include:
        </p>

        {/* List of Features */}
        <ul className="max-w-3xl text-left list-disc list-inside space-y-2 text-base sm:text-lg text-white/90">
            <li>💱 Real-time multi-currency tracking and alerts.</li>
            <li>💰 Smart budgeting and saving tips tailored to your goals.</li>
            <li>📊 Insights and analytics to help you make better money decisions.</li>
            <li>🌍 Educational resources about currency, investing, and digital finance.</li>
        </ul>

        {/* Closing Paragraph */}
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-white/90">
            At KIMX, we believe financial awareness should be simple, intuitive, and within everyone’s reach. 
            Stay tuned — more innovative tools and updates are coming soon!
        </p>
        </div>
    );
}
