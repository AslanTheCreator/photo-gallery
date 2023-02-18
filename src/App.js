import React from 'react';
import { useState, useEffect } from 'react';

import Header from './Components/Header';
import Pagination from './Components/Pagination';
import Content from './Components/Content';

import './index.scss';

function App() {
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : '';

    fetch(`https://63e39fa8619fce55d41d4f26.mockapi.io/Collections?p=${page}&l=3&${category}`)
      .then((res) => res.json())
      .then((json) => setCollection(json))
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении данных');
      });
  }, [categoryId, page]);

  return (
    <div className="App">
      <h1>Коллекция фотографий</h1>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      />
      <Content searchValue={searchValue} collection={collection} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default App;
