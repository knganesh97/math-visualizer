import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import GraphPlot from '../components/GraphPlot';
import { CurvePlotResponse } from '../types';

const Home: React.FC = () => {
  const [plotData, setPlotData] = useState<CurvePlotResponse | undefined>();
  const [equation, setEquation] = useState<string>('');

  const handlePlotResult = (data: CurvePlotResponse, eq: string) => {
    setPlotData(data);
    setEquation(eq);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Interactive Graph Visualizer</h1>
      <InputForm onPlotResult={handlePlotResult} />
      <GraphPlot data={plotData} equation={equation} />
    </div>
  );
};

export default Home;