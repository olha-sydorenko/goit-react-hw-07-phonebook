import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../operations/operations';
import { ListItem } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
