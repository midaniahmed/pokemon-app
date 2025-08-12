import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../../modules/shared';

describe('Modal', () => {
  it('should not render the modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('should render the modal when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalElement = screen.getByRole('dialog');
    expect(modalElement).toBeInTheDocument();
  });

  it('should render the children content correctly', () => {
    const contentText = 'This is the content of the modal.';
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <h1 id="dialog-title">Test Title</h1>
        <p>{contentText}</p>
      </Modal>
    );

    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should call the onClose function when the backdrop is clicked', () => {
    const handleClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog.parentElement!);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should not call the onClose function when the modal content is clicked', () => {
    const handleClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    );

    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog);

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('should have correct ARIA attributes for accessibility', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <h1 id="dialog-title">Accessible Modal</h1>
      </Modal>
    );

    const dialog = screen.getByRole('dialog');

    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'dialog-title');
  });
});
