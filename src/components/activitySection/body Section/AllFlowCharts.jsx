// AllFlowcharts.jsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

// Custom node styles
const customNodeStyle = {
  border: '1px solid #ddd',
  padding: '10px 15px',
  borderRadius: '3px',
  fontSize: '14px',
  textAlign: 'center',
  color: 'white',
  background: 'linear-gradient(145deg, #6e8efb, #a777e3)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  // add other styling here
};

const nodeStyles = {
    background: 'linear-gradient(145deg, #6e8efb, #a777e3)',
    color: '#FFFFFF',
    border: '1px solid #222',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  };
  

// Nodes for the flowchart
const nodes = [

  

 
  { id: 'research', type: 'default', data: { label: 'Research' }, position: { x: -100, y: 0 }, style: nodeStyles },
  { id: 'planning', type: 'default', data: { label: 'Planning' }, position: { x: 270, y: 0 }, style: nodeStyles },
  { id: 'designing', type: 'default', data: { label: 'Designing' }, position: { x: 600, y: 0 }, style: nodeStyles },
  { id: 'manufacturing', type: 'default', data: { label: 'Manufacturing' }, position: { x: 900, y: 0 }, style: nodeStyles },
  { id: 'sales', type: 'default', data: { label: 'Sales/Marketing' }, position: { x: 1200, y: 0 }, style: nodeStyles },

  // Sub-elements for Research
  { id: 'external', type: 'default', data: { label: 'External' }, position: { x: -200, y: 100 }, style: nodeStyles },
  { id: 'internal', type: 'default', data: { label: 'Internal' }, position: { x: 5, y: 100 }, style: nodeStyles },
  { id: 'b2c-1', type: 'default', data: { label: 'B2C' }, position: { x: -200, y: 200 }, style: nodeStyles },
  { id: 'b2c-2', type: 'default', data: { label: 'B2C' }, position: { x: 5, y: 200 }, style: nodeStyles },
  { id: 'online-research', type: 'default', data: { label: 'Online' }, position: { x: -50, y: 300 }, style: nodeStyles },
  { id: 'interview', type: 'default', data: { label: 'Interview' }, position: { x: -50, y: 400 }, style: nodeStyles },
  { id: 'publicData', type: 'default', data: { label: 'Public Data' }, position: { x: -50, y: 500 }, style: nodeStyles },
  { id: 'health', type: 'default', data: { label: 'Health' }, position: { x: -50, y: 600 }, style: nodeStyles },
  
  //sub-elements of Planning
  {
    id: 'prd',
    type: 'default',
    data: { label: 'PRD' },
    position: { x: 185, y: 100 },
    style: nodeStyles
  },
  {
    id: 'specs',
    type: 'default',
    data: { label: 'Specs' },
    position: { x: 350, y: 100 },
    style: nodeStyles
  },
  //sub - nodes of designing
  
  { id: 'hardware', type: 'default', data: { label: 'Hardware' }, position: { x: 510, y: 100 }, style: nodeStyles },
  { id: 'software', type: 'default', data: { label: 'Software' }, position: { x: 665, y: 100 }, style: nodeStyles },

//sub-Nodes of Manufaturing

{
    id: 'material',
    type: 'default', // or 'custom'
    data: { label: 'Material' },
    position: { x: 830, y: 100 }, // Adjust the position as necessary
    style: nodeStyles
  },
  {
    id: 'production',
    type: 'default', // or 'custom'
    data: { label: 'Production' },
    position: { x: 990, y: 100 }, // Adjust the position as necessary
    style: nodeStyles
  },

  //sub-nodes of Sales/Marketing

  {
    id: 'online',
    type: 'default', // Change to 'custom' if applicable
    data: { label: 'Online' },
    position: { x: 1150, y: 100 }, // Position adjusted for visual clarity
    style: nodeStyles
  },
  {
    id: 'dealership',
    type: 'default', // Change to 'custom' if applicable
    data: { label: 'Dealership' },
    position: { x: 1320, y: 100 }, // Position adjusted for visual clarity
    style: nodeStyles
  },
]

// Edges for the flowchart
const edges = [
  // Edges for Research section

  { id: 'e-internal-b2c-1', source: 'internal', target: 'b2c-1', animated: true ,style:{stroke: '#ff0072', strokeWidth: 3}},
  { id: 'e-internal-b2c-2', source: 'internal', target: 'b2c-2', animated: true,style:{stroke: '#ff0072', strokeWidth: 3} },
  
  
  { id: 'e-b2c-1-online', source: 'b2c-1', target: 'online-research', animated: true,style:{stroke: '#ff0072', strokeWidth: 3} },
  { id: 'e-b2c-1-interview', source: 'b2c-1', target: 'interview', animated: true,style:{stroke: '#ff0072', strokeWidth: 3} },
  { id: 'e-b2c-1-publicData', source: 'b2c-1', target: 'publicData', animated: true,style:{stroke: '#ff0072', strokeWidth: 3} },
  { id: 'e-b2c-1-health', source: 'b2c-1', target: 'health', animated: true,style:{stroke: '#ff0072', strokeWidth: 3} },

  {
    id: 'e-planning-prd',
    source: 'planning',
    target: 'prd',
    animated: true,
    style: { stroke: '#ff0072', strokeWidth: 3 }
  },
  {
    id: 'e-planning-specs',
    source: 'planning',
    target: 'specs',
    animated: true,
    style: { stroke: '#ff0072', strokeWidth: 3 }
  },
  //edges for Designing
  { id: 'e-designing-hardware', source: 'designing', target: 'hardware', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
  { id: 'e-designing-software', source: 'designing', target: 'software', animated: true, style: { stroke: '#ff0072', strokeWidth: 3 } },
 
  //edges for Manufacturing

  {
    id: 'e-manufacturing-material',
    source: 'manufacturing',
    target: 'material',
    animated: true,
    style: { stroke: '#ff0072', strokeWidth: 3 } // Ensure your styling is consistent
  },
  {
    id: 'e-manufacturing-production',
    source: 'manufacturing',
    target: 'production',
    animated: true,
    style: { stroke: '#ff0072', strokeWidth: 3 } // Ensure your styling is consistent
  },

  //edges of Sales/Marketing
  {
    id: 'e-sales-online',
    source: 'sales',
    target: 'online',
    animated: true,
    style: { stroke: '#ff0072', strokeWidth: 3 } // Ensure styling is consistent
  },
  {
    id: 'e-sales-dealership',
    source: 'sales',
    target: 'dealership',
    animated: true,
    style: { stroke: '#ff0072', strokeWidth: 3 } // Ensure styling is consistent
  },
  
  

  // Add edges for sub-elements within each phase...
  // Research edges
  { id: 'e-research-external', source: 'research', target: 'external', animated: true,style:{stroke: '#ff0072', strokeWidth: 3} },
  { id: 'e-research-internal', source: 'research', target: 'internal', animated: true,style:{stroke: '#ff0072', strokeWidth: 3} },
  
];

const AllFlowcharts = () => {
  return (
    <>
    <div><h1>Click On the MainList Items to See Separately</h1></div>
   
   <div style={{ height: '100vh', marginTop: '0px', padding: '0px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={{ width: '100%', height: '100%' }}
      >
       
       
        <Background />
      </ReactFlow>
    </div>
    </>
  );
};

export default AllFlowcharts;