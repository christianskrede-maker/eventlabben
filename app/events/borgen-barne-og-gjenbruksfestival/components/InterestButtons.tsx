'use client';

export default function InterestButtons() {
  function handleClick(type: string) {
    alert(
      `Takk! Her kommer snart skjema for: ${type}.\n\nNeste steg blir å koble dette til Resend.`
    );
  }

  return (
    <div style={buttonGridStyle}>
      <button onClick={() => handleClick('salgsplass')} style={buttonStyle}>
        Meld interesse for salgsplass
      </button>

      <button onClick={() => handleClick('frivillig')} style={buttonStyle}>
        Bli frivillig
      </button>

      <button onClick={() => handleClick('spørsmål')} style={buttonStyle}>
        Ta kontakt ved spørsmål
      </button>
    </div>
  );
}

const buttonGridStyle = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  flexWrap: 'wrap',
} as const;

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
