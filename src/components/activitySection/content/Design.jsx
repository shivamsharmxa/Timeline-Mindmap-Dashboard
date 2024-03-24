import React, { useState } from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

// Define your custom node component
const CustomNodeComponent = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const nodeDetails = {
    'Sales': 'Details about Sales',
    'Online': 'Details about Online',
    'Dealership': 'Details about Dealership',
    // Add more details for other nodes
  };

  const nodeStyle = {
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
    position: 'relative', // Required for absolute positioning of the hover card
  };

  const hoverCardStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%) translateY(10px)',
    background: '#FFF',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    zIndex: 100,
    width: 'max-content',
    maxWidth: '250px',
    fontSize: '13px',
    lineHeight: '1.5',
    textAlign: 'justify',
    visibility: isHovered ? 'visible' : 'hidden', // Only show when hovered
    opacity: isHovered ? 1 : 0, // Transition the visibility
    transition: 'opacity 0.3s, visibility 0.3s',
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
      <div style={hoverCardStyle}>
        <strong>{data.label}:</strong> {nodeDetails[data.label] || "No details available."}
      </div>
    </div>
  );
};

// Setup the initial nodes and edges
const initialNodes = [
  { id: 'sales', type: 'custom', data: { label: 'Sales' }, position: { x: 250, y: 25 } },
  { id: 'online', type: 'custom', data: { label: 'Online' }, position: { x: 100, y: 125 } },
  { id: 'dealership', type: 'custom', data: { label: 'Dealership' }, position: { x: 400, y: 125 } },
];

const initialEdges = [
  { id: 'e1-2', source: 'sales', target: 'online', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
  { id: 'e1-3', source: 'sales', target: 'dealership', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
];

// The main ReactFlow component
const SalesFlow = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

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

export default SalesFlow;

