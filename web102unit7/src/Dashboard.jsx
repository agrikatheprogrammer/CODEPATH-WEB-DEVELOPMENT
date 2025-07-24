import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';

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

  const filteredCharacters = characters.filter((char) => {
    return (
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (speciesFilter === 'All' || char.species === speciesFilter)
    );
  });

  const speciesOptions = ['All', ...new Set(characters.map((char) => char.species))];

  const total = characters.length;
  const humanCount = characters.filter((char) => char.species === 'Human').length;
  const alienCount = characters.filter((char) => char.species === 'Alien').length;

  // Charts
  const speciesCount = characters.reduce((acc, char) => {
    acc[char.species] = (acc[char.species] || 0) + 1;
    return acc;
  }, {});
  const speciesChartData = Object.entries(speciesCount).map(([name, value]) => ({ name, value }));

  const statusCount = characters.reduce((acc, char) => {
    acc[char.status] = (acc[char.status] || 0) + 1;
    return acc;
  }, {});
  const statusChartData = Object.entries(statusCount).map(([status, count]) => ({
    status,
    count,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

  return (
    <div className="dashboard-container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h1>Rick & Morty Character Dashboard</h1>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
          >
            {speciesOptions.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>

        {/* Stats */}
        <div className="stats">
          <div>Total Characters: {total}</div>
          <div>Humans: {humanCount}</div>
          <div>Aliens: {alienCount}</div>
        </div>

        {/* Charts */}
        <div className="charts">
          {/* Pie Chart: Species */}
          <div className="chart-box">
            <h3>Species Distribution</h3>
            <PieChart width={300} height={250}>
              <Pie
                data={speciesChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {speciesChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* Bar Chart: Status */}
          <div className="chart-box">
            <h3>Status Breakdown</h3>
            <BarChart width={300} height={250} data={statusChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <h2>Characters</h2>
        <ul className="character-list">
          {filteredCharacters.map((char) => (
            <li key={char.id} className="character-card">
              <Link to={`/character/${char.id}`} className="char-name">
                {char.name}
              </Link>
              <div>Species: {char.species}</div>
              <div>Status: {char.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
