import React, { useState } from 'react';
import ReactFlow, { Handle } from 'react-flow-renderer';

const CustomNodeComponent = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const nodeDetails = {
    'Sales': 'Sales involve strategies to increase transactions of products or services. It includes various tactics to enhance customer purchases.',
    'Online': 'Online sales refer to the process of purchasing goods or services via the internet. It encompasses e-commerce platforms and web stores.',
    'Dealership': 'A dealership involves authorized sellers providing and servicing products directly to consumers, often for vehicles and machinery.'
  };

  const hoverCardStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%) translateY(10px)',
    background: '#FFF',
    color: '#333',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
    width: 'max-content',
    maxWidth: '250px',
    fontSize: '13px',
    lineHeight: '1.5',
    textAlign: 'justify',
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease, visibility 0s linear 0.3s, transform 0.3s ease',
  };

  const hoverCardVisibleStyle = {
    ...hoverCardStyle,
    opacity: 1,
    visibility: 'visible',
    transition: 'opacity 0.3s ease, visibility 0s, transform 0.3s ease',
    transform: 'translateX(-50%) translateY(0px)',
  };

  return (
    <>
      <div
        className="custom-node"
        style={{
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
          position: 'relative',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Handle type="target" position="top" style={{ borderRadius: '50%', background: '#555' }} />
        {data.label}
        <Handle type="source" position="bottom" style={{ borderRadius: '50%', background: '#555' }} />
        {isHovered && (
          <div style={isHovered ? hoverCardVisibleStyle : hoverCardStyle}>
            <strong>{data.label}:</strong> {nodeDetails[data.label] || "No details available."}
          </div>
        )}
      </div>
    </>
  );
};
const nodes = [
  {
    id: 'sales',
    type: 'custom',
    data: { label: 'Sales' },
    position: { x: 250, y: 25 },
  },
  {
    id: 'online',
    type: 'custom',
    data: { label: 'Online' },
    position: { x: 100, y: 125 },
  },
  {
    id: 'dealership',
    type: 'custom',
    data: { label: 'Dealership' },
    position: { x: 400, y: 125 },
  },
];

const edges = [
  { id: 'sales-online', source: 'sales', target: 'online', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
  { id: 'sales-dealership', source: 'sales', target: 'dealership', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
];

const Sales = () => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={{ custom: CustomNodeComponent }}
      fitView
      style={{ width: '100%', height: '90vh', background: 'rgba(240, 240, 240, 0.95)' }}
    >
      {/* MiniMap, Controls, Background, etc. */}
    </ReactFlow>
  );
  
};

export default Sales;