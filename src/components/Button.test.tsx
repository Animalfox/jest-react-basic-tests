import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from "./Button";

test('Button renders correctly', () => {
    const { getByText } = render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
});
