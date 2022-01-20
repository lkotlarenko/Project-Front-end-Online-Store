import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { product: { price, title, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } width="150px" />
        <h4>{ price }</h4>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.array,
}.isRequired;

export default Card;
