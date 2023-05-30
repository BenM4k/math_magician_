// import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, computeFunction,
  } = props;

  return (
    <button type="button" onClick={computeFunction} name={name}>{name}</button>
  );
};

export default Button;
