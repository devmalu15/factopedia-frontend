import React, { useState, useEffect } from 'react';

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
  'Architecture 🏗️',
  'Formation of Earth 🌏',
  'The Hadean Eon 🔥',
  'The Archean Eon 🦠',
  'The Proterozoic Eon 🌊',
  'The Phanerozoic Eon 🦋',
  'The Paleozoic Era 🦕',
  'The Mesozoic Era 🦖',
  'The Cenozoic Era 🐘',
  'The Cambrian Period 🦑',
  'The Ordovician Period 🐚',
  'The Silurian Period 🌲',
  'The Devonian Period 🐟',
  'The Carboniferous Period 🌳',
  'The Permian Period 🦎',
  'The Triassic Period 🌿',
  'The Jurassic Period 🦕',
  'The Cretaceous Period 🌋',
  'The Paleogene Period 🐒',
  'The Neogene Period 🦣',
  'The Quaternary Period 🥶',
  'The Cryogenian Period 🧊',
  'The Ediacaran Period 🦠',
  'The Cambrian Explosion 💥',
  'The Great Oxidation Event 💨',
  'The Ordovician-Silurian extinction event 💀',
  'The Late Devonian extinction event 🍂',
  'The Permian-Triassic extinction event (The Great Dying) ☠️',
  'The Triassic-Jurassic extinction event ☄️',
  'The Cretaceous-Paleogene extinction event 🦖',
  'The rise of the dinosaurs 🥚',
  'The reign of the dinosaurs 👑',
  'The extinction of the dinosaurs ☄️',
  'The rise of mammals 🐿️',
  'The Ice Ages 🧊',
  'The Holocene Epoch 🏡',
  'The Anthropocene Epoch 🏭',
  'The evolution of Homo sapiens 🚶',
  'The Stone Age 🗿',
  'The Paleolithic Era 🦴',
  'The Mesolithic Era 🎣',
  'The Neolithic Era 🌾',
  'The invention of agriculture 👩‍🌾',
  'The Bronze Age 🥉',
  'The Iron Age ⚙️',
  'The rise of ancient civilizations 🏛️',
  'The rise of ancient Egypt ⚱️',
  'The rise of ancient Mesopotamia 📜',
  'The rise of the Indus Valley Civilization 🦚',
  'The rise of ancient China 🐉',
  'The rise of ancient Greece 🏛️',
  'The rise of the Roman Republic 🛡️',
  'The rise of the Roman Empire 👑',
  'The Hellenistic period 🎨',
  'The Byzantine period ✨',
  'The Islamic Golden Age 🕌',
  'The Middle Ages ⚔️',
  'The Renaissance 🎨',
  'The Age of Discovery ⛵',
  'The Protestant Reformation ✝️',
  'The Scientific Revolution 🔭',
  'The Enlightenment 💡',
  'The Industrial Revolution 🏭',
  'The American Revolution 🗽',
  'The French Revolution 🥖',
  'The Napoleonic Wars 🎩',
  'The Victorian Era 🕰️',
  'The Belle Époque 💃',
  'The First World War 🪖',
  'The Roaring Twenties 🎷',
  'The Great Depression 📉',
  'The Second World War 💣',
  'The Cold War 🥶',
  'The Space Race 🚀',
  'The Digital Revolution 💻',
  'The Information Age 💡',
  'The Internet Era 🌐',
  'The rise of globalization 🌍',
  'The rise of social media 📱',
  'The rise of artificial intelligence 🤖',
  'The invention of the telegraph 📟',
  'The invention of the telephone 📞',
  'The invention of the radio 📻',
  'The invention of television 📺',
  'The invention of the computer 🖥️',
  'The invention of the internet 🕸️',
  'The invention of the smartphone 📱',
  'The invention of GPS 🗺️',
  'The invention of Wi-Fi 📶',
  'The invention of Bluetooth 🔊',
  'The invention of the light bulb 💡',
  'The invention of the automobile 🚗',
  'The invention of the airplane ✈️',
  'The invention of the vaccine 💉',
  'The invention of penicillin 💊',
  'The invention of the printing press 🖨️',
  'The invention of the steam engine 🚂',
  'The invention of the internal combustion engine 🚗',
  'The invention of the jet engine 🚀',
  'The invention of the atomic bomb ⚛️',
  'The invention of the transistor 🎛️',
  'Roman Empire 🏛️',
  'Achaemenid Empire (Persian Empire) 🦁',
  'Macedonian Empire (Alexander the Great) ⚔️',
  'Mauryan Empire 🐘',
  'Han Dynasty 🐉',
  'Byzantine Empire 👑',
  'Sassanian Empire 🛡️',
  'Gupta Empire 🇮🇳',
  'Gokturk Khaganate 🐎',
  'Sui Dynasty 🏯',
  'Tang Dynasty 📜',
  'Caliphate (Rashidun, Umayyad, Abbasid) ☪️',
  'Holy Roman Empire 🛡️',
  'Mongol Empire 🐎',
  'Songhai Empire 🏜️',
  'Inca Empire ⛰️',
  'Aztec Empire ☀️',
  'Ottoman Empire 🌙',
  'Mughal Empire 👑',
  'Ming Dynasty 🏺',
  'Qing Dynasty 🇨🇳',
  'British Empire 🇬🇧',
  'Spanish Empire 🇪🇸',
  'French Colonial Empire 🇫🇷',
  'Portuguese Empire 🇵🇹',
  'Russian Empire 🇷🇺',
  'Austro-Hungarian Empire 👑',
  'Japanese Empire 🇯🇵',
  'Zulu Kingdom 🛡️',
  'Kingdom of Mali 🕌',
  'Kingdom of Ghana 🪙',
  'Kingdom of Zimbabwe 🏞️',
  'Kingdom of Aksum ✝️',
  'Kingdom of Kush 📜',
  'Kingdom of Egypt 🐫',
  'Ancient Greece 🏛️',
  'Mayan Civilization 🗿',
  'Aztec Civilization 🌽',
  'Inca Civilization ⛰️',
  'Babylonian Empire 📜',
  'Assyrian Empire 🦁',
  'Hittite Empire 🛡️',
  'Akkadian Empire 📜',
  'Neo-Babylonian Empire 🌙',
  'Ptolemaic Kingdom 👑',
  'Seleucid Empire 🐘',
  'Kushan Empire 🧘‍♂️',
  'Hunnic Empire 🏹',
  'Vandal Kingdom ⛵',
  'Gothic Kingdom 🛡️',
  "Kievan Rus' 🛡️",
  'Kingdom of England 🏰',
  'Kingdom of France ⚜️',
  'Kingdom of Germany 🏰',
  'Kingdom of Italy 🇮🇹',
  'Kingdom of Poland 🇵🇱',
  'Kingdom of Sweden 🇸🇪',
  'Kingdom of Denmark 🇩🇰',
  'Kingdom of Norway 🇳🇴',
  'Tsardom of Russia 🇷🇺',
  'Safavid Empire 🕌',
  'Timurid Empire 📜',
  'Delhi Sultanate 🕌',
  'Maratha Empire 🛡️',
  'Vijayanagara Empire 🏯',
  'Chola Dynasty 🔱',
  'Pallava Dynasty 🐘',
  'Pandyan Dynasty 🐠',
  'Khmer Empire 🏯',
  'Srivijaya Empire 🚢',
  'Majapahit Empire 🏝️',
  'Sultanate of Malacca 🕌',
  'Kingdom of Siam 🇹🇭',
  'Kingdom of the Philippines 🇵🇭',
  'Kingdom of Korea (Goryeo, Joseon) 🇰🇷',
  'Kingdom of Ryukyu ⛩️',
  'Kingdom of Hawaii 🌺',
  'Kingdom of Tonga 🇹🇴',
  'Kingdom of Fiji 🇫🇯',
  'Kingdom of Samoa 🇼🇸',
  'Kingdom of Tahiti 🏝️',
  'Empire of Brazil 🇧🇷',
  'Gran Colombia 🇨🇴',
  'First Mexican Empire 🇲🇽',
  'Kingdom of Mexico 🇲🇽',
  'Kingdom of Peru 🇵🇪',
  'Kingdom of Chile 🇨🇱',
  'Kingdom of Argentina 🇦🇷',
  'Kingdom of Paraguay 🇵🇾',
  'Kingdom of Uruguay 🇺🇾',
  'Kingdom of Bolivia 🇧🇴',
  'Kingdom of Ecuador 🇪🇨',
  'Kingdom of Venezuela 🇻🇪',
  'Kingdom of Colombia 🇨🇴',
  'Kingdom of Morocco 🇲🇦',
  'Kingdom of Algeria 🇩🇿',
  'Kingdom of Tunisia 🇹🇳',
  'Kingdom of Libya 🇱🇾',
  'Kingdom of Egypt 🇪🇬',
  'Kingdom of Sudan 🇸🇩'
];

const shuffleArray = (array) => {
  const newArray = [...array];
  // Fisher-Yates shuffle algorithm
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const CategoryList = ({ onSelectCategory }) => {
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setDisplayedCategories(shuffleArray(categories));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRandomize = () => {
    setDisplayedCategories(shuffleArray(categories));
  };

  const filteredCategories = searchTerm
    ? displayedCategories.filter(category =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : displayedCategories;

  return (
    <div className="category-list">
      <div className="category-header">
        <h2>Choose a Category</h2>
        <div className="category-controls">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleRandomize} className="randomize-button">Randomize 🎲</button>
        </div>
      </div>
      <div className="category-cards">
        {filteredCategories.map((category) => (
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