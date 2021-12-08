import PropTypes from 'prop-types';

const FeadbackOptionsItem = (onLeaveFeedback, option) => {
  return (
    <li>
      <button type="button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </li>
  );
};
FeadbackOptionsItem.propTypes = {
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.string,
};
export { FeadbackOptionsItem };
