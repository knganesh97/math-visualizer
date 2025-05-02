import React from 'react';
import InputForm from '../components/InputForm';
import GraphPlot from '../components/GraphPlot';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Interactive Graph Visualizer</h1>
      <InputForm />
      <GraphPlot />
    </div>
  );
};

export default Home;