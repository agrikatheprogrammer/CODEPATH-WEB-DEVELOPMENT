import React from 'react';
import './styles.css';

export default function CatCard({ cat, onAttributeClick }) {
  const breed = cat.breeds?.[0];

  if (!breed) return null;

  return (
    <div className="cat-card">
      <img src={cat.url} alt={breed.name} className="cat-image" />
      <div className="breed-name" onClick={() => onAttributeClick(breed.name)}>
        Breed: {breed.name}
      </div>
      <div>Origin: {breed.origin}</div>
      <div>Temperament: {breed.temperament}</div>
    </div>
  );
}