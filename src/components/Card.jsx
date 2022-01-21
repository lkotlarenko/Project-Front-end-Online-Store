import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product: { price, title, thumbnail, id } } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } width="150px" />
        <h4>{ price }</h4>
        <Link
          to={ `/item/${id}` }
          data-testid="product-detail-link"
        >
          Mais detalhes
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.array,
}.isRequired;

export default Card;
