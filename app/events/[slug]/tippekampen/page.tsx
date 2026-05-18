'use client';

export default function TippekampenPage() {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(255,213,0,0.18), transparent 30%),
            linear-gradient(135deg, #050505, #111, #000);
          color: white;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 24px 60px;
          text-align: center;
        }

        .eyebrow {
          color: #ffd500;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 900;
          margin-bottom: 16px;
        }

        h1 {
          font-size: 88px;
          line-height: 0.95;
          margin: 0;
          font-weight: 900;
          text-transform: uppercase;
        }

        h1 span {
          color: #ffd500;
        }

        .lead {
          max-width: 760px;
          margin: 32px auto 0;
          font-size: 24px;
          line-height: 1.6;
          color: rgba(255,255,255,0.78);
        }

        .matchCard {
          max-width: 1000px;
          margin: 50px auto 0;
          padding: 34px;
          border-radius: 32px;
          border: 1px solid rgba(255,213,0,0.25);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }

        .matchTeams {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 34px;
          font-size: 54px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .vs {
          color: #ffd500;
        }

        .matchMeta {
          margin-top: 26px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .badge {
          background: #ffd500;
          color: black;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 900;
        }

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .sectionTitle {
          color: #ffd500;
          font-size: 52px;
          margin-bottom: 34px;
          text-transform: uppercase;
          font-weight: 900;
        }

        .prizeCard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 34px;
          overflow: hidden;
        }

        .prizeImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .prizeContent {
          padding: 42px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .prizeLabel {
          color: #ffd500;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .prizeContent h3 {
          font-size: 48px;
          margin: 0 0 20px;
        }

        .prizeContent p {
          color: rgba(255,255,255,0.8);
          line-height: 1.7;
          font-size: 18px;
        }

        .prizeBtn {
          margin-top: 26px;
          display: inline-block;
          background: #ffd500;
          color: black;
          padding: 16px 22px;
          border-radius: 14px;
          font-weight: 900;
          text-decoration: none;
          width: fit-content;
        }

        .rulesGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .ruleCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 24px;
          padding: 24px;
        }

        .ruleCard span {
          display: block;
          color: #ffd500;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .ruleCard strong {
          display: block;
          font-size: 24px;
          margin-bottom: 12px;
        }

        .ruleCard p {
          color: rgba(255,255,255,0.76);
          line-height: 1.5;
        }

        .formGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .field label {
          font-weight: 900;
          text-transform: uppercase;
          font-size: 13px;
          color: #ffd500;
        }

        .field input,
        .field select {
          padding: 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,213,0,0.2);
          background: rgba(255,255,255,0.05);
          color: white;
          font-size: 16px;
        }

        .submitBtn {
          margin-top: 34px;
          background: #ffd500;
          color: black;
          border: none;
          padding: 18px 24px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        .lockedBox {
          margin-top: 28px;
          background: rgba(255,213,0,0.12);
          border: 1px solid rgba(255,213,0,0.3);
          border-radius: 20px;
          padding: 20px;
          text-align: center;
          font-weight: 900;
        }

        @media (max-width: 900px) {
          h1 {
            font-size: 52px;
          }

          .lead {
            font-size: 18px;
          }

          .matchTeams {
            font-size: 34px;
            gap: 16px;
          }

          .prizeCard {
            grid-template-columns: 1fr;
          }

          .prizeContent h3 {
            font-size: 34px;
          }

          .rulesGrid {
            grid-template-columns: 1fr;
          }

          .formGrid {
            grid-template-columns: 1fr;
          }

          .sectionTitle {
            font-size: 36px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="eyebrow">
          Betonmast Sommerfest 2026
        </div>

        <h1>
          TIPPE<span>KAMPEN</span>
        </h1>

        <p className="lead">
          Konkurrer mot kollegaene dine live under Norge–Irak.
          Leaderboard oppdateres gjennom kampen.
        </p>

        <div className="matchCard">
          <div className="matchTeams">
            <span>🇳🇴 Norge</span>
            <span className="vs">VS</span>
            <span>🇮🇶 Irak</span>
          </div>

          <div className="matchMeta">
            <div className="badge">16. juni 2026</div>
            <div className="badge">VM 2026</div>
            <div className="badge">Live leaderboard</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">
          1. PREMIE
        </h2>

        <div className="prizeCard">
          <div className="prizeImage">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
              alt="Farris Bad"
            />
          </div>

          <div className="prizeContent">
            <div className="prizeLabel">
              Farris Bad
            </div>

            <h3>
              Spaopphold for to
            </h3>

            <p>
              Vinneren av Tippekampen får middag, spa og én overnatting
              for to personer på Farris Bad.
            </p>

            <a
              href="https://farrisbad.no"
              target="_blank"
              rel="noreferrer"
              className="prizeBtn"
            >
              Se premien ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">
          Regler
        </h2>

        <div className="rulesGrid">
          <div className="ruleCard">
            <span>1</span>
            <strong>Ett tips</strong>
            <p>
              Du kan kun sende inn ett tips per e-postadresse.
            </p>
          </div>

          <div className="ruleCard">
            <span>2</span>
            <strong>Automatisk låsing</strong>
            <p>
              Tippekampen stenger automatisk ved kampstart.
            </p>
          </div>

          <div className="ruleCard">
            <span>3</span>
            <strong>Live leaderboard</strong>
            <p>
              Resultatlisten oppdateres live gjennom kampen.
            </p>
          </div>

          <div className="ruleCard">
            <span>4</span>
            <strong>Poengsystem</strong>
            <p>
              Riktige hendelser og resultat gir poeng.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">
          Lever ditt tips
        </h2>

        <div className="formGrid">
          <div className="field">
            <label>Navn</label>
            <input placeholder="Ola Nordmann" />
          </div>

          <div className="field">
            <label>E-post</label>
            <input placeholder="navn@betonmast.no" />
          </div>

          <div className="field">
            <label>Sluttresultat</label>
            <input placeholder="2-1" />
          </div>

          <div className="field">
            <label>Pause-resultat</label>
            <input placeholder="1-0" />
          </div>

          <div className="field">
            <label>Første mål</label>
            <select>
              <option>Norge</option>
              <option>Irak</option>
              <option>Ingen mål</option>
            </select>
          </div>

          <div className="field">
            <label>Første corner</label>
            <select>
              <option>Norge</option>
              <option>Irak</option>
            </select>
          </div>

          <div className="field">
            <label>Første gule kort</label>
            <select>
              <option>Norge</option>
              <option>Irak</option>
              <option>Ingen</option>
            </select>
          </div>

          <div className="field">
            <label>VAR-situasjon?</label>
            <select>
              <option>Ja</option>
              <option>Nei</option>
            </select>
          </div>
        </div>

        <button className="submitBtn">
          Send inn tips
        </button>

        <div className="lockedBox">
          Tippekampen låses automatisk ved kampstart.
        </div>
      </section>
    </main>
  );
}
