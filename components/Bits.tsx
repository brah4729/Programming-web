export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="font-mono eyebrow">{children}</div>;
}

export function CornerHandles() {
  return (
    <>
      <span className="handle" style={{ top: -4, left: -4 }} />
      <span className="handle" style={{ top: -4, right: -4 }} />
      <span className="handle" style={{ bottom: -4, left: -4 }} />
      <span className="handle" style={{ bottom: -4, right: -4 }} />
    </>
  );
}
