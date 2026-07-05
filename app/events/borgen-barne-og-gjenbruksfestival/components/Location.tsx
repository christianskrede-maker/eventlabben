export default function Location() {
  return (
    <section id="location" style={sectionStyle}>
      <h2 style={headingStyle}>Hvor finner du festivalen?</h2>

      <div style={cardStyle}>
        <div>
          <h3 style={subHeadingStyle}>📍 Sted</h3>
          <p>Elgplassen, Borgen i Asker</p>

          <h3 style={subHeadingStyle}>🚗 Parkering</h3>
          <p>Bruk nærliggende parkeringsmuligheter og vis hensyn til naboer.</p>

          <h3 style={subHeadingStyle}>🚌 Buss og gange</h3>
          <p>Festivalområdet ligger sentralt på Borgen og er enkelt å finne til fots.</p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Elgplassen%20Borgen%20Asker"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            Åpne i Google Maps
          </a>
        </div>

        <iframe
          title="Kart til Borgen Barne- og Gjenbruksfestival"
          src="https://www.google.com/maps?q=Elgplassen%20Borgen%20Asker&output=embed"
          style={mapStyle}
          loading="lazy"
        />
      </div>
    </section>
  );
}

const sectionStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '80px 20px',
} as const;

const headingStyle = {
  textAlign: 'center',
  fontSize: '34px',
  color: '#31583a',
  marginBottom: '30px',
} as const;

const cardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '24px',
  background: '#f7f8f3',
  border: '1px solid #dfe8d8',
  borderRadius: '24px',
  padding: '24px',
} as const;

const subHeadingStyle = {
  color: '#31583a',
  marginBottom: '6px',
} as const;

const buttonStyle = {
  display: 'inline-block',
  marginTop: '18px',
  background: '#31583a',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 700,
  padding: '12px 18px',
  borderRadius: '999px',
} as const;

const mapStyle = {
  width: '100%',
  minHeight: '320px',
  border: 0,
  borderRadius: '18px',
} as const;