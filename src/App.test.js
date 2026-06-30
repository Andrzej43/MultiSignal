// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MultiSignal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MultiSignal/i);
    expect(titleElement).toBeInTheDocument();
});
