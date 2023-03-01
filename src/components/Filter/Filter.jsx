//import PropTypes from 'prop-types';
import { FilterText, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <FilterText>Find contacts by name</FilterText>
      <Input type="text" name="filter" value={filter} onChange={handleFilter} />
    </div>
  );
};
