import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmptyState } from '../../modules/shared/EmptyState';

describe('EmptyState Component', () => {
  it('should render the title correctly when no other props are provided', () => {
    const titleText = 'No items found';
    render(<EmptyState title={titleText} />);

    expect(screen.getByRole('heading', { level: 2, name: titleText })).toBeInTheDocument();

    expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render title and description when both are provided', () => {
    const titleText = 'No items found';
    const descriptionText = 'Try adjusting your search filters.';

    render(<EmptyState title={titleText} description={descriptionText} />);

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });

  it('should render title, description, and an action button when all are provided', () => {
    const titleText = 'No items found';
    const descriptionText = 'Try adjusting your search filters.';
    const actionText = 'Clear Filters';

    render(<EmptyState title={titleText} description={descriptionText} action={actionText} />);

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: actionText })).toBeInTheDocument();
  });
});
