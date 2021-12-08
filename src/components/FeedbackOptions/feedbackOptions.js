import PropTypes from 'prop-types';
import { FeadbackOptionsItem } from './feadbackOptionsItem';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <FeadbackOptionsItem
          key={option}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
      {/*  {options.map(option => (<li ><button type="button" onClick={()=>onLeaveFeedback(option)}>{option}</button></li>)) } */}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export { FeedbackOptions };
