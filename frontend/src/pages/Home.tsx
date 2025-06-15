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
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
        Simple Math Visualizer
      </h1>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start' }}>
        <InputForm onPlotResult={handlePlotResult} />
        <GraphPlot data={plotData} equation={equation} />
      </div>
    </div>
  );
};

export default Home;