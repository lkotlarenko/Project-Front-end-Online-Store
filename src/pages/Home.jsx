import React, { Component } from 'react';
import CartBtn from '../components/CartBtn';
import * as api from '../services/api';
import Card from '../components/Card';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      query: '',
      products: [],
      categActual: '',
      cartItems: [],
    };
  }

  componentDidMount() {
    this.setCategories();
    this.filterProducts();
  }

  addCart = ({ target: { parentElement: { id } } }) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, id],
    }));
  }

  setCategories = async () => {
    const data = await api.getCategories();
    this.setState({
      categories: data,
    });
  }

  setQuery = (target) => {
    this.setState({
      query: target.value,
    });
  }

  filterProducts = async () => {
    const { categActual, query } = this.state;
    const apiResult = await api.getProductsFromCategoryAndQuery(categActual, query);
    this.setState({
      products: apiResult.results,
    });
  }

  lastRadio = (target) => {
    this.setState({
      categActual: target.id,
    });
  }

  render() {
    const { categories, query, products } = this.state;
    return (
      <main>
        <CartBtn />
        <p>
          {categories.map((item) => (
            <label key={ item.id } htmlFor={ item.id } data-testid="category">
              <input
                type="radio"
                onChange={ ({ target }) => this.lastRadio(target) }
                name="category"
                id={ item.id }
              />
              { item.name }
            </label>
          ))}
        </p>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <section>
          <input
            type="text"
            data-testid="query-input"
            value={ query }
            onChange={ ({ target }) => this.setQuery(target) }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.filterProducts }
          >
            buscar
          </button>
        </section>
        { products.map((card) => (
          <Card
            key={ card.id }
            product={ card }
            addToCart={ this.addCart }
          />
        )) }
      </main>
    );
  }
}

export default Home;
