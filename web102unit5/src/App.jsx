// App.jsx
import React, { useState } from 'react';
import './App.css'
import DiscoverButton from './components/DiscoverButton';
import CatCard from './components/CatCard';
import BanList from './components/BanList';

export default function App() {
  const [catData, setCatData] = useState(null);
  const [banList, setBanList] = useState([]);

  const fetchCat = async () => {
    let attempts = 0;
    while (attempts < 10) {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1',
        {
          headers: {
            "x-api-key":import.meta.env.VITE_CAT_API_KEY
          }
        }
      );
      const data = await response.json();
      const cat = data[0];
      const breed = cat.breeds[0]?.name;
      if (!banList.includes(breed)) {
        setCatData(cat);
        return;
      }
      attempts++;
    }
    setCatData(null);
  };

  const toggleBan = (value) => {
    if (banList.includes(value)) {
      setBanList(banList.filter((v) => v !== value));
    } else {
      setBanList([...banList, value]);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cat Discovery App</h1>
      <DiscoverButton onClick={fetchCat} />
      {catData && <CatCard cat={catData} onAttributeClick={toggleBan} />}
      <BanList banList={banList} onRemove={toggleBan} />
    </div>
  );
}
