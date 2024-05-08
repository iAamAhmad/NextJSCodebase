export default function AuthInnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Inner Items For Auth Layout!</p>
      {children}
    </>
  );
}
