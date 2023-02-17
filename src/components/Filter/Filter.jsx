import { FilterText, Input } from './Filter.styled';
export const Filter = ({ value, onFilterChange }) => {
  return (
    <div>
      <FilterText>Find contacts by name</FilterText>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};
