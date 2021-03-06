import React from 'react';
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: { this.props.name}</h1>
        <p>Producer: { this.props.producer}</p>
        <p>Watermark: { this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: { this.props.color }</p>
        <p>Weight: { this.props.weight }</p>

      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: isWeightValid
}

function isWeightValid(props, propName) {
  const weight = props[propName];

  if (weight === undefined) {
    return new Error('The `weight` prop is required.');
  }

  if (isNaN(weight)) {
    return new Error(`${propName} has to be a number.`)
  }

  if (weight < 80 || weight > 300) {
    return new Error(`${propName} has to be between 80 and 300`)
  }
}
