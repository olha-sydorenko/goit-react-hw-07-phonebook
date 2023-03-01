import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { ListItem } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      {name}: {number}
      <button onClick={() => dispatch(removeContact(id))} type="button">
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
