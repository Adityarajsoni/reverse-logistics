import React, { useState } from "react";

export default function ReturnForm() {
  const [form, setForm] = useState({ orderId: "", reason: "", item: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Return Requested:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="orderId"
        type="text"
        value={form.orderId}
        onChange={handleChange}
        placeholder="Order ID"
        required
        className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="item"
        type="text"
        value={form.item}
        onChange={handleChange}
        placeholder="Item Name"
        required
        className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="reason"
        value={form.reason}
        onChange={handleChange}
        placeholder="Reason for return"
        required
        className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold transition"
      >
        Submit Return Request
      </button>
    </form>
  );
}
