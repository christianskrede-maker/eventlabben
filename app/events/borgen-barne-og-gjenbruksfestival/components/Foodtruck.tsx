export default function Foodtruck() {
  return (
    <section
      id="foodtruck"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px',
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
        Mat og fasiliteter
      </h2>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 45px',
          lineHeight: 1.7,
        }}
      >
        Under festivalen ønsker vi at alle skal trives. Derfor tilbyr vi både
        matservering, grillmuligheter og gode fasiliteter gjennom hele dagen.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        <InfoCard
          title="🍔 Foodtruck"
          text="Årets foodtruck presenteres nærmere festivalen. Her blir det mat og drikke for hele familien."
        />

        <InfoCard
          title="🔥 Grillområde"
          text="Ta gjerne med egen mat. Vi har felles grillområde og egen halalgrill tilgjengelig."
        />

        <InfoCard
          title="🍦 Gratis is"
          text="Alle barn får gratis is så langt beholdningen rekker."
        />

        <InfoCard
          title="🚻 Toaletter"
          text="Det er toaletter tilgjengelig på festivalområdet gjennom hele arrangementet."
        />
      </div>
    </section>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: '#f7f8f3',
        border: '1px solid #dfe8d8',
        borderRadius: '22px',
        padding: '24px',
      }}
    >
      <h3
        style={{
          color: '#31583a',
          marginTop: 0,
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          lineHeight: 1.7,
        }}
      >
        {text}
      </p>
    </div>
  );
}