import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    const { product } = this.state;
    const { cartHandler } = this.props;
    const { title, thumbnail, price, warranty } = product;
    return (
      <div>
        <Link to="/">Home</Link>
        <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } width="150px" />
        <h4>{price}</h4>
        <h4>{warranty}</h4>
        <button
          onClick={ () => cartHandler(product) }
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
  cartHandler: PropTypes.func,
}.isRequired;

// https://stackoverflow.com/questions/54114416/how-to-access-this-props-match-params-along-with-other-props
export default withRouter(ProductDetail);
