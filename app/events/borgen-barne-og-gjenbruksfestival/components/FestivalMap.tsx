export default function FestivalMap() {
  return (
    <section id="program"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px 80px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '34px',
          color: '#31583a',
          marginBottom: '20px',
        }}
      >
        Kart over festivalområdet
      </h2>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 30px',
          lineHeight: 1.7,
        }}
      >
        Her finner du oversikt over salgsboder, stands, scene,
        foodtruck, toaletter, grillområde og aktiviteter på Elgplassen.
      </p>

      <img
        src="/events/borgen-barne-og-gjenbruksfestival/kart-festivalomradet.png"
        alt="Kart over festivalområdet"
        style={{
          width: '100%',
          borderRadius: '24px',
          border: '1px solid #dfe8d8',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginTop: '24px',
        }}
      >
        <InfoCard title="24 Salgsboder" />
        <InfoCard title="4 Standplasser" />
        <InfoCard title="Foodtruck" />
        <InfoCard title="Scene & Musikk" />
        <InfoCard title="Toaletter" />
        <InfoCard title="Barneaktiviteter" />
      </div>
    </section>
  );
}

function InfoCard({ title }: { title: string }) {
  return (
    <div
      style={{
        background: '#f7f8f3',
        border: '1px solid #dfe8d8',
        borderRadius: '16px',
        padding: '16px',
        textAlign: 'center',
        fontWeight: 700,
        color: '#31583a',
      }}
    >
      {title}
    </div>
  );
}
