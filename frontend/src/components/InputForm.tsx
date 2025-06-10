import React, { useState } from 'react';
import { plotCurve } from '../services/api';
import { CurvePlotResponse } from '../types';

interface InputFormProps {
  onPlotResult: (data: CurvePlotResponse, equation: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onPlotResult }) => {
  const [equation, setEquation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted equation:', equation);
    setIsLoading(true);
    
    try {
      const result = await plotCurve(equation);
      onPlotResult(result, equation);
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
        disabled={isLoading}
      />
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? 'Plotting...' : 'Plot Graph'}
      </button>
    </form>
  );
};

export default InputForm;