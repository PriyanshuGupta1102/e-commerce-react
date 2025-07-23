// 1. Import necessary functions from the React Testing Library and the component to test.
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// 2. 'describe' creates a test suite, a container for all tests related to the 'Watch Product Page'.
describe('Watch Product Page', () => {

  // 3. Test #1: A "happy path" test to ensure the component renders correctly.
  test('renders the main product title', () => {
    // 4. 'render(<App />)' renders our App component in a virtual DOM for testing.
    render(<App />);
    
    // 5. 'screen.getByText(...)' searches the rendered component for an element containing this text.
    // The '/.../i' is a regular expression that makes the search case-insensitive.
    const titleElement = screen.getByText(/Timeless Elegance/i);
    
    // 6. 'expect(...).toBeInTheDocument()' is the assertion. We expect that the titleElement was successfully found.
    expect(titleElement).toBeInTheDocument();
  });

  // 7. Test #2: Tests user interaction with an input field.
  test('allows user to change quantity and updates the input field', () => {
    render(<App />);
    
    // 8. 'getByLabelText' is a preferred way to find form elements, as it mimics how users find them.
    const quantityInput = screen.getByLabelText(/quantity/i);
    
    // 9. 'fireEvent.change' simulates a user changing the value of the input field to '5'.
    fireEvent.change(quantityInput, { target: { value: '5' } });
    
    // 10. We assert that the 'value' property of the input is now '5'.
    expect(quantityInput.value).toBe('5');
  });

  // 11. Test #3: A test for a specific business rule (a "negative" scenario).
  test('disables the "Add to Cart" button when quantity is 0', () => {
    render(<App />);
    const quantityInput = screen.getByLabelText(/quantity/i);
    
    // 12. 'getByRole' finds elements by their accessibility role. Buttons have a 'button' role.
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

    // 13. Simulate setting the quantity to 0.
    fireEvent.change(quantityInput, { target: { value: '0' } });
    
    // 14. '.toBeDisabled()' is an assertion that checks if the button has the 'disabled' HTML attribute.
    expect(addToCartButton).toBeDisabled();
  });

  // 15. Test #4: An automated test written specifically to catch a known bug. This test should FAIL.
  test('should disable the "Add to Cart" button when quantity is not a number', () => {
    render(<App />);
    const quantityInput = screen.getByLabelText(/quantity/i);
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

    // 16. Simulate a user typing invalid text into the quantity field.
    fireEvent.change(quantityInput, { target: { value: 'abc' } });

    // 17. We EXPECT the button to be disabled, but our buggy code fails to do this.
    // Therefore, Jest will report this test as FAILED, successfully identifying the bug.
    expect(addToCartButton).toBeDisabled();
  });

});