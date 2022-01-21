import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.getId();
  }

  getId = async () => {
    const { match: { params: { id } } } = this.props;
    try {
      const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const product = await response.json();
      this.setState({ product });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { product: { title, thumbnail, price, warranty } } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } width="150px" />
        <h4>{price}</h4>
        <h4>{warranty}</h4>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default ProductDetail;
