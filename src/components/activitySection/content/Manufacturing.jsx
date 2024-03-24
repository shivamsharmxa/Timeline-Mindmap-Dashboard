import React, { useState } from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

// Custom node component for Manufacturing, Material, and Production
const CustomNodeComponent = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const nodeDetails = {
    'Manufacturing': 'Manufacturing involves the production of goods for use or sale using labor and machines.',
    'Material': 'Material refers to the physical components used to produce goods.',
    'Production': 'Production is the process of combining various material inputs to make something for consumption.'
  };

  return (
    <div 
      className="custom-node" 
      style={{
        background: 'linear-gradient(135deg, #89D4CF, #734AE8)',
        color: '#black',
        border: '2px solid #5D5D5D',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handle type="target" position="top" style={{ borderRadius: '50%', background: '#555' }} />
      {data.label}
      <Handle type="source" position="bottom" style={{ borderRadius: '50%', background: '#555' }} />
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, 20px)',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0px 4px 14px rgba(0,0,0,0.1)',
          zIndex: 100,
          width: '200px',
        }}>
          {nodeDetails[data.label]}
        </div>
      )}
    </div>
  );
};

const nodes = [
  {
    id: 'manufacturing',
    type: 'custom',
    data: { label: 'Manufacturing' },
    position: { x: 250, y: 25 },
  },
  {
    id: 'material',
    type: 'custom',
    data: { label: 'Material' },
    position: { x: 100, y: 125 },
  },
  {
    id: 'production',
    type: 'custom',
    data: { label: 'Production' },
    position: { x: 400, y: 125 },
  },
];

const edges = [
  { id: 'manufacturing-material', source: 'manufacturing', target: 'material', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
  { id: 'manufacturing-production', source: 'manufacturing', target: 'production', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
];

const Manufacturing = () => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={{ custom: CustomNodeComponent }}
      fitView
      style={{ width: '100%', height: '90vh', background: 'rgba(240, 240, 240, 0.95)', borderRadius: '8px', boxShadow: '0px 4px 14px rgba(0,0,0,0.1)' }}
    >
      {/* Additional React Flow components like MiniMap, Controls, Background, etc., can go here */}
    </ReactFlow>
  );
};

export default Manufacturing;

