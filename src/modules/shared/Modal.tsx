import { type ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}
export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto animate-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        {children}
      </div>
    </div>
  );
}
