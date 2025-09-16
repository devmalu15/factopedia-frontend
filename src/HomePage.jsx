import React from 'react';
import CategoryList from './CategoryList';

const HomePage = ({ onSelectCategory }) => {
  return (
    <div className="homepage">
      <section className="intro">
        <h2>Welcome to Factopedia!</h2>
        <p>
          Scroll down to explore a world of fascinating facts across various categories.
          Click on any category to uncover ten amazing facts you might not have known.
        </p>
      </section>
      <CategoryList onSelectCategory={onSelectCategory} />
    </div>
  );
};

export default HomePage;