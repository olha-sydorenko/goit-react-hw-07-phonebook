import PropTypes from 'prop-types';
import { ListItem } from './Contact.styled';

export const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <ListItem>
      {name}: {number}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
