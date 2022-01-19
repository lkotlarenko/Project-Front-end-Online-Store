import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import mockFetch from '../__mocks__/mockFetch';

describe('15 - Mostre quais produtos tem o frete grátis', () => {
  it('Exibe corretmente a informação de frete grátis dos produtos', async () => {

    jest.spyOn(global, 'fetch').mockImplementation(mockFetch)
    render(<App />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
    expect(screen.getAllByTestId('free-shipping').length).toBe(1);
  });
});
