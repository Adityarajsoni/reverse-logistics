import React from "react";

export default function ReturnList({ returns = [] }) {
  return (
    <div className="bg-gray-800 p-6 rounded shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">My Return Requests</h3>

      {returns.length === 0 ? (
        <p className="text-gray-400">No return requests submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {returns.map((r, index) => (
            <li key={index} className="p-4 bg-gray-700 rounded">
              <p><span className="font-semibold">Order ID:</span> {r.orderId}</p>
              <p><span className="font-semibold">Item:</span> {r.item}</p>
              <p><span className="font-semibold">Reason:</span> {r.reason}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
