import PropTypes from 'prop-types';

export const Contact = ({ name = '', number = '' }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};
