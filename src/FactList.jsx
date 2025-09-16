import React from 'react';

const FactList = ({ category, facts = [], isLoading, error, onBack }) => {
  return (
    <div className="fact-list">
      <button onClick={onBack} className="back-button">
        &larr; Back to Categories
      </button>
      <h2>10 Amazing Facts About <strong>{category}</strong></h2>
      {isLoading && <div className="loader">Loading facts...</div>}
      {error && <div className="error">Error: {error}</div>}
      {!isLoading && facts.length > 0 && (
        <ul>
          {facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FactList;