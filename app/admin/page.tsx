import Link from 'next/link';

export default function AdminPage() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: '40px auto',
        padding: 20,
      }}
    >
      <h1>Festival Admin</h1>

      <p>Velkommen til administrasjon av EventLabben.</p>

      <div
        style={{
          display: 'grid',
          gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginTop: 40,
        }}
      >
        <Link href="/admin/stalls" style={card}>
          🏪
          <h2>Salgsboder</h2>
          <p>Administrer alle salgsplasser.</p>
        </Link>

        <Link href="/admin/school" style={card}>
          🎒
          <h2>Skoleelever</h2>
          <p>Alle påmeldte skolestartpakker.</p>
        </Link>

        <Link href="/admin/volunteers" style={card}>
          🙋
          <h2>Frivillige</h2>
          <p>Fordel vakter og kontaktinfo.</p>
        </Link>

        <Link href="/admin/contact" style={card}>
          ✉️
          <h2>Henvendelser</h2>
          <p>Alle meldinger fra nettsiden.</p>
        </Link>
      </div>
    </main>
  );
}

const card = {
  border: '1px solid #ddd',
  borderRadius: 16,
  padding: 24,
  textDecoration: 'none',
  color: '#222',
  background: '#fff',
};