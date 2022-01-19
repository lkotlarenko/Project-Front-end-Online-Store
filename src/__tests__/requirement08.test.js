import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import mockedQueryResult from '../__mocks__/query';
import mockFetch from '../__mocks__/mockFetch';

describe('8 - Adicione produtos a partir da tela de listagem de produtos', () => {
  it('Adiciona da tela de listagem um produto que aparece no carrinho', async () => {

    jest.spyOn(global, 'fetch').mockImplementation(mockFetch)
    render(<App />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[0]);
    fireEvent.click(screen.getByTestId('shopping-cart-button'));
    await waitFor(() => expect(screen.getAllByTestId('shopping-cart-product-name')));
    expect(screen.getByTestId('shopping-cart-product-name')).toHaveTextContent(
      mockedQueryResult.results[0].title,
    );
    expect(screen.getByTestId('shopping-cart-product-quantity')).toHaveTextContent('1');
  });
});
