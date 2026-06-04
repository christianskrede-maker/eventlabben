export default function About() {
  return (
    <section style={sectionStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Om festivalen</h2>

        <p style={textStyle}>
          Borgen Barne- og Gjenbruksfestival er en gratis nærmiljøfestival på
          Elgplassen for barn, familier og alle som bor på Borgen og i Asker.
        </p>

        <p style={textStyle}>
          Festivalen samler bruktmarked, barneaktiviteter, musikk, mat,
          kulturinnslag og miljøaktiviteter i én inkluderende møteplass.
        </p>

        <p style={textStyle}>
          Målet er å skape fellesskap, gjøre gjenbruk enklere og vise hvordan
          vi sammen kan ta bedre vare på tingene våre, nærmiljøet og miljøet.
        </p>
      </div>
    </section>
  );
}

const sectionStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '20px 20px 70px',
} as const;

const cardStyle = {
  background: '#f7f8f3',
  border: '1px solid #dfe8d8',
  borderRadius: '28px',
  padding: '34px',
} as const;

const headingStyle = {
  fontSize: '34px',
  color: '#31583a',
  marginTop: 0,
} as const;

const textStyle = {
  fontSize: '18px',
  lineHeight: 1.7,
  marginBottom: '16px',
} as const;
