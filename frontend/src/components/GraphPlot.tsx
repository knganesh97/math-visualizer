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
      <div style={{ width: 400, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd' }}>
        <span style={{ color: '#888' }}>Graph will appear here</span>
      </div>
    );
  }

  const xValues = data.points.map(point => point.x);
  const yValues = data.points.map(point => point.y);

  return (
    <div style={{ width: 400, height: 300 }}>
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { color: '#555' },
            name: equation || 'Function'
          }
        ]}
        layout={{
          title: equation ? `Graph of ${equation}` : 'Function Graph',
          xaxis: { title: 'x' },
          yaxis: { title: 'y' },
          margin: { l: 40, r: 10, t: 40, b: 40 }
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  );
};

export default GraphPlot;