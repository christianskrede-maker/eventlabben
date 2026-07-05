export default function FestivalMap() {
  return (
    <section
      id="kart"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px 80px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '36px',
          color: '#31583a',
          marginBottom: '20px',
        }}
      >
        Festivalkart
      </h2>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 30px',
          lineHeight: 1.7,
        }}
      >
        Her finner du oversikt over festivalområdet på Elgplassen. Nytt
        festivalkart publiseres når alle områder er endelig klare.
      </p>

      <img
        src="/events/borgen-barne-og-gjenbruksfestival/kart-festivalomradet.png"
        alt="Festivalkart over Elgplassen"
        style={{
          width: '100%',
          borderRadius: '24px',
          border: '1px solid #dfe8d8',
          display: 'block',
        }}
      />

      <p
        style={{
          textAlign: 'center',
          maxWidth: '760px',
          margin: '20px auto 0',
          fontSize: '15px',
          color: '#555',
          lineHeight: 1.6,
        }}
      >
        Kartet vil vise salgsboder, standplasser, scene, matområde,
        grillplass, toaletter, barneaktiviteter og avfallspunkter.
      </p>
    </section>
  );
}