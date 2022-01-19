import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import mockFetch from '../__mocks__/mockFetch';

describe(`13 - Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece`, () => {

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Vê a quantidade de produtos no carrinho da tela de listagem', async () => {

    jest.spyOn(global, 'fetch').mockImplementation(mockFetch)
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[0]);
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[1]);
    expect(screen.getByTestId('shopping-cart-size')).toHaveTextContent('2');
  });

  it('Vê a quantidade de produtos no carrinho da tela de detalhes', async () => {

    jest.spyOn(global, 'fetch').mockImplementation((url) => {
      return mockFetch(url);
    });
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[0]);
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[1]);
    fireEvent.click(screen.getAllByTestId('product-detail-link')[0]);
    expect(screen.getByTestId('shopping-cart-size')).toHaveTextContent('4');
  });
});
