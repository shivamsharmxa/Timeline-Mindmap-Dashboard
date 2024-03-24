import React, { useState } from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

// Define the node details mapping
const nodeDetails = {
  'Planning': 'Details about Planning...',
  'PRD': 'Details about Product Requirements Document...',
  'Specs': 'Details about Specifications...'
};

const CustomNodeComponent = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const nodeStyle = {
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
    position: 'relative', // Enable absolute positioning for child elements
  };

  const hoverCardStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, 10px)',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 4px 14px rgba(0,0,0,0.1)',
    zIndex: 100,
    width: '200px',
    display: isHovered ? 'block' : 'none', // Show hover card when isHovered is true
  };

  return (
    <div
      className="custom-node"
      style={nodeStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handle type="target" position="top" style={{ borderRadius: '50%', background: '#555' }} />
      {data.label}
      <Handle type="source" position="bottom" style={{ borderRadius: '50%', background: '#555' }} />
      {isHovered && (
        <div className="node-hover-card" style={hoverCardStyle}>
          <strong>{data.label}:</strong> {nodeDetails[data.label]}
        </div>
      )}
    </div>
  );
};

const nodes = [
  {
    id: 'planning',
    type: 'custom',
    data: { label: 'Planning' },
    position: { x: 250, y: 15 },
  },
  {
    id: 'prd',
    type: 'custom',
    data: { label: 'PRD' },
    position: { x: 100, y: 100 },
  },
  {
    id: 'specs',
    type: 'custom',
    data: { label: 'Specs' },
    position: { x: 400, y: 100 },
  },
];

const edges = [
  { id: 'planning-prd', source: 'planning', target: 'prd', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
  { id: 'planning-specs', source: 'planning', target: 'specs', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
];

const Planning = () => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={{ custom: CustomNodeComponent }}
      fitView
      style={{ width: '100%', height: '90vh' }}
    >
      {/* Additional components like MiniMap, Controls, Background can be added here */}
    </ReactFlow>
  );
};

export default Planning;
