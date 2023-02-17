import PropTypes from 'prop-types';

export const Contact = ({ name = '', number = '', id, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
