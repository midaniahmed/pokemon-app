export const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8" data-testid="loading-spinner">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
};
