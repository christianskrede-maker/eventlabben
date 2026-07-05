import Link from 'next/link';

export default function AdminPage() {
  return (
    <main style={pageStyle}>
      <div style={topBarStyle}>
        <Link
          href="/events/borgen-barne-og-gjenbruksfestival"
          style={backLinkStyle}
        >
          ← Tilbake til festivalen
        </Link>
      </div>

      <h1 style={titleStyle}>Festival Admin</h1>
      <p style={textStyle}>Velkommen til administrasjon av EventLabben.</p>

      <div style={gridStyle}>
        <Link href="/admin/stalls" style={card}>
          <span style={iconStyle}>🏪</span>
          <h2>Salgsboder</h2>
          <p>Administrer alle salgsplasser.</p>
        </Link>

        <Link href="/admin/school" style={card}>
          <span style={iconStyle}>🎒</span>
          <h2>Skoleelever</h2>
          <p>Alle påmeldte skolestartpakker.</p>
        </Link>

        <Link href="/admin/volunteers" style={card}>
          <span style={iconStyle}>🙋</span>
          <h2>Frivillige</h2>
          <p>Fordel vakter og kontaktinfo.</p>
        </Link>

        <Link href="/admin/contact" style={card}>
          <span style={iconStyle}>✉️</span>
          <h2>Henvendelser</h2>
          <p>Alle meldinger fra nettsiden.</p>
        </Link>
      </div>
    </main>
  );
}

const pageStyle = {
  maxWidth: 1200,
  margin: '40px auto',
  padding: 20,
} as const;

const topBarStyle = {
  marginBottom: 28,
} as const;

const backLinkStyle = {
  display: 'inline-block',
  textDecoration: 'none',
  color: '#2f5d3a',
  fontWeight: 700,
  background: '#eef5ee',
  border: '1px solid #d8e6d8',
  borderRadius: 999,
  padding: '10px 16px',
} as const;

const titleStyle = {
  margin: '0 0 12px',
  color: '#12351f',
} as const;

const textStyle = {
  margin: 0,
  color: '#333',
} as const;

const gridStyle = {
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  marginTop: 40,
} as const;

const card = {
  border: '1px solid #ddd',
  borderRadius: 16,
  padding: 24,
  textDecoration: 'none',
  color: '#222',
  background: '#fff',
} as const;

const iconStyle = {
  fontSize: 24,
} as const;