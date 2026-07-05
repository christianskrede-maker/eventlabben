import { supabase } from '../../../../lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Stall = {
  id: number;
  stall_number: number;
  seller_name: string | null;
  description: string | null;
  status: string | null;
};

export default async function Market() {
  const { data, error } = await supabase
    .from('festival_stalls')
    .select('id, stall_number, seller_name, description, status')
    .order('stall_number', { ascending: true });

  const stalls: Stall[] =
    data && data.length > 0
      ? data
      : Array.from({ length: 22 }, (_, index) => ({
          id: index + 1,
          stall_number: index + 1,
          seller_name: 'Ledig',
          description: '',
          status: 'ledig',
        }));

  const availableCount = stalls.filter(
    (stall) => normalizeStatus(stall.status) === 'ledig'
  ).length;

  return (
    <section id="market" style={sectionStyle}>
      <h2 style={headingStyle}>Salgsboder og standplasser</h2>

      <p style={textStyle}>
        Festivalen har 22 salgsplasser og 4 standplasser. Informasjon om
        deltakere og ledige plasser oppdateres fortløpende.
      </p>

      <p style={availableStyle}>
        Ledige salgsboder akkurat nå: <strong>{availableCount}</strong>
      </p>

      {error && (
        <p style={errorStyle}>
          Kunne ikke hente salgsboder fra databasen. Viser standardoversikt.
        </p>
      )}

      <div style={infoGridStyle}>
        <InfoCard title="Påmeldingsfrist" text="9. august kl. 21.00" />
        <InfoCard title="Kontakt" text="Nina Johnsen • 97 19 99 37" />
        <InfoCard title="Plass 1–11" text="Kan ha ett eller to bord." />
        <InfoCard title="Plass 12–22" text="Passer for klesstativer." />
      </div>

      <div style={boxStyle}>
        <h3 style={subHeadingStyle}>Hva kan selges?</h3>
        <p style={paragraphStyle}>
          Klær til voksne og barn, leker, barnebøker, smykker, kunsthåndverk,
          strikk, søm og annet hjemmelaget håndverk.
        </p>

        <h3 style={subHeadingStyle}>Viktig å vite</h3>
        <p style={paragraphStyle}>
          Alt som selges må være i god stand. Varer som ikke blir solgt, og
          avfall fra egen salgsplass, må tas med hjem etter festivalen.
        </p>
      </div>

      <details style={dropdownStyle}>
        <summary style={summaryStyle}>Se salgsboder ({stalls.length})</summary>

        <div style={gridStyle}>
          {stalls.map((stall) => {
            const cleanStatus = normalizeStatus(stall.status);
            const isAvailable = cleanStatus === 'ledig';

            return (
              <div key={stall.id} style={cardStyle}>
                <strong style={{ color: '#31583a' }}>
                  Bod {stall.stall_number}
                </strong>

                <strong>
                  {isAvailable ? 'Ledig' : stall.seller_name || 'Opptatt'}
                </strong>

                {!isAvailable && stall.description && (
                  <span>{stall.description}</span>
                )}

                <span style={getStatusStyle(cleanStatus)}>
                  {getStatusLabel(cleanStatus)}
                </span>
              </div>
            );
          })}
        </div>
      </details>
    </section>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={infoCardStyle}>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function normalizeStatus(status: string | null) {
  return status?.toLowerCase().trim() || 'ledig';
}

function getStatusLabel(status: string) {
  if (status === 'opptatt') return '🔴 Opptatt';
  if (status === 'reservert') return '🟡 Reservert';
  return '🟢 Ledig';
}

function getStatusStyle(status: string): React.CSSProperties {
  if (status === 'opptatt') {
    return {
      marginTop: 6,
      color: '#8a1c1c',
      fontWeight: 700,
      background: '#ffebee',
      padding: '4px 10px',
      borderRadius: 999,
      width: 'fit-content',
    };
  }

  if (status === 'reservert') {
    return {
      marginTop: 6,
      color: '#7a5b00',
      fontWeight: 700,
      background: '#fff8e1',
      padding: '4px 10px',
      borderRadius: 999,
      width: 'fit-content',
    };
  }

  return {
    marginTop: 6,
    color: '#1b5e20',
    fontWeight: 700,
    background: '#e8f5e9',
    padding: '4px 10px',
    borderRadius: 999,
    width: 'fit-content',
  };
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
  maxWidth: '800px',
  margin: '0 auto 16px',
  lineHeight: 1.7,
} as const;

const availableStyle = {
  textAlign: 'center',
  color: '#31583a',
  fontSize: '18px',
  marginBottom: '34px',
} as const;

const errorStyle = {
  textAlign: 'center',
  color: '#9b1c1c',
  fontWeight: 700,
} as const;

const infoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '14px',
  marginBottom: '24px',
} as const;

const infoCardStyle = {
  background: '#f7f8f3',
  border: '1px solid #dfe8d8',
  borderRadius: '18px',
  padding: '18px',
  display: 'grid',
  gap: '6px',
  color: '#31583a',
} as const;

const boxStyle = {
  background: '#fff',
  border: '1px solid #dfe8d8',
  borderRadius: '22px',
  padding: '24px',
  marginBottom: '24px',
} as const;

const subHeadingStyle = {
  color: '#31583a',
  margin: '0 0 8px',
} as const;

const paragraphStyle = {
  margin: '0 0 20px',
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