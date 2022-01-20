import React, { Component } from 'react';
import CartBtn from '../components/CartBtn';
import * as api from '../services/api';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.setCategories();
  }

  setCategories = async () => {
    const data = await api.getCategories();
    this.setState({
      categories: data,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <main>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CartBtn />
        <p>
          {categories.map((item) => (
            <label key={ item.id } htmlFor={ item.id } data-testid="category">
              <input
                type="radio"
                name="category"
                id={ item.id }
              />
              { item.name }
            </label>
          ))}
        </p>
      </main>
    );
  }
}

export default Home;
