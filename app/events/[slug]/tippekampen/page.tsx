'use client';

export default function TippekampenPage() {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(255, 213, 0, 0.18), transparent 32%),
            linear-gradient(135deg, #050505, #111, #000);
          color: white;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        .top {
          padding: 28px 20px;
          text-align: center;
          border-bottom: 3px solid #ffd500;
          background: rgba(0, 0, 0, 0.92);
        }

        .logo {
          max-width: 320px;
          width: 80%;
          height: auto;
        }

        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 24px 40px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 42px;
          align-items: center;
        }

        .eyebrow {
          color: #ffd500;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 900;
          margin-bottom: 16px;
        }

        h1 {
          font-size: 86px;
          line-height: 0.95;
          margin: 0;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -3px;
        }

        h1 span {
          color: #ffd500;
        }

        .lead {
          margin-top: 28px;
          font-size: 22px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          max-width: 720px;
        }

        .matchCard,
        .prizeCard,
        .rulesCard,
        .formCard {
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 213, 0, 0.25);
          border-radius: 30px;
          box-shadow: 0 0 50px rgba(255, 213, 0, 0.08);
        }

        .matchCard {
          padding: 30px;
          text-align: center;
        }

        .teams {
          display: grid;
          gap: 14px;
          font-size: 38px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .vs {
          color: #ffd500;
          font-size: 26px;
        }

        .badges {
          margin-top: 24px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .badge {
          background: #ffd500;
          color: black;
          padding: 11px 15px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 14px;
        }

        .shirtBox {
          margin-top: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .shirtBox img {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(255, 213, 0, 0.25);
          background: #050505;
        }

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 54px 24px;
        }

        .sectionTitle {
          color: #ffd500;
          font-size: 48px;
          text-transform: uppercase;
          margin: 0 0 28px;
          font-weight: 900;
        }

        .prizeCard {
          display: grid;
          grid-template-columns: 320px 1fr;
          overflow: hidden;
        }

        .farrisLogoBox {
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 42px;
        }

        .farrisLogoBox img {
          max-width: 240px;
          width: 100%;
          height: auto;
        }

        .prizeContent {
          padding: 38px;
        }

        .prizeLabel {
          color: #ffd500;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .prizeContent h3 {
          font-size: 42px;
          margin: 0 0 18px;
        }

        .prizeContent p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          font-size: 18px;
        }

        .prizeBtn {
          display: inline-block;
          margin-top: 22px;
          background: #ffd500;
          color: black;
          padding: 15px 20px;
          border-radius: 14px;
          font-weight: 900;
          text-decoration: none;
        }

        .rulesGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .rulesCard {
          padding: 24px;
        }

        .rulesCard span {
          display: block;
          color: #ffd500;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .rulesCard strong {
          display: block;
          font-size: 22px;
          margin-bottom: 10px;
        }

        .rulesCard p {
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.55;
          margin: 0;
        }

        .formCard {
          padding: 30px;
        }

        .formIntro {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.7;
          font-size: 18px;
          margin-bottom: 28px;
        }

        .formGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .field label {
          color: #ffd500;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 13px;
        }

        .field input,
        .field select {
          padding: 15px;
          border-radius: 14px;
          border: 1px solid rgba(255, 213, 0, 0.24);
          background: rgba(255, 255, 255, 0.06);
          color: white;
          font-size: 16px;
        }

        .field select option {
          color: black;
        }

        .full {
          grid-column: 1 / -1;
        }

        .submitBtn {
          margin-top: 28px;
          background: #ffd500;
          color: black;
          border: none;
          padding: 18px 24px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
          width: 100%;
        }

        .note {
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.6;
          font-size: 15px;
        }

        .tieBox {
          margin-top: 22px;
          background: rgba(255, 213, 0, 0.12);
          border: 1px solid rgba(255, 213, 0, 0.3);
          border-radius: 18px;
          padding: 18px;
          font-weight: 900;
          text-align: center;
        }

        .leaderboardWrap {
          margin-top: 24px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 213, 0, 0.22);
          background: rgba(255, 255, 255, 0.04);
        }

        .leaderboardTop,
        .leaderboardRow {
          display: grid;
          grid-template-columns: 80px 1fr 120px 180px;
          gap: 18px;
          padding: 20px 24px;
          align-items: center;
        }

        .leaderboardTop {
          background: rgba(255, 213, 0, 0.12);
          color: #ffd500;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .leaderboardRow {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 18px;
        }

        .leaderboardRow.gold {
          background: rgba(255, 213, 0, 0.08);
        }

        .leaderboardRow div:first-child {
          font-weight: 900;
          font-size: 24px;
          color: #ffd500;
        }

        .leaderboardInfo {
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .top {
            padding: 22px 16px;
          }

          .logo {
            width: 86%;
            max-width: 300px;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 48px 18px 24px;
            text-align: center;
          }

          h1 {
            font-size: 46px;
            letter-spacing: -1px;
          }

          .lead {
            font-size: 18px;
            margin-left: auto;
            margin-right: auto;
          }

          .teams {
            font-size: 30px;
          }

          .section {
            padding: 42px 18px;
          }

          .sectionTitle {
            font-size: 34px;
            text-align: center;
          }

          .prizeCard {
            grid-template-columns: 1fr;
          }

          .farrisLogoBox {
            padding: 34px;
          }

          .prizeContent {
            padding: 28px;
          }

          .prizeContent h3 {
            font-size: 30px;
          }

          .rulesGrid {
            grid-template-columns: 1fr;
          }

          .formGrid {
            grid-template-columns: 1fr;
          }

          .shirtBox {
            grid-template-columns: 1fr;
          }

          .leaderboardTop,
          .leaderboardRow {
            grid-template-columns: 50px 1fr 70px;
            font-size: 14px;
            gap: 10px;
            padding: 16px;
          }

          .leaderboardTop div:last-child,
          .leaderboardRow div:last-child {
            display: none;
          }

          .leaderboardRow div:first-child {
            font-size: 20px;
          }
        }
      `}</style>

      <header className="top">
        <img
          src="/events/betonmast-sommerfest/betonmast-logo.jpg"
          alt="Betonmast"
          className="logo"
        />
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">Betonmast Sommerfest 2026</div>

          <h1>
            TIPPE<span>KAMPEN</span>
          </h1>

          <p className="lead">
            Tipp på Norge–Irak og konkurrer mot kollegaene dine live under
            kampen. Førstepremien er middag, spa og overnatting for to.
          </p>
        </div>

        <div className="matchCard">
          <div className="teams">
            <span>🇳🇴 Norge</span>
            <span className="vs">VS</span>
            <span>🇮🇶 Irak</span>
          </div>

          <div className="badges">
            <div className="badge">VM 2026</div>
            <div className="badge">Live leaderboard</div>
            <div className="badge">Én innsending per e-post</div>
          </div>

          <div className="shirtBox">
            <img
              src="/events/betonmast-sommerfest/drakt-front.jpg"
              alt="1998-drakt"
            />
            <img
              src="/events/betonmast-sommerfest/drakt-back.jpg"
              alt="Betonmast-drakt"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">1. premie</h2>

        <div className="prizeCard">
          <div className="farrisLogoBox">
            <img
              src="/events/betonmast-sommerfest/farris-logo.png"
              alt="Farris Bad"
            />
          </div>

          <div className="prizeContent">
            <div className="prizeLabel">Farris Bad</div>

            <h3>Middag, spa og overnatting for to</h3>

            <p>
              Vinneren av Tippekampen får middag, spa og én overnatting for to
              personer på Farris Bad.
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
        <h2 className="sectionTitle">Regler</h2>

        <div className="rulesGrid">
          <div className="rulesCard">
            <span>1</span>
            <strong>Ett tips</strong>
            <p>Du kan kun sende inn ett tips per e-postadresse.</p>
          </div>

          <div className="rulesCard">
            <span>2</span>
            <strong>Låses ved kampstart</strong>
            <p>Alle tips må være sendt inn før kampen starter.</p>
          </div>

          <div className="rulesCard">
            <span>3</span>
            <strong>Live leaderboard</strong>
            <p>Poenglisten kan oppdateres live under kampen.</p>
          </div>

          <div className="rulesCard">
            <span>4</span>
            <strong>Ved uavgjort</strong>
            <p>Ved poenglikhet på toppen trekkes vinneren blant de likt plasserte.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Lever ditt tips</h2>

        <div className="formCard">
          <p className="formIntro">
            Spørsmålene under gir nok spredning til å kåre en vinner blant mange
            deltakere, men er fortsatt enkle å kontrollere etter kampen.
          </p>

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
              <label>Hvem vinner?</label>
              <select>
                <option>Norge</option>
                <option>Irak</option>
                <option>Uavgjort</option>
              </select>
            </div>

            <div className="field">
              <label>Totalt antall mål</label>
              <input placeholder="3" />
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
              <label>Første innkast</label>
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
              <label>Første bytte</label>
              <select>
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Blir det straffe?</label>
              <select>
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>Blir det VAR-situasjon?</label>
              <select>
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>Rødt kort?</label>
              <select>
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field full">
              <label>Bonus: Første Betonmast-allsang?</label>
              <select>
                <option>Før kampstart</option>
                <option>I pausen</option>
                <option>Etter første Norge-mål</option>
                <option>Etter kampen</option>
              </select>
            </div>
          </div>

          <button className="submitBtn">Send inn tips</button>

          <div className="tieBox">
            Ved poenglikhet på toppen trekkes vinneren blant de likt plasserte.
          </div>

          <p className="note">
            Neste steg blir å koble skjemaet til Google Sheets og lage live
            leaderboard.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">LIVE LEADERBOARD</h2>

        <div className="leaderboardWrap">
          <div className="leaderboardTop">
            <div>#</div>
            <div>Navn</div>
            <div>Poeng</div>
            <div>Status</div>
          </div>

          <div className="leaderboardRow gold">
            <div>1</div>
            <div>Martin H.</div>
            <div>12</div>
            <div>🔥 Leder</div>
          </div>

          <div className="leaderboardRow">
            <div>2</div>
            <div>Kristine L.</div>
            <div>11</div>
            <div>+1 riktig</div>
          </div>

          <div className="leaderboardRow">
            <div>3</div>
            <div>Henrik S.</div>
            <div>10</div>
            <div>Henger med</div>
          </div>

          <div className="leaderboardRow">
            <div>4</div>
            <div>Camilla R.</div>
            <div>9</div>
            <div>VAR reddet</div>
          </div>

          <div className="leaderboardRow">
            <div>5</div>
            <div>Thomas B.</div>
            <div>8</div>
            <div>Trenger mål</div>
          </div>
        </div>

        <div className="leaderboardInfo">
          Leaderboard oppdateres live under kampen av Betonmast-admin.
        </div>
      </section>
    </main>
  );
}
