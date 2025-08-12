import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tag } from '../../modules/shared';

vi.mock('../../core/utils', () => ({
  cn: (...args: (string | undefined)[]) => args.filter(Boolean).join(' '),
}));

describe('Tag', () => {
  it('should render the label text correctly', () => {
    render(<Tag label="active" />);

    const tagElement = screen.getByText('active');
    expect(tagElement).toBeInTheDocument();
  });

  it('should apply custom classes alongside base classes', () => {
    const customClass = 'bg-green-500';

    render(<Tag label="Success" className={customClass} />);
    const tagElement = screen.getByText('Success');

    expect(tagElement).toHaveClass('px-3 py-1 rounded-full');

    expect(tagElement).toHaveClass(customClass);
  });

  it('should be a span element', () => {
    render(<Tag label="test" />);

    const tagElement = screen.getByText('test');

    expect(tagElement.tagName).toBe('SPAN');
  });
});
