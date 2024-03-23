import React from 'react';
import './Body.css';

import Research from "../content/Research"
import Planning from "../content/Planning"
import Design from "../content/Design"
import Manufacturing from '../content/Manufacturing';
import Sales from "../content/Sales"
import AllFlowcharts from './AllFlowCharts';

// import other phase components...

export const Body = ({ activePhase }) => {
  const renderContent = () => {
    switch (activePhase) {
      case 'Research':
        return <Research />;

        case 'Planning':
        return <Planning />;

        case 'Design':
        return <Design />;

        case 'Manufacturing':
        return <Manufacturing />;

        case 'Sales':
          return <Sales />;
      // Add cases for other phases...
      default:
        return (
          <>
          
         <AllFlowcharts/>
          </>
        )
    }
  };

  return (
    <div className='mainContent'>
      {renderContent()}
    </div>
  );
};
