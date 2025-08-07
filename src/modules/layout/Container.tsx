export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
    </main>
  );
}
