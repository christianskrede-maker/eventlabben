import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        background: '#f6f7f4',
      }}
    >
      <aside
        style={{
          background: '#31583a',
          color: '#fff',
          padding: 24,
        }}
      >
        <h2 style={{ marginTop: 0 }}>EventLabben</h2>

        <nav
          style={{
            display: 'grid',
            gap: 12,
            marginTop: 32,
          }}
        >
          <AdminLink href="/admin">🏠 Dashboard</AdminLink>
          <AdminLink href="/admin/stalls">🏪 Salgsboder</AdminLink>
          <AdminLink href="/admin/volunteers">🙋 Frivillige</AdminLink>
          <AdminLink href="/admin/school">🎒 Skole</AdminLink>
          <AdminLink href="/admin/contact">✉️ Kontakt</AdminLink>
        </nav>
      </aside>

      <section>{children}</section>
    </div>
  );
}

function AdminLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        color: '#fff',
        textDecoration: 'none',
        padding: '10px 12px',
        borderRadius: 8,
        display: 'block',
      }}
    >
      {children}
    </Link>
  );
}