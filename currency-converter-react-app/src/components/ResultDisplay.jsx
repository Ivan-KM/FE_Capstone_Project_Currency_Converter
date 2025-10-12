export default function ResultDisplay({ result }) {
  if (!result) return null; // Don't show anything if no conversion yet

    return (
    <div className="mt-6 p-4 bg-green-50 rounded-xl shadow-md text-center w-80 sm:w-96">
        <p className="text-lg font-semibold text-indigo-900">
        {result.amount} {result.fromCurrency} =
        </p>

        <p className="text-2xl font-bold text-green-700 my-1">
        {result.convertedAmount} {result.toCurrency}
        </p>

        <p className="text-sm text-gray-600">
        1 {result.fromCurrency} = {result.rate} {result.toCurrency}
        </p>

        <p className="text-xs text-gray-500 mt-1">
        Last updated: {result.lastUpdated}
        </p>
    </div>
    );
}
