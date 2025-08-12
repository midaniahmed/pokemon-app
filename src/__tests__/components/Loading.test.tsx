import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loading } from '../../modules/shared/Loading';

describe('Loading Component', () => {
  it('should render the "Loading..." text correctly', () => {
    render(<Loading />);

    const loadingText = screen.getByText('Loading...');

    expect(loadingText).toBeInTheDocument();
  });
});
