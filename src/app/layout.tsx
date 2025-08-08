// In app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <a href="/" style={{ marginRight: '1rem' }}>Home</a>
          <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
