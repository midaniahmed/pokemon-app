import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card, CardContent } from '../../modules/shared';

describe('Card Integration', () => {
  it('should render CardContent inside Card and display the children', () => {
    render(
      <Card data-testid="card-component">
        <CardContent data-testid="card-content-component">
          <p>Hello, World!</p>
        </CardContent>
      </Card>
    );

    const cardElement = screen.getByTestId('card-component');
    const contentElement = screen.getByTestId('card-content-component');
    const childElement = screen.getByText('Hello, World!');

    expect(cardElement).toContainElement(contentElement);
    expect(contentElement).toContainElement(childElement);
  });

  it('should apply props correctly to nested components', () => {
    render(
      <Card className="card-test-class">
        <CardContent className="content-test-class">
          <span>Integration test successful</span>
        </CardContent>
      </Card>
    );

    const cardElement = screen.getByText('Integration test successful').closest('[data-slot="card"]');
    const contentElement = screen.getByText('Integration test successful').closest('[data-slot="card-content"]');

    expect(cardElement).toHaveClass('card-test-class');
    expect(contentElement).toHaveClass('content-test-class');
  });
});
