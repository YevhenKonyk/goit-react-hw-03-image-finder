import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ value, onSearch, onChange }) => (
  <header className="Searchbar">
    <form className="SearchForm" onSubmit={onSearch}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        placeholder="Search images and photos"
        name="query"
        value={value}
        onChange={onChange}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
