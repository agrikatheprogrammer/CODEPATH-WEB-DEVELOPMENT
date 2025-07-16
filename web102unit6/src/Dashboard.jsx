import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchData();
  }, []);

  // Filter characters by name and species
  const filteredCharacters = characters.filter((char) => {
    return (
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (speciesFilter === 'All' || char.species === speciesFilter)
    );
  });

  // Get unique species for dropdown
  const speciesOptions = ['All', ...new Set(characters.map((char) => char.species))];

  // Summary statistics
  const total = characters.length;
  const humanCount = characters.filter((char) => char.species === 'Human').length;
  const alienCount = characters.filter((char) => char.species === 'Alien').length;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Rick & Morty Character Dashboard</h1>

      {/* Summary Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded">Total Characters: {total}</div>
        <div className="bg-gray-100 p-4 rounded">Humans: {humanCount}</div>
        <div className="bg-gray-100 p-4 rounded">Aliens: {alienCount}</div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <select
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
          className="p-2 border rounded"
        >
          {speciesOptions.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </div>

      {/* Character List */}
      <ul className="grid grid-cols-2 gap-4">
        {filteredCharacters.map((char) => (
          <li key={char.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{char.name}</h2>
            <p>Species: {char.species}</p>
            <p>Status: {char.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
