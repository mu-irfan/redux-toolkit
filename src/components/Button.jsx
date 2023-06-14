import PropTypes from "prop-types";
const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
