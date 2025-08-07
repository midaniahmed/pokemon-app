import { cn } from '../../core/utils';

import { EmptyState, type EmptyStateProps } from './EmptyState';
import { ErrorMessage } from './ErrorMessage';
import { Spinner } from './Spinner';

interface PageTemplateProps {
  children: React.ReactNode;
  isLoading?: boolean;
  error?: string;
  emptyState?: EmptyStateProps;
  className?: string;
}

export const PageTemplate = ({ children, isLoading = false, error, className, emptyState }: PageTemplateProps) => {
  const renderContent = () => {
    if (error) {
      return <ErrorMessage message={error} />;
    }

    if (isLoading) {
      return <Spinner />;
    }

    if (emptyState?.show) {
      return <EmptyState {...emptyState} />;
    }

    return children;
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
};
