import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../../modules/shared';

// Helper type to make tests more readable
type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

describe('Button Component - Unit Tests', () => {
  it('should render the button with its children correctly', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply default "primary" variant and "md" size classes when no props are provided', () => {
    render(<Button>Default</Button>);
    const buttonElement = screen.getByRole('button', { name: /default/i });
    expect(buttonElement).toHaveClass('bg-blue-600');
    expect(buttonElement).toHaveClass('px-4 py-2');
  });

  it.each([
    ['primary', 'bg-blue-600'],
    ['secondary', 'bg-gray-200'],
    ['success', 'bg-green-600'],
    ['danger', 'bg-red-600'],
    ['outline', 'border-blue-600'],
    ['ghost', 'hover:bg-gray-100'],
  ])('should apply the correct classes for the "%s" variant', (variant, expectedClass) => {
    render(<Button variant={variant as ButtonVariant}>Variant Test</Button>);
    const buttonElement = screen.getByRole('button', { name: /variant test/i });
    expect(buttonElement).toHaveClass(expectedClass);
  });

  it.each([
    ['sm', 'px-3 py-1.5 text-sm'],
    ['md', 'px-4 py-2 text-base'],
    ['lg', 'px-6 py-3 text-lg'],
  ])('should apply the correct classes for the "%s" size', (size, expectedClasses) => {
    render(<Button size={size as ButtonSize}>Size Test</Button>);
    const buttonElement = screen.getByRole('button', { name: /size test/i });
    expect(buttonElement.className).toContain(expectedClasses);
  });

  it('should be disabled when the "disabled" prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByRole('button', { name: /disabled/i });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('disabled:opacity-50 disabled:cursor-not-allowed');
  });

  it('should be disabled when the "loading" prop is true', () => {
    render(<Button loading>Loading</Button>);
    const buttonElement = screen.getByRole('button', { name: /loading/i });
    expect(buttonElement).toBeDisabled();
  });

  it('should call the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const buttonElement = screen.getByRole('button', { name: /clickable/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should NOT call the onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Not Clickable
      </Button>
    );
    const buttonElement = screen.getByRole('button', { name: /not clickable/i });
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should NOT call the onClick handler when loading', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} loading>
        Not Clickable
      </Button>
    );
    const buttonElement = screen.getByRole('button', { name: /not clickable/i });
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply any additional classNames passed via props', () => {
    const customClass = 'my-extra-class';
    render(<Button className={customClass}>Custom Class</Button>);
    const buttonElement = screen.getByRole('button', { name: /custom class/i });
    expect(buttonElement).toHaveClass(customClass);
  });
});

describe('Button Component - Integration Test', () => {
  it('should correctly interact with parent component state', () => {
    const FormSimulator = () => {
      const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

      const handleSubmit = () => {
        setStatus('submitting');
      };

      return (
        <div>
          <p>Status: {status}</p>
          <Button onClick={handleSubmit} loading={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      );
    };

    render(<FormSimulator />);

    const submitButton = screen.getByRole('button', { name: /^submit$/i });
    expect(screen.getByText('Status: idle')).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    const submittingButton = screen.getByRole('button', { name: /submitting.../i });
    expect(screen.getByText('Status: submitting')).toBeInTheDocument();
    expect(submittingButton).toBeDisabled();

    expect(screen.queryByRole('button', { name: /^submit$/i })).not.toBeInTheDocument();
  });
});
