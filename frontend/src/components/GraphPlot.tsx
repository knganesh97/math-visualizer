import React from 'react';
import Plot from 'react-plotly.js';
import { CurvePlotResponse } from '../types';

interface GraphPlotProps {
  data?: CurvePlotResponse;
  equation?: string;
}

const GraphPlot: React.FC<GraphPlotProps> = ({ data, equation }) => {
  if (!data || !data.points || data.points.length === 0) {
    return (
      <div className="w-full h-64 bg-white border border-gray-300 rounded-md flex items-center justify-center">
        <p className="text-gray-500">Graph will be rendered here.</p>
      </div>
    );
  }

  const xValues = data.points.map(point => point.x);
  const yValues = data.points.map(point => point.y);

  const plotData = [
    {
      x: xValues,
      y: yValues,
      type: 'scatter',
      mode: 'lines',
      line: { color: '#3B82F6', width: 2 },
      name: equation || 'Function'
    }
  ];

  const layout = {
    title: equation ? `Graph of ${equation}` : 'Function Graph',
    xaxis: { title: 'x' },
    yaxis: { title: 'y' },
    autosize: true,
    margin: { l: 50, r: 50, t: 50, b: 50 },
    showlegend: false,
    plot_bgcolor: 'white',
    paper_bgcolor: 'white'
  };

  const config = {
    responsive: true,
    displayModeBar: true,
    displaylogo: false,
    modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d']
  };

  return (
    <div className="w-full h-96 bg-white border border-gray-300 rounded-md">
      <Plot
        data={plotData}
        layout={layout}
        config={config}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  );
};

export default GraphPlot;