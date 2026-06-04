export default function Organizers() {
  const organizers = [
    {
      name: 'Borgen Vel',
      logo: '/events/borgen-barne-og-gjenbruksfestival/logo-borgen-vel.png',
    },
    {
      name: 'Askerlia fellesråd',
      logo: '/events/borgen-barne-og-gjenbruksfestival/logo-askerlia.png',
    },
    {
      name: 'Edelløv boligsameie',
      logo: '/events/borgen-barne-og-gjenbruksfestival/logo-edellov.png',
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Arrangører</h2>

      <div style={gridStyle}>
        {organizers.map((organizer) => (
          <div key={organizer.name} style={cardStyle}>
            <img
              src={organizer.logo}
              alt={organizer.name}
              style={logoStyle}
            />
            <h3 style={nameStyle}>{organizer.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '40px 20px 70px',
  textAlign: 'center',
} as const;

const headingStyle = {
  fontSize: '34px',
  color: '#31583a',
  marginBottom: '28px',
} as const;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '20px',
} as const;

const cardStyle = {
  background: '#f7f8f3',
  border: '1px solid #dfe8d8',
  borderRadius: '24px',
  padding: '28px',
} as const;

const logoStyle = {
  maxWidth: '160px',
  height: '110px',
  objectFit: 'contain',
  marginBottom: '16px',
} as const;

const nameStyle = {
  margin: 0,
  color: '#31583a',
} as const;
