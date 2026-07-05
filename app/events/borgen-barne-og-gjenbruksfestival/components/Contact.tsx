export default function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Praktisk informasjon</h2>

      <div style={cardStyle}>
        <InfoRow title="Festival">
          Borgen Barne- og Gjenbruksfestival
        </InfoRow>

        <InfoRow title="Dato">
          Lørdag 15. august 2026
        </InfoRow>

        <InfoRow title="Tid">
          Kl. 11.00–18.00
        </InfoRow>

        <InfoRow title="Sted">
          Elgplassen, Borgen i Asker
        </InfoRow>

        <InfoRow title="Arrangører">
          Borgen Vel, Askerlia fellesråd og Edelløv boligsameie
        </InfoRow>

        <InfoRow title="Praktisk">
          Gratis inngang • Toaletter • Grillområde • Foodtruck • Gratis is til
          barna
        </InfoRow>

        <InfoRow title="Har du spørsmål?">
          Bruk kontaktknappen øverst på siden, eller ta kontakt med en av våre
          frivillige under festivalen.
        </InfoRow>
      </div>

      <footer style={footerStyle}>
        <h3 style={footerTitle}>
          Borgen Barne- og Gjenbruksfestival 2026
        </h3>

        <p style={footerText}>
          En festival skapt av frivillige – for nærmiljøet på Borgen.
        </p>

        <p style={copyright}>
          Utviklet med ❤️ i Eventlabben
        </p>
      </footer>
    </section>
  );
}

function InfoRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={rowStyle}>
      <strong style={labelStyle}>{title}</strong>
      <div>{children}</div>
    </div>
  );
}

const sectionStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '80px 20px 120px',
} as const;

const headingStyle = {
  textAlign: 'center',
  fontSize: '36px',
  color: '#31583a',
  marginBottom: '36px',
} as const;

const cardStyle = {
  background: '#f7f8f3',
  border: '1px solid #dfe8d8',
  borderRadius: '24px',
  padding: '30px',
  display: 'grid',
  gap: '18px',
} as const;

const rowStyle = {
  display: 'grid',
  gap: '6px',
  lineHeight: 1.7,
} as const;

const labelStyle = {
  color: '#31583a',
} as const;

const footerStyle = {
  marginTop: '70px',
  textAlign: 'center',
} as const;

const footerTitle = {
  color: '#31583a',
  marginBottom: '12px',
} as const;

const footerText = {
  marginBottom: '12px',
  lineHeight: 1.7,
} as const;

const copyright = {
  color: '#777',
  fontSize: '14px',
} as const;