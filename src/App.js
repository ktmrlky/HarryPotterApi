import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';
import Search from './components/ui/Search';
import Buttons from './components/ui/Buttons';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://hp-api.herokuapp.com/api/characters`);
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const clearItems = async () => {
    setIsLoading(true);
    const result = await axios(`http://hp-api.herokuapp.com/api/characters`);
    console.log(result.data);
    setItems(result.data);
    setIsLoading(false);
  };

  const getStudents = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `http://hp-api.herokuapp.com/api/characters/students`
    );
    setItems(res.data);
    setIsLoading(false);
  };

  const getStaffs = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `http://hp-api.herokuapp.com/api/characters/staff`
    );
    setItems(res.data);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Buttons
        clearClick={clearItems}
        getStudentsClick={getStudents}
        getStaffsClick={getStaffs}
      />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
