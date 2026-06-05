import { useRef } from 'react';

function SearchBar({ searchQuery, onSearchChange }) {
  const inputRef = useRef(null);
  function handleFocusClick() {
    inputRef.current.focus();
  }

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <span className="search-icon">🔍</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Cari nama user..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {/* Tombol untuk clear pencarian */}
        {searchQuery && (
          <button
            className="clear-btn"
            onClick={() => onSearchChange('')}
            title="Hapus pencarian"
          >
            ✕
          </button>
        )}
      </div>

      {/* Tombol Focus Search menggunakan useRef */}
      <button className="focus-btn" onClick={handleFocusClick}>
        Focus Search
      </button>
    </div>
  );
}

export default SearchBar;
