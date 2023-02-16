import PropTypes from 'prop-types';

export const Contact = ({ name = '', number = '' }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
