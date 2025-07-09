// components/DiscoverButton.jsx
import React from 'react';
import './styles.css';

export default function DiscoverButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="discover-button"
    >
      Discover New Cat
    </button>
  );
}
