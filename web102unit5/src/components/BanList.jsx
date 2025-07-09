// components/BanList.jsx
import React from 'react';
import './styles.css';

export default function BanList({ banList, onRemove }) {
  return (
    <div className="ban-list-container">
      <h2 className="ban-list-title">Ban List:</h2>
      {banList.length === 0 ? (
        <p className="ban-list-empty">No items banned.</p>
      ) : (
        <div className="ban-list-items">
          {banList.map((item) => (
            <span
              key={item}
              onClick={() => onRemove(item)}
              className="ban-list-item"
            >
              {item} ✕
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
