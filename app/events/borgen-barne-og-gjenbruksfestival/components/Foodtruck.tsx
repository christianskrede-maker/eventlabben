export default function Foodtruck() {
  return (
    <section id="program"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px',
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
        Foodtruck
      </h2>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 30px',
          lineHeight: 1.7,
        }}
      >
        Ta en pause mellom aktivitetene og nyt god mat på festivalområdet.
        Presentasjon av årets foodtruck kommer snart.
      </p>

      <img
        src="/events/borgen-barne-og-gjenbruksfestival/foodtruck.png"
        alt="Foodtruck på festivalen"
        style={{
  width: '100%',
  maxWidth: '760px',
  display: 'block',
  margin: '0 auto 30px',
  borderRadius: '24px',
}}
      />

      <div
        style={{
          background: '#f7f8f3',
          border: '1px solid #dfe8d8',
          borderRadius: '20px',
          padding: '24px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h3
          style={{
            color: '#31583a',
            marginTop: 0,
          }}
        >
          Informasjon kommer
        </h3>

        <p>
          Her legger vi inn navn, meny, åpningstider og informasjon om
          foodtrucken når dette er klart.
        </p>
      </div>
    </section>
  );
}
