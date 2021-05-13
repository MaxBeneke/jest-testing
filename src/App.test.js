import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe( 'App Counter', () => {
  test('Counter Elements should be present', () => {
    render(<App />);
    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    const counterLabel = screen.getByText(/Counter:/i);
    const counterText = screen.getByTestId("counter-value");

    expect(incrementButton).toBeInTheDocument();
    expect(incrementButton).toBeEnabled();
    expect(decrementButton).toBeInTheDocument();
    expect(decrementButton).toBeDisabled();
    expect(counterLabel).toBeInTheDocument();
    expect(counterText).toHaveTextContent(0);
  })

  test('Increment increases value by 1 and enables decrement button present', () => {
    render(<App />)
    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    const counterText = screen.getByTestId("counter-value")

    expect(counterText).toHaveTextContent(0);
    userEvent.click(incrementButton);
    expect(counterText).toHaveTextContent(1);
    expect(decrementButton).not.toBeDisabled();
  })

  describe('App Item List', () => {
    test('List Form Components render', () => {
      render(<App />)
      const listItemInput = screen.getByLabelText(/Create List Item/i)
      const addItemButton = screen.getByTestId("add-item")

      expect(listItemInput).toBeInTheDocument();
      expect(addItemButton).toBeInTheDocument();
    })
  })
})