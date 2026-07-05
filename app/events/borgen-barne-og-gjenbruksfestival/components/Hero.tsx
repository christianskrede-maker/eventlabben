import InterestButtons from './InterestButtons';
import Countdown from './Countdown';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        textAlign: 'center',
        padding: '90px 20px 70px',
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
          marginBottom: '28px',
        }}
      />

      <p
        style={{
          color: '#4f6f52',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Lørdag 15. august 2026 kl. 11.00 • Elgplassen • Gratis for alle
      </p>

      <h1
        style={{
          fontSize: 'clamp(40px, 8vw, 78px)',
          color: '#31583a',
          marginBottom: '20px',
          lineHeight: 1.05,
        }}
      >
        Borgen Barne- og Gjenbruksfestival
      </h1>

      <p
        style={{
          maxWidth: '720px',
          margin: '0 auto 28px',
          fontSize: '20px',
          lineHeight: 1.65,
        }}
      >
        En inkluderende festival for hele nærmiljøet med bruktmarked,
        barneaktiviteter, kultur, musikk, mat, miljø, gjenbruk og fellesskap.
      </p>

<div
  style={{
    display: 'grid',
    gap: '8px',
    margin: '0 auto 28px',
    maxWidth: '520px',
    color: '#31583a',
    fontWeight: 700,
  }}
>
  <span>Publikum åpner kl. 11.00</span>
  <span>Deltakere møter kl. 09.30</span>
  <span>Frivillige møter kl. 08.00</span>
</div>

<Countdown />

<InterestButtons />
    </section>
  );
}