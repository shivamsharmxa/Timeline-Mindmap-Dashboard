
import React, { useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Handle,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider
} from 'react-flow-renderer';


const nodeStyles = {
  background: 'linear-gradient(145deg, #89D4CF, #734AE8)',
  color: '#FFFFFF',
  border: '2px solid #5D5D5D',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  borderRadius: '8px',
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div className="custom-node" style={nodeStyles}>
      <Handle type="target" position="left" style={{ background: '#555' }} />
      <div>{data.label}</div>
      <Handle type="source" position="right" style={{ background: '#555' }} />
    </div>
  );
};

const nodeTypes = {
  customNode: CustomNodeComponent,
};
// Define your nodes and edges
const initialNodes = [
  { id: 'research', data: { label: 'Research' }, position: { x: 250, y: 5 }, style: nodeStyles },
  { id: 'external', data: { label: 'External' }, position: { x: 100, y: 100 }, style: nodeStyles },
  { id: 'internal', data: { label: 'Internal' }, position: { x: 400, y: 100 }, style: nodeStyles },
  { id: 'b2c-1', data: { label: 'B2C' }, position: { x: 400, y: 200 }, style: nodeStyles },
  { id: 'b2c-2', data: { label: 'B2C' }, position: { x: 400, y: 300 }, style: nodeStyles },
  { id: 'online', data: { label: 'Online' }, position: { x: 300, y: 400 }, style: nodeStyles },
  { id: 'interview', data: { label: 'Interview' }, position: { x: 400, y: 400 }, style: nodeStyles },
  { id: 'publicData', data: { label: 'Public Data' }, position: { x: 500, y: 400 }, style: nodeStyles },
  { id: 'health', data: { label: 'Health' }, position: { x: 600, y: 400 }, style: nodeStyles }
];

const edgeStyle = {
  stroke: '#ff0072',
  strokeWidth: 3,
  animated: true
};

const initialEdges = [
  { id: 'e1-2', source: 'research', target: 'external', animated: true,style: edgeStyle },
  { id: 'e1-3', source: 'research', target: 'internal', animated: true,style: edgeStyle },
  { id: 'e3-4', source: 'internal', target: 'b2c-1', animated: true,style: edgeStyle },
  { id: 'e3-5', source: 'internal', target: 'b2c-2', animated: true,style: edgeStyle },
  { id: 'e5-6', source: 'b2c-2', target: 'online', animated: true,style: edgeStyle },
  { id: 'e5-7', source: 'b2c-2', target: 'interview', animated: true,style: edgeStyle },
  { id: 'e5-8', source: 'b2c-2', target: 'publicData', animated: true,style: edgeStyle },
  { id: 'e5-9', source: 'b2c-2', target: 'health', animated: true,style: edgeStyle },
];

const Research = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedElement, setSelectedElement] = useState(null);
  const [nodeName, setNodeName] = useState("");

  const onAddNode = () => {
    const newNode = {
      id: `node_${nodes.length + 1}`,
      type: 'customNode',
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * window.innerWidth * 0.5, y: Math.random() * window.innerHeight * 0.5 },
      style: nodeStyles,
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const onDeleteNode = () => {
    if (!selectedElement || !selectedElement.id.startsWith('node_')) return;
    setNodes((nds) => nds.filter((n) => n.id !== selectedElement.id));
    setEdges((eds) => eds.filter((e) => e.source !== selectedElement.id && e.target !== selectedElement.id));
    setSelectedElement(selectedElement); // Reset selected element after deletion
  };

  const onElementClick = (event, element) => {
    if (element.id.startsWith('node_')) {
      setSelectedElement(element);
      setNodeName(element.data.label); // set the name in the input field to the node's current label
    }
  };
  const updateNodeName = () => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedElement.id) {
          node.data = { ...node.data, label: nodeName };
        }
        return node;
      })
    );
  };

  const onConnect = (params) => setEdges((eds) => addEdge({ ...params, style: edgeStyle }, eds));

  return (
    
<ReactFlowProvider>
      <button onClick={onAddNode}>Add Node</button>
      <button onClick={onDeleteNode} disabled={!selectedElement}>
        Delete Selected Node
      </button>
      {selectedElement && (
        <div>
          <input value={nodeName} onChange={(e) => setNodeName(e.target.value)} />
          <button onClick={updateNodeName}>Update Node Name</button>
        </div>
      )}
      <div style={{ height: '90vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onElementClick={onElementClick}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap nodeColor={(node) => node.type === 'customNode' ? 'rgb(0, 0, 255)' : '#eee'} />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default Research;