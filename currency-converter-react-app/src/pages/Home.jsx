import { useState } from "react";
import ConverterForm from "../components/ConverterForm";
import ResultDisplay from "../components/ResultDisplay";

export default function Home() {
    const [conversionData, setConversionData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleConvert = async (amount, fromCurrency, toCurrency) => {
    if (!amount) {
        alert("Please enter an amount to convert.");
        return;
    }

    const apiKey = import.meta.env.VITE_EXCHANGE_API_KEY;

    if (!apiKey) {
        alert(
        "API key is missing! Please set VITE_EXCHANGE_API_KEY in your .env file."
        );
        return;
    }

    try {
        setLoading(true);

        const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
        );

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.result !== "success") {
        alert("Error fetching exchange rates. Try again later.");
        setLoading(false);
        return;
        }

        const rate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);

        setConversionData({
        amount,
        fromCurrency,
        toCurrency,
        convertedAmount,
        rate,
        lastUpdated: data.time_last_update_utc,
        });

        setLoading(false);
    } catch (error) {
        console.error("Conversion Error:", error);
        alert(
        "Network error. Please check your connection and try again."
        );
        setLoading(false);
    }
    };

    return (
    <div
        className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6"
      style={{ backgroundColor: "#091261" }} // brandBlue
    >
      {/* Heading */}
        <h1
        className="text-3xl sm:text-4xl font-bold text-center"
        style={{ color: "#FFD966" }} // brandYellow
        >
        KIMX Currency Converter
        </h1>

      {/* Description */}
        <p
        className="text-lg sm:text-xl text-center max-w-md"
        style={{ color: "#FFD700" }} // light gray
        >
        Convert between global currencies in real time using live exchange rates.
        </p>

      {/* Conversion Form */}
        <ConverterForm onConvert={handleConvert} />

      {/* Loading State */}
        {loading && (
        <p
            className="mt-4 font-semibold animate-pulse"
          style={{ color: "#FFD966" }} // brandYellow
        >
            Fetching latest rates...
        </p>
        )}

      {/* Conversion Result */}
        {!loading && conversionData && <ResultDisplay result={conversionData} />}
    </div>
    );
}
