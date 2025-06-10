import React, { useState } from 'react';
import { plotCurve } from '../services/api';

const InputForm: React.FC = () => {
  const [equation, setEquation] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted equation:', equation);
    try{
      const result = await plotCurve(equation);
      // TODO: pass the result to GraphPlot
    } catch(error) {
      console.error(error);
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label htmlFor="equation" className="block mb-2 font-medium">
        Enter Equation:
      </label>
      <input
        id="equation"
        type="text"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="e.g. sin(x), x^2, ln(x)"
      />
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Plot Graph
      </button>
    </form>
  );
};

export default InputForm;