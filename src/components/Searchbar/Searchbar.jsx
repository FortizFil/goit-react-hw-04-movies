import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      return;
    }
    onSubmit(name);
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search images and photos"
        value={name}
        onChange={handleNameChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
export default SearchBar;
