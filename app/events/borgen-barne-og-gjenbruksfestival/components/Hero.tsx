import InterestButtons from './InterestButtons';

export default function Hero() {
  return (
    <section
       id="top"
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

      <InterestButtons />
    </section>
  );
}
