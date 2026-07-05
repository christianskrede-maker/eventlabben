export default function Waste() {
  return (
    <section id="waste" style={sectionStyle}>
      <h2 style={headingStyle}>Avfall og miljø</h2>

      <p style={textStyle}>
        Borgen Barne- og Gjenbruksfestival ønsker å bidra til et renere og mer
        bærekraftig nærmiljø. Her finner du informasjon om kildesortering,
        avfallshenting og hvordan vi sammen kan ta vare på området.
      </p>

      <details style={dropdownStyle}>
        <summary style={summaryStyle}>Hvordan sortere avfall?</summary>

        <div style={listStyle}>
          <WasteItem title="Matavfall" text="Matrester sorteres som matavfall." />
          <WasteItem title="Plast" text="Ren plastemballasje sorteres som plast." />
          <WasteItem title="Papp og papir" text="Papp, papir og kartong sorteres sammen." />
          <WasteItem title="Glass og metall" text="Glass- og metallemballasje sorteres separat." />
          <WasteItem title="Restavfall" text="Det som ikke kan sorteres andre steder går i restavfall." />
          <WasteItem
            title="Matavfallsposer"
            text="Matavfallsposer kan hentes gratis på Borgen innbyggertorg."
          />
        </div>
      </details>

      <details style={dropdownStyle}>
        <summary style={summaryStyle}>
          Månedlig avfallshenting i Askerlia
        </summary>

        <div style={listStyle}>
          <WasteItem
            title="Boligsameie 5–10"
            text="Første tirsdag hver måned kl. 17.30."
          />

          <WasteItem
            title="Boligsameie 1–4, 11 og 12"
            text="Første onsdag hver måned kl. 17.30."
          />

          <WasteItem
            title="Viktig informasjon"
            text="Ordningen gjelder alle måneder unntatt juli og august. Avfall kan kun settes ut på hentedagen, og beboerne må selv kaste avfallet i søppelbilen når den kommer."
          />

        </div>
      </details>

      <details style={dropdownStyle}>
        <summary style={summaryStyle}>
          Festivalens miljøprofil
        </summary>

        <div style={listStyle}>
          <WasteItem
            title="Gjenbruk"
            text="Festivalen fremmer ombruk, reparasjon og gjenbruk fremfor å kjøpe nytt."
          />

          <WasteItem
            title="Miljø"
            text="Vi oppfordrer alle til å sortere avfallet og holde festivalområdet rent."
          />

          <WasteItem
            title="Fellesskap"
            text="Sammen skaper vi et hyggelig og bærekraftig arrangement for hele nærmiljøet."
          />
        </div>
      </details>

      <div style={linkGridStyle}>
        <a
          href="https://www.asker.kommune.no/avfall-og-gjenvinning/kildesortering/#les-mer-om-de-ulike-avfallstypene"
          target="_blank"
          rel="noopener noreferrer"
          style={linkCardStyle}
        >
          <span>Asker kommune</span>
          <strong>Les mer om kildesortering</strong>
        </a>
      </div>
    </section>
  );
}

function WasteItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div style={itemStyle}>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

const sectionStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '80px 20px',
} as const;

const headingStyle = {
  textAlign: 'center',
  fontSize: '36px',
  color: '#31583a',
} as const;

const textStyle = {
  textAlign: 'center',
  maxWidth: '820px',
  margin: '0 auto 34px',
  lineHeight: 1.7,
} as const;

const dropdownStyle = {
  background: '#f7f8f3',
  border: '1px solid #dfe8d8',
  borderRadius: '20px',
  padding: '20px',
  marginBottom: '20px',
} as const;

const summaryStyle = {
  cursor: 'pointer',
  fontWeight: 700,
  color: '#31583a',
  fontSize: '18px',
} as const;

const listStyle = {
  display: 'grid',
  gap: '12px',
  marginTop: '20px',
} as const;

const itemStyle = {
  background: '#fff',
  border: '1px solid #dfe8d8',
  borderRadius: '16px',
  padding: '14px',
  display: 'grid',
  gap: '6px',
} as const;

const linkGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '16px',
  marginTop: '20px',
} as const;

const linkCardStyle = {
  background: '#31583a',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '20px',
  padding: '22px',
  display: 'grid',
  gap: '8px',
} as const;