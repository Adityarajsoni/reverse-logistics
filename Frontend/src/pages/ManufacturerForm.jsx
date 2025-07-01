import React, { useState } from 'react';
import { DigitalTwinSystem } from '../../mainFiles/digital_twin_export.js';


const ManufacturerForm = () => {
  const [formData, setFormData] = useState({
    productId: '',
    name: '',
    description: '',
    uri: 'https://placeholder.uri',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const digitalTwin = new DigitalTwinSystem();

    try {
      const result = await digitalTwin.mintFromFrontend({
        productId: formData.productId,
        name: formData.name,
        description: formData.description,
        metadataUrl: formData.uri,
      });

      console.log('Mint result:', result);
      alert(result.message || 'Minting completed');
    } catch (error) {
      console.error('Error minting:', error);
      alert('Minting failed');
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="productId">
              Product ID
            </label>
            <input
              id="productId"
              name="productId"
              type="text"
              value={formData.productId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="uri">
              URI
            </label>
            <input
              id="uri"
              name="uri"
              type="text"
              value={formData.uri}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Mint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManufacturerForm;
