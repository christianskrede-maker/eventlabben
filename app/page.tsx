export default function Page() {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, #7c3aed 0%, transparent 35%),
            radial-gradient(circle at top right, #06b6d4 0%, transparent 35%),
            radial-gradient(circle at bottom left, #ec4899 0%, transparent 35%),
            linear-gradient(135deg, #111827 0%, #0f172a 100%);
          color: white;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .hero {
          text-align: center;
          padding: 90px 20px;
        }

        .badge {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          font-weight: 700;
          margin-bottom: 24px;
        }

        h1 {
          font-size: 82px;
          line-height: 0.95;
          margin: 0 0 26px;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .lead {
          max-width: 860px;
          margin: 0 auto;
          font-size: 24px;
          line-height: 1.7;
          color: rgba(255,255,255,0.82);
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 24px;
          margin-top: 70px;
        }

        .card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 28px;
          padding: 34px;
          backdrop-filter: blur(18px);
        }

        .card h2 {
          margin-top: 0;
          font-size: 30px;
        }

        .card p {
          color: rgba(255,255,255,0.78);
          line-height: 1.7;
          font-size: 17px;
        }

        .footer {
          margin-top: 90px;
          text-align: center;
          color: rgba(255,255,255,0.5);
          font-size: 15px;
        }

        @media (max-width: 900px) {
          h1 {
            font-size: 56px;
          }

          .lead {
            font-size: 20px;
          }

          .cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 40px 18px 70px;
          }

          h1 {
            font-size: 42px;
          }

          .lead {
            font-size: 18px;
          }

          .hero {
            padding: 50px 10px;
          }
        }
      `}</style>

      <div className="container">
        <section className="hero">
          <div className="badge">
            EVENTLABBEN.COM
          </div>

          <h1>
            Digitale arrangementer
            <br />
            med NFC
          </h1>

          <p className="lead">
            EventLabben lager moderne arrangementssider for bedrifter,
            kommuner, organisasjoner og politiske partier.
            <br /><br />
            Vi kombinerer NFC-brikker, 3D-printede produkter og digitale
            eventopplevelser i én komplett løsning.
          </p>
        </section>

        <section className="cards">
          <div className="card">
            <h2>NFC & adgang</h2>

            <p>
              NFC-brikker på nøkkelringer, navneskilt eller deltakerkort
              åpner arrangementssider automatisk med mobiltelefonen.
            </p>
          </div>

          <div className="card">
            <h2>Eventside</h2>

            <p>
              Hvert arrangement får sin egen side med program,
              praktisk informasjon, kart, linker, bonger og oppdateringer.
            </p>
          </div>

          <div className="card">
            <h2>3D-print</h2>

            <p>
              Vi designer og printer skilt, navneskilt,
              bordkort, nøkkelringer og spesialprodukter til arrangementet.
            </p>
          </div>
        </section>

        <div className="footer">
          EventLabben © 2026
        </div>
      </div>
    </main>
  );
}
