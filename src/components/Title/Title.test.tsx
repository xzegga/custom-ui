import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('App', () => {
  it('Renders Base App Text', () => {
    render(<Title />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Base Ap');
  });
});
