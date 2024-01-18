import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const [localFilter, setLocalFilter] = useState(filter);

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    setLocalFilter(filterValue);
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <label htmlFor="filterInput" className="filter">
        Find contacts by name:
      </label>
      <input
        id="filterInput"
        type="text"
        value={localFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.array.isRequired,
};

export default Filter;
