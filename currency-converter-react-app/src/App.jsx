import { useState } from "react";
import ConverterForm from "./components/ConverterForm";

function App() {
    const [conversionData, setConversionData] = useState(null);

    const handleConvert = (amount, fromCurrency, toCurrency) => {
    console.log(`Convert ${amount} ${fromCurrency} to ${toCurrency}`);
    // We’ll connect this to a real API in Step 3
    setConversionData({ amount, fromCurrency, toCurrency });
    };

    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Currency Converter
        </h1>

        <ConverterForm onConvert={handleConvert} />

        {conversionData && (
        <div className="mt-6 text-gray-700">
            <p>
            Amount: <strong>{conversionData.amount}</strong>
            </p>
            <p>
            From: <strong>{conversionData.fromCurrency}</strong> → To:{" "}
            <strong>{conversionData.toCurrency}</strong>
            </p>
        </div>
        )}
    </div>
    );
}

export default App;
