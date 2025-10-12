import { useState } from "react";
import ConverterForm from "./components/ConverterForm";
import ResultDisplay from "./components/ResultDisplay";

function App() {
    const [conversionData, setConversionData] = useState(null);

    const handleConvert = async (amount, fromCurrency, toCurrency) => {
    try {
        const response = await fetch(
        `https://v6.exchangerate-api.com/v6/7bc990b692327193abab3bc7/latest/${fromCurrency}`
        );
        const data = await response.json();
    
        if (data.result !== "success") {
        alert("Error fetching exchange rates. Try again later.");
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
    } catch (error) {
        console.error(error);
        alert("Network error. Please try again.");
    }
    };

    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-brandBlue mb-6">
        Currency Converter
        </h1>
        <p className="text-gray-600 mb-8 text-center">
        Check live rates, set rate alerts, receive notifications and more.
        </p>

        <ConverterForm onConvert={handleConvert} />

        {conversionData && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg max-w-md w-full text-center mx-auto">
            <p className="text-lg font-semibold">
            {conversionData.amount} {conversionData.fromCurrency} ={" "}
            <span className="text-blue-600">
                {conversionData.convertedAmount} {conversionData.toCurrency}
            </span>
            </p>
            <p className="text-sm text-gray-600">
            1 {conversionData.fromCurrency} = {conversionData.rate}{" "}
            {conversionData.toCurrency}
            </p>
            <p className="text-xs text-gray-500 mt-1">
            Last updated: {conversionData.lastUpdated}
            </p>
        </div>
        )}
    </div>
    );
}

export default App;
