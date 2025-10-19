export default function ResultDisplay({ result }) {
  if (!result) return null; // Don't show anything if no conversion yet

    return (
    <div className="mt-6 p-4 bg-green-50 rounded-xl shadow-md text-center w-80 sm:w-96">
        <p 
          className="text-2xl font-bold my-1"
          style={{ color: "#FFD700" }}>
        {result.amount} {result.fromCurrency} =
        </p>

        <p className="text-2xl font-bold my-1"
          style={{ color: "#FFD700" }}>
        {result.convertedAmount} {result.toCurrency}
        </p>

        <p className="text-2xl font-bold my-1"
          style={{ color: "#FFD700" }}>
        1 {result.fromCurrency} = {result.rate} {result.toCurrency}
        </p>

        <p className="text-2xl font-bold my-1"
          style={{ color: "#FFD700" }}>
        Last updated: {result.lastUpdated}
        </p>
    </div>
    );
}
