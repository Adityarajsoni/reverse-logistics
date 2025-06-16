const mockReturns = [
  { id: "ORD123", item: "Shoes", status: "Pending", reason: "Size too big" },
  { id: "ORD124", item: "Laptop", status: "Approved", reason: "Faulty screen" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Return Requests</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-700 text-left">
                <th className="p-3 border-b border-gray-600">Order ID</th>
                <th className="p-3 border-b border-gray-600">Item</th>
                <th className="p-3 border-b border-gray-600">Reason</th>
                <th className="p-3 border-b border-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockReturns.map((r) => (
                <tr
                  key={r.id}
                  className="hover:bg-gray-700 transition duration-200"
                >
                  <td className="p-3 border-b border-gray-600">{r.id}</td>
                  <td className="p-3 border-b border-gray-600">{r.item}</td>
                  <td className="p-3 border-b border-gray-600">{r.reason}</td>
                  <td
                    className={`p-3 border-b border-gray-600 font-medium ${
                      r.status === "Approved"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
