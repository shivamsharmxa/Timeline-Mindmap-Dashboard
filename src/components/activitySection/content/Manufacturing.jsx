import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

const Manufacturing = () => {
  // Custom node component for Manufacturing, Material, and Production
  const CustomNodeComponent = ({ data }) => (
    <div className="custom-node" style={{
      background: 'linear-gradient(135deg, #89D4CF, #734AE8)',
      color: '#FFFFFF',
      border: '2px solid #5D5D5D',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      padding: '20px',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '14px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
    }}>
      <Handle type="target" position="top" style={{ borderRadius: '50%', background: '#555' }} />
      {data.label}
      <Handle type="source" position="bottom" style={{ borderRadius: '50%', background: '#555' }} />
    </div>
  );

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
