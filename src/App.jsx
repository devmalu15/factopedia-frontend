import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import FactList from './FactList';
import { fetchFacts as apiFetchFacts } from './api';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [theme, setTheme] = useState('light');
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchFacts = async () => {
      try {
        setError(null);
        setFacts([]); // Clear previous facts

        const fetchedFacts = await apiFetchFacts(selectedCategory);

        // Ensure we have an array to work with.
        // If the API returns a single string, split it by newlines.
        if (typeof fetchedFacts === 'string') {
          setFacts(fetchedFacts.split('\n').filter(fact => fact.trim() !== ''));
        } else if (Array.isArray(fetchedFacts)) {
          setFacts(fetchedFacts);
        }
      } catch (err) {
        console.error("API call failed:", err);
        setError('Failed to fetch facts. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFacts();
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setFacts([]);
    setError(null);
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <header className="App-header">
        <h1>Factopedia</h1>
        <p>Your Daily Dose of Fun Facts!</p>
      </header>
      <main>
        {selectedCategory ? (
          <FactList
            category={selectedCategory}
            facts={facts}
            isLoading={isLoading}
            error={error}
            onBack={handleBack}
          />
        ) : (
          <CategoryList onSelectCategory={handleSelectCategory} />
        )}
      </main>
      <footer>
        <p>&copy; 2024 Factopedia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;