import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';
import { selectFilter } from '../redux/contactsSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
