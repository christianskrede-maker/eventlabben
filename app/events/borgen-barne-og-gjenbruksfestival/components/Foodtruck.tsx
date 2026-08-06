import Image from 'next/image';

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
          maxWidth: '460px',
          margin: '0 auto 50px',
          padding: '14px',
          background: '#ffffff',
          border: '1px solid #dfe8d8',
          borderRadius: '24px',
          boxShadow: '0 12px 35px rgba(49, 88, 58, 0.12)',
        }}
      >
        <Image
          src="/events/borgen-barne-og-gjenbruksfestival/foodtruck-meny.png"
          alt="Meny for Greek & Grill foodtruck"
          width={1024}
          height={1536}
          sizes="(max-width: 600px) 90vw, 460px"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            borderRadius: '14px',
          }}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        <InfoCard
          title="🍔 Greek & Grill"
          text="Greek & Grill kommer med gyros i pita, gyrosboks og drikke. Se menyen og prisene ovenfor."
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