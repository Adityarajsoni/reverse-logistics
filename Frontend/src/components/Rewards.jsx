import React from "react";

export default function Rewards() {
  return (
    <div className="bg-gray-800 p-6 rounded shadow text-white">
      <h3 className="text-2xl font-semibold mb-4">Offline Store Rewards</h3>
      <p className="text-gray-300 mb-4">
        Earn reward points for returning your items at offline partner stores. 
        These points can be redeemed for exclusive discounts and cashback offers.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-200">
        <li>✅ Drop returns at designated offline stores</li>
        <li>🎁 Earn reward tokens/NFTs on each successful return</li>
        <li>🏆 Redeem rewards in your customer dashboard</li>
      </ul>
    </div>
  );
}
