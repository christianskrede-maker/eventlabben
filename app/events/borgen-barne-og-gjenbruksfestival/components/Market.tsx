import { stalls } from '../data/stalls';

export default function Market() {
  return (
    <section id="market" style={sectionStyle}>
      <h2 style={headingStyle}>Salgsboder</h2>

      <p style={textStyle}>
        Her finner du oversikt over alle salgsplassene på festivalen.
        Informasjon om selgere fylles inn fortløpende.
      </p>

      <details style={dropdownStyle}>
        <summary style={summaryStyle}>
          Se salgsboder ({stalls.length})
        </summary>

        <div style={gridStyle}>
          {stalls.map((stall) => (
            <div key={stall.id} style={cardStyle}>
              <strong style={{ color: '#31583a' }}>
                Bod {stall.id}
              </strong>

              <strong>
                {stall.title}
              </strong>

              {stall.description && (
                <span>{stall.description}</span>
              )}
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}

const sectionStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '80px 20px',
} as const;

const headingStyle = {
  textAlign: 'center',
  fontSize: '34px',
  color: '#31583a',
} as const;

const textStyle = {
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 30px',
  lineHeight: 1.7,
} as const;

const dropdownStyle = {
  background: '#f7f8f3',
  border: '1px solid #dfe8d8',
  borderRadius: '20px',
  padding: '20px',
} as const;

const summaryStyle = {
  cursor: 'pointer',
  fontWeight: 700,
  color: '#31583a',
  fontSize: '18px',
} as const;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '12px',
  marginTop: '20px',
} as const;

const cardStyle = {
  background: '#fff',
  border: '1px solid #dfe8d8',
  borderRadius: '16px',
  padding: '14px',
  display: 'grid',
  gap: '6px',
} as const;
