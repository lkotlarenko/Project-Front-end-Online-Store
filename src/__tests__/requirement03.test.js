import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

describe('3 - Crie a página do carrinho de compras', () => {
  it('A home deve ter o botão do carrinho de compras', () => {
    render(<App />);
    expect(screen.getByTestId('shopping-cart-button')).toBeDefined();
  });

  it(`Clicar no botão deve levar à página do carrinho vazio, com a mensagem
      'Seu carrinho está vazio' nela`, async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('shopping-cart-button'));
    await waitFor(() => screen.getByTestId('shopping-cart-empty-message'));
    expect(screen.getByTestId('shopping-cart-empty-message')).toHaveTextContent(
      'Seu carrinho está vazio',
    );
  });
});
