import { useState } from "react";

export default function ConverterForm({ onConvert }) {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("UGX");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) return;
    onConvert(amount, fromCurrency, toCurrency);
    };

    return (
    <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-2xl max-w-md mx-auto"
    >
        <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded-lg"
        />

        <div className="flex gap-2">
        <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="p-2 border rounded-lg flex-1"
        >
            <option value="USD">USD</option>
            <option value="UGX">UGX</option>
            <option value="KES">KES</option>
            <option value="TZS">TZS</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </select>

        <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="p-2 border rounded-lg flex-1"
        >
            <option value="USD">USD</option>
            <option value="UGX">UGX</option>
            <option value="KES">KES</option>
            <option value="TZS">TZS</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </select>
        </div>

        <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
        Convert
        </button>
    </form>
    );
}
