import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setSearchQuery('');
    }
  };

  return (
    <div className="position-relative d-flex align-items-center">
      <div
        className={`search-container d-flex align-items-center ${
          isExpanded ? 'expanded' : ''
        }`}
      >
        <input
          type="text"
          className={`form-control border-0 shadow-none ${
            isExpanded ? 'd-block' : 'd-none'
          }`}
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-link text-dark p-2"
          onClick={toggleSearch}
          aria-label={isExpanded ? 'Close search' : 'Open search'}
        >
          {isExpanded ? (
            <X className="h-5 w-5" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};