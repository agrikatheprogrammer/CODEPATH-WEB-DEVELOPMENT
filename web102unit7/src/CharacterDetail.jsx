import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
      <img src={character.image} alt={character.name} className="w-48 mb-4" />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
    </div>
  );
}
