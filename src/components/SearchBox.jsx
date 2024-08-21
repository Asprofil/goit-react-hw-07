import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/FilterSlice';

const SearchBox = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
