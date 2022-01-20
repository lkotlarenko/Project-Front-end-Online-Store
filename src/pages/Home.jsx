import React, { Component } from 'react';
import CartBtn from '../components/CartBtn';

export class Home extends Component {
  render() {
    return (
      <main>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CartBtn />
      </main>
    );
  }
}

export default Home;
