import { Component } from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../Buttons/buttons';

class Counter extends Component {
  static defaultProps = {
    initialValue: 10,
  };
  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  valueIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  valueDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <p>{value}</p>
        <Buttons
          onIncrement={this.valueIncrement}
          onDecrement={this.valueDecrement}
        />
      </div>
    );
  }
}

export { Counter };
