import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from '../../modules/layout/Container';

describe('Container', () => {
  it('should render children within the correct container structure', () => {
    render(
      <Container>
        <h1>Hello, World!</h1>
      </Container>
    );

    const childElement = screen.getByRole('heading', { name: /hello, world!/i });
    expect(childElement).toBeInTheDocument();

    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
