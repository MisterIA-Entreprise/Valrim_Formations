import React, { useState } from 'react';
import PropositionCommerciale from './PropositionCommerciale';
import ProgrammesFormation from './ProgrammesFormation';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('propale');

  const handleNavigateToFormations = () => {
    setCurrentPage('formations');
  };

  return (
    <div className="app-container">
      {currentPage === 'propale' && (
        <PropositionCommerciale onNavigateToFormations={handleNavigateToFormations} />
      )}
      {currentPage === 'formations' && (
        <ProgrammesFormation />
      )}
    </div>
  );
};

export default App;
