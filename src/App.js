import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterGrid from './Components/Characters/CharacterGrid';
import Header from './Components/Ui/Header';
import Search from './Components/Ui/Search';
import './Main.css';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItem = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data);
      setIsLoading(false)
    }
    fetchItem()
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(q) => setQuery(q)}
      />
      <CharacterGrid
        isLoading={isLoading}
        items={items}
      />
    </div>
  );
}

export default App;
