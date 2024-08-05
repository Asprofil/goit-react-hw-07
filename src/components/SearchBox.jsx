import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
