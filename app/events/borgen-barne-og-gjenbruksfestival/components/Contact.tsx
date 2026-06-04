import InterestButtons from './InterestButtons';

export default function Contact() {
  return (
    <section id="program" style={sectionStyle}>
      <h2 style={headingStyle}>Vil du bidra eller vite mer?</h2>

      <p style={textStyle}>
        Meld interesse for salgsplass, bli frivillig eller ta kontakt hvis du
        har spørsmål om festivalen.
      </p>

      <InterestButtons />
    </section>
  );
}

const sectionStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '80px 20px 120px',
  textAlign: 'center',
} as const;

const headingStyle = {
  fontSize: '34px',
  color: '#31583a',
} as const;

const textStyle = {
  maxWidth: '760px',
  margin: '0 auto 30px',
  lineHeight: 1.7,
} as const;
