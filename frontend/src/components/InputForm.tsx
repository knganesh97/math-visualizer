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
    setIsLoading(true);
    try {
      const result = await plotCurve(equation);
      onPlotResult(result, equation);
    } catch (error) {
      // Optionally handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 250 }}>
      <label htmlFor="equation">Equation:</label>
      <input
        id="equation"
        type="text"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        placeholder="e.g. sin(x)"
        disabled={isLoading}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button type="submit" disabled={isLoading || !equation.trim()} style={{ padding: '0.5rem', fontSize: '1rem' }}>
        {isLoading ? 'Plotting...' : 'Plot'}
      </button>
    </form>
  );
};

export default InputForm;