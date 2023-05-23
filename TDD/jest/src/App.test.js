import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('버튼이 제대로 동작하고 있습니까?', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'change to blue'});

  expect(button).toHaveStyle({ backgroundColor: 'red' });
  
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('change to red');
})