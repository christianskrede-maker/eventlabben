export default function Contact() {
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Vil du bidra eller vite mer?</h2>
      <p style={textStyle}>
        Meld interesse for salgsplass, bli frivillig eller ta kontakt hvis du
        har spørsmål om festivalen.
      </p>

      <div style={buttonGridStyle}>
        <button style={buttonStyle}>Meld interesse for salgsplass</button>
        <button style={buttonStyle}>Bli frivillig</button>
        <button style={buttonStyle}>Ta kontakt ved spørsmål</button>
      </div>
    </section>
  );
}

const sectionStyle = { maxWidth: '1000px', margin: '0 auto', padding: '80px 20px 120px', textAlign: 'center' } as const;
const headingStyle = { fontSize: '34px', color: '#31583a' } as const;
const textStyle = { maxWidth: '760px', margin: '0 auto 30px', lineHeight: 1.7 } as const;
const buttonGridStyle = { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' } as const;
const buttonStyle = { background: '#31583a', color: '#fff', border: 'none', borderRadius: '999px', padding: '14px 24px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' } as const;
