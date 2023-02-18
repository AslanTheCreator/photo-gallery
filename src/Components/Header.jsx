import React from 'react';

const tags = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

function Header({ searchValue, setSearchValue, categoryId, setCategoryId }) {
  return (
    <div className="top">
      <ul className="tags">
        {tags.map((tag, index) => (
          <li
            onClick={() => setCategoryId(index)}
            className={index === categoryId ? 'active' : ''}
            key={tag.name}>
            {tag.name}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="search-input"
        placeholder="Поиск по названию"
      />
    </div>
  );
}

export default Header;
