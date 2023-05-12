import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  // This is an integration test and not a unit test but it's a good example of how to test a component that uses react-router-dom
  it('Renders not found if invalid path', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
