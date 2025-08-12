import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../../modules/shared';

describe('Spinner', () => {
  it('should render the spinner component correctly', () => {
    render(<Spinner />);

    const spinnerElement = screen.getByTestId('loading-spinner');

    expect(spinnerElement).toBeInTheDocument();
  });

  it('should have the correct structure', () => {
    render(<Spinner />);

    const container = screen.getByTestId('loading-spinner');

    const animatedDiv = container.firstChild;

    expect(animatedDiv).toBeInTheDocument();
    expect(animatedDiv).toHaveClass('animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600');
  });
});
