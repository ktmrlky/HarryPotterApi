import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/spinner';
import Footer from '../ui/Footer';

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.name} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
