import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '../../modules/layout/Header';

describe('Header', () => {
  it('should render the header with the correct title and structure', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    const titleElement = screen.getByRole('heading', { name: /pokemon app/i });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });
});
