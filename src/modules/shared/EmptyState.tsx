export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: string;
  show?: boolean;
  clickAction?: () => void;
}

export function EmptyState({ title, description, action, clickAction = () => {} }: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center m-auto p-4">
      <div className="flex flex-col items-center justify-center text-center max-w-md">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        {description && <p className="text-muted-foreground mb-8 text-base leading-relaxed">{description}</p>}
        {action && <button onClick={clickAction}>{action}</button>}
      </div>
    </div>
  );
}
