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
      <h2 style={headingStyle}>
        Festivalen arrangeres i samarbeid mellom
      </h2>

      <p style={textStyle}>
        Festivalen er et felles initiativ fra frivillige organisasjoner og
        nærmiljøet på Borgen. Sammen ønsker vi å skape en hyggelig møteplass
        med fokus på fellesskap, gjenbruk og aktiviteter for hele familien.
      </p>

      <div style={gridStyle}>
        {organizers.map((organizer) => (
          <div key={organizer.name} style={itemStyle}>
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
  padding: '50px 20px 80px',
  textAlign: 'center',
} as const;

const headingStyle = {
  fontSize: '36px',
  color: '#31583a',
  marginBottom: '18px',
} as const;

const textStyle = {
  maxWidth: '760px',
  margin: '0 auto 45px',
  lineHeight: 1.7,
  fontSize: '18px',
  color: '#444',
} as const;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '40px',
  alignItems: 'center',
} as const;

const itemStyle = {
  textAlign: 'center',
} as const;

const logoStyle = {
  width: '170px',
  height: '120px',
  objectFit: 'contain',
  display: 'block',
  margin: '0 auto 14px',
} as const;

const nameStyle = {
  margin: 0,
  color: '#31583a',
  fontSize: '22px',
  fontWeight: 700,
} as const;