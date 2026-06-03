Ja — bytt ut `page.tsx` med dette som første utkast:

```tsx
export default function Page() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <img
          src="/events/borgen-barne-og-gjenbruksfestival/logo-festival.png"
          alt="Borgen Barne- og Gjenbruksfestival"
          style={styles.logo}
        />

        <p style={styles.kicker}>Lørdag 15. august 2026 • Elgplassen på Borgen</p>

        <h1 style={styles.title}>Borgen Barne- og Gjenbruksfestival</h1>

        <p style={styles.lead}>
          En gratis og inkluderende nærmiljøfestival for barn, familier og alle på Borgen –
          med bruktmarked, aktiviteter, kultur, grilling og fokus på gjenbruk.
        </p>

        <div style={styles.actions}>
          <a href="#marked" style={styles.primaryButton}>Meld interesse for salgsplass</a>
          <a href="#frivillig" style={styles.secondaryButton}>Bli frivillig</a>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Praktisk informasjon</h2>
        <div style={styles.grid}>
          <InfoCard title="Når?" text="Lørdag 15. august 2026, ca. kl. 11.00–18.00" />
          <InfoCard title="Hvor?" text="Elgplassen på Borgen i Asker" />
          <InfoCard title="For hvem?" text="Alle er velkomne – særlig barn, unge, familier og beboere i området." />
        </div>
      </section>

      <section id="marked" style={styles.sectionSoft}>
        <h2 style={styles.heading}>Bruktmarked</h2>
        <p style={styles.text}>
          Vi planlegger rundt 25 gratis salgsplasser for folk som vil selge eller bytte brukte
          klær, leker, bøker, sportsutstyr og andre ting som fortjener et nytt liv.
        </p>
        <a href="mailto:?subject=Interesse for salgsplass på Borgen Barne- og Gjenbruksfestival" style={styles.primaryButton}>
          Meld interesse for salgsplass
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Program</h2>
        <div style={styles.program}>
          <ProgramItem time="11.00" title="Området åpner" />
          <ProgramItem time="12.00" title="Offisiell åpning og velkommen" />
          <ProgramItem time="12.30" title="Barneaktiviteter, rebusløp og bruktmarked" />
          <ProgramItem time="14.00" title="Sorteringskonkurranse og miljøstand" />
          <ProgramItem time="15.00" title="Kulturinnslag og musikk" />
          <ProgramItem time="16.00" title="Grilling og sosial møteplass" />
          <ProgramItem time="18.00" title="Takk for i dag" />
        </div>
      </section>

      <section style={styles.sectionSoft}>
        <h2 style={styles.heading}>Aktiviteter for barn</h2>
        <div style={styles.tags}>
          {[
            'Fiskedam',
            'Rebusløp',
            'Kaste på blink',
            'Såpebobler',
            'Tegne- og formingsbord',
            'Hoppeslott',
            'Gratis is',
          ].map((item) => (
            <span key={item} style={styles.tag}>{item}</span>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Kart over festivalområdet</h2>
        <p style={styles.text}>
          Her kommer kart over Elgplassen med soner for bruktmarked, scene, barneaktiviteter,
          sortering, mat/grill, toaletter og inngang.
        </p>
        <div style={styles.mapPlaceholder}>
          Kart kommer her
        </div>
      </section>

      <section style={styles.sectionSoft}>
        <h2 style={styles.heading}>Hvorfor gjenbruk?</h2>
        <p style={styles.text}>
          Gjenbruk gjør at ting varer lenger, reduserer avfall og gjør det enklere for flere å
          få glede av klær, leker og utstyr som andre ikke lenger bruker.
        </p>
      </section>

      <section id="frivillig" style={styles.section}>
        <h2 style={styles.heading}>Bli frivillig</h2>
        <p style={styles.text}>
          Festivalen bygges på frivillig innsats. Du kan bidra med rigg, rydding,
          barneaktiviteter, bruktmarked, grilling, informasjon eller sortering.
        </p>
        <a href="mailto:?subject=Jeg vil bidra som frivillig på Borgen Barne- og Gjenbruksfestival" style={styles.primaryButton}>
          Meld deg som frivillig
        </a>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Arrangører</h2>
        <p style={styles.text}>
          Festivalen arrangeres av Borgen Vel, Askerlia fellesråd og Edelløv boligsameie.
          Logoer legges inn når de er klare.
        </p>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{text}</p>
    </div>
  );
}

function ProgramItem({ time, title }: { time: string; title: string }) {
  return (
    <div style={styles.programItem}>
      <strong>{time}</strong>
      <span>{title}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#ffffff',
    color: '#1f2a24',
    fontFamily: 'Arial, sans-serif',
  },
  hero: {
    padding: '64px 24px 48px',
    textAlign: 'center',
    maxWidth: '980px',
    margin: '0 auto',
  },
  logo: {
    width: '100%',
    maxWidth: '260px',
    marginBottom: '28px',
  },
  kicker: {
    color: '#4f6f52',
    fontWeight: 700,
    marginBottom: '12px',
  },
  title: {
    fontSize: 'clamp(36px, 7vw, 72px)',
    lineHeight: 1,
    margin: '0 0 20px',
    color: '#31583a',
  },
  lead: {
    fontSize: '20px',
    lineHeight: 1.6,
    maxWidth: '760px',
    margin: '0 auto 32px',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-block',
    background: '#31583a',
    color: '#ffffff',
    padding: '14px 22px',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 700,
  },
  secondaryButton: {
    display: 'inline-block',
    background: '#f0f4ed',
    color: '#31583a',
    padding: '14px 22px',
    borderRadius: '999px',
    textDecoration: 'none',
    fontWeight: 700,
  },
  section: {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '56px 24px',
  },
  sectionSoft: {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '56px 24px',
    background: '#f7f8f3',
    borderRadius: '32px',
  },
  heading: {
    fontSize: '34px',
    margin: '0 0 20px',
    color: '#31583a',
  },
  text: {
    fontSize: '18px',
    lineHeight: 1.7,
    maxWidth: '760px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  card: {
    background: '#f7f8f3',
    border: '1px solid #dfe8d8',
    borderRadius: '24px',
    padding: '24px',
  },
  cardTitle: {
    margin: '0 0 8px',
    color: '#31583a',
  },
  cardText: {
    margin: 0,
    lineHeight: 1.5,
  },
  program: {
    display: 'grid',
    gap: '12px',
  },
  programItem: {
    display: 'flex',
    gap: '18px',
    alignItems: 'center',
    padding: '16px',
    borderBottom: '1px solid #dfe8d8',
    fontSize: '18px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  tag: {
    background: '#ffffff',
    border: '1px solid #dfe8d8',
    borderRadius: '999px',
    padding: '10px 16px',
    fontWeight: 700,
  },
  mapPlaceholder: {
    marginTop: '24px',
    minHeight: '320px',
    borderRadius: '28px',
    background: '#eef3ea',
    border: '2px dashed #9db28f',
    display: 'grid',
    placeItems: 'center',
    color: '#4f6f52',
    fontWeight: 700,
  },
};
```
