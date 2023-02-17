import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

export const Container = props => {
  return <Wrapper>{props.children}</Wrapper>;
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
