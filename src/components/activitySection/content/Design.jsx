import React from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

// Define styles directly within the component for consistency
const nodeStyles = {
  background: 'linear-gradient(145deg, #89D4CF, #734AE8)',
  color: '#FFFFFF',
  border: '2px solid #5D5D5D',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  padding: '10px 20px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  textAlign: 'center',
  width: 'auto',
  cursor: 'pointer',
};

const edgeStyle = {
  stroke: '#ff0072',
  strokeWidth: 3,
};

// Custom Node Component
const CustomNodeComponent = ({ data }) => (
  <div className="custom-node" style={nodeStyles}>
    <Handle type="target" position="top" style={{ borderRadius: '50%', background: '#555' }} />
    {data.label}
    <Handle type="source" position="bottom" style={{ borderRadius: '50%', background: '#555' }} />
  </div>
);

const nodeTypes = { customNode: CustomNodeComponent };

// Nodes and Edges for the Design component
const nodes = [
  { id: 'design', type: 'customNode', data: { label: 'Design' }, position: { x: 250, y: 25 } },
  { id: 'hardware', type: 'customNode', data: { label: 'Hardware' }, position: { x: 100, y: 125 } },
  { id: 'software', type: 'customNode', data: { label: 'Software' }, position: { x: 400, y: 125 } },
];

const edges = [
  { id: 'e-design-hardware', source: 'design', target: 'hardware', animated: true, style: edgeStyle },
  { id: 'e-design-software', source: 'design', target: 'software', animated: true, style: edgeStyle },
];

const Design = () => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      style={{ height: 400, background: 'rgba(240, 240, 240, 0.95)' }}
    >
      {/* Additional components like MiniMap, Controls, Background can be added here */}
    </ReactFlow>
  );
};

export default Design;
