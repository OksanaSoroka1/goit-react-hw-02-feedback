import PropTypes from 'prop-types';
import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  onNeutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  onBadClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
  }
  render() {
    const { good, neutral, bad } = this.state;
    /*  const total = good + neutral + bad;
        const positive =  Math.round(good * 100 / total)
        <FeedbackOptions options={} onLeaveFeedback={}> */
    return (
      <div>
        <p>Please leave feedback</p>
        <ul>
          <li>
            <button type="button" onClick={this.onGoodClick}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onNeutralClick}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.onBadClick}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <p>No feedback given</p>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()} %</li>
        </ul>
      </div>
    );
  }
}

export { Feedback };
