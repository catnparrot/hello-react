import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
    return (
      <div>
        hello, my name is {name}.
        <br />
        his children value is {children}.
        <br />
        my favoriteNumber is {favoriteNumber}.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'default name',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
