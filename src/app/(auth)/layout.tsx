export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-soft px-5">
      <div className="w-full max-w-sm rounded-lg bg-surface p-10 shadow-md">
        {children}
      </div>
    </div>
  );
}
