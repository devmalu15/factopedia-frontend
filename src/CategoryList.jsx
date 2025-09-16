import React from 'react';

const categories = [
  'Animals 🐾',
  'Science & Nature 🧪',
  'Human Body 🧠',
  'Food & Drink 🍔',
  'Geography 🌎',
  'History 🏛️',
  'Space & Astronomy 🔭',
  'Technology 🤖',
  'Myth-Busting 🧐',
  'Pop Culture 📺',
  'Sports ⚽',
  'Music 🎵',
  'Movies & TV Shows 🎬',
  'Video Games 🎮',
  'Literature & Books 📚',
  'Languages 🗣️',
  'Inventions 💡',
  'Famous People 🧑‍🤝‍🧑',
  'Art & Design 🎨',
  'Random & Unusual Facts 🤔',
  'Ancient Civilizations 🏺',
  'World Records 🥇',
  'Money & Economy 💰',
  'Psychology 🤯',
  'Bizarre Events 😵',
  'Odd Laws ⚖️',
  'Everyday Life ☕',
  'The Internet 🌐',
  'Mythology 🐉',
  'Architecture 🏗️'
];

const CategoryList = ({ onSelectCategory }) => {
  return (
    <div className="category-list">
      <h2>Choose a Category</h2>
      <div className="category-cards">
        {categories.map((category) => (
          <div
            key={category}
            className="card"
            onClick={() => onSelectCategory(category)}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectCategory(category)}
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;