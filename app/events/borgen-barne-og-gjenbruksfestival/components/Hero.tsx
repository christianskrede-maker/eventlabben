export default function Hero() {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <img
        src="/events/borgen-barne-og-gjenbruksfestival/logo-festival.png"
        alt="Borgen Barne- og Gjenbruksfestival"
        style={{
          width: '100%',
          maxWidth: '320px',
          marginBottom: '30px',
        }}
      />

      <p
        style={{
          color: '#4f6f52',
          fontWeight: 700,
          marginBottom: '12px',
        }}
      >
        Lørdag 15. august 2026 • Elgplassen • Gratis for alle
      </p>

      <h1
        style={{
          fontSize: 'clamp(42px, 8vw, 80px)',
          color: '#31583a',
          marginBottom: '20px',
        }}
      >
        Borgen Barne- og Gjenbruksfestival
      </h1>

      <p
        style={{
          maxWidth: '800px',
          margin: '0 auto 40px',
          fontSize: '20px',
          lineHeight: 1.7,
        }}
      >
        En inkluderende festival for hele nærmiljøet med bruktmarked,
        barneaktiviteter, kultur, musikk, foodtruck og fokus på miljø,
        gjenbruk og fellesskap.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <button style={buttonStyle}>
          Meld interesse for salgsplass
        </button>

        <button style={buttonStyle}>
          Bli frivillig
        </button>

        <button style={buttonStyle}>
          Kontakt oss
        </button>
      </div>
    </section>
  );
}

const buttonStyle = {
  background: '#31583a',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  padding: '14px 24px',
  fontSize: '16px',
  fontWeight: 700,
  cursor: 'pointer',
} as const;
