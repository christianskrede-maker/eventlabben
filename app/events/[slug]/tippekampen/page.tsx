'use client';

import { useEffect, useState } from 'react';

export default function TippekampenPage() {
  const [formData, setFormData] = useState({
    navn: '',
    email: '',
    sluttresultat: '',
    pauseResultat: '',
    vinner: 'Norge',
    maal: '',
    forsteMaal: 'Norge',
    forsteCorner: 'Norge',
    forsteInnkast: 'Norge',
    gultKort: 'Norge',
    forsteBytte: 'Norge',
    straffe: 'Ja',
    var: 'Ja',
    rodtKort: 'Nei',
    allsang: 'Før kampstart',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [leaderboard, setLeaderboard] = useState<
  {
    plass: number;
    navn: string;
    email: string;
    poeng: number;
    status: string;
  }[]
>([]);

async function fetchLeaderboard() {
  try {
    const response = await fetch('/api/tippekampen');
    const result = await response.json();

    if (result.success) {
      setLeaderboard(result.leaderboard || []);
    }
  } catch {
    // gjør ingenting hvis henting feiler
  }
}

useEffect(() => {
  fetchLeaderboard();

  const interval = setInterval(fetchLeaderboard, 10000);

  return () => clearInterval(interval);
}, []);

  function updateField(field: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/tippekampen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Takk! Tipset ditt er registrert.');

        setFormData({
          navn: '',
          email: '',
          sluttresultat: '',
          pauseResultat: '',
          vinner: 'Norge',
          maal: '',
          forsteMaal: 'Norge',
          forsteCorner: 'Norge',
          forsteInnkast: 'Norge',
          gultKort: 'Norge',
          forsteBytte: 'Norge',
          straffe: 'Ja',
          var: 'Ja',
          rodtKort: 'Nei',
          allsang: 'Før kampstart',
        });
      } else {
        setStatus(result.error || 'Noe gikk galt.');
      }
    } catch {
      setStatus('Kunne ikke sende inn tips.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(255,213,0,0.16), transparent 30%),
            linear-gradient(135deg, #050505, #111, #000);
          color: white;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        .top {
          padding: 28px 20px;
          text-align: center;
          border-bottom: 3px solid #ffd500;
          background: rgba(0,0,0,0.92);
        }

        .logo {
          width: 80%;
          max-width: 320px;
          height: auto;
        }

        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 24px 40px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        .eyebrow {
          color: #ffd500;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        h1 {
          font-size: 84px;
          line-height: 0.95;
          margin: 0;
          font-weight: 900;
        }

        h1 span {
          color: #ffd500;
        }

        .lead {
          margin-top: 26px;
          font-size: 22px;
          line-height: 1.7;
          color: rgba(255,255,255,0.82);
        }

        .matchCard,
        .formCard,
        .leaderboardWrap,
        .rulesCard,
        .prizeCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 28px;
          box-shadow: 0 0 45px rgba(255,213,0,0.08);
        }

        .matchCard {
          padding: 28px;
          text-align: center;
        }

        .teams {
          display: grid;
          gap: 12px;
          font-size: 36px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .vs {
          color: #ffd500;
          font-size: 24px;
        }

        .badges {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .badge {
          background: #ffd500;
          color: black;
          padding: 10px 15px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 900;
        }

        .shirtBox {
          margin-top: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .shirtBox img {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(255,213,0,0.22);
        }

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 24px;
        }

        .sectionTitle {
          font-size: 48px;
          color: #ffd500;
          margin-bottom: 26px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .prizeCard {
          display: grid;
          grid-template-columns: 320px 1fr;
          overflow: hidden;
        }

        .farrisLogoBox {
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .farrisLogoBox img {
          width: 100%;
          max-width: 220px;
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
          line-height: 1.7;
          color: rgba(255,255,255,0.82);
        }

        .prizeBtn {
          display: inline-block;
          margin-top: 22px;
          background: #ffd500;
          color: black;
          padding: 14px 18px;
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
          margin-bottom: 10px;
        }

        .rulesCard strong {
          display: block;
          font-size: 22px;
          margin-bottom: 10px;
        }

        .rulesCard p {
          line-height: 1.6;
          color: rgba(255,255,255,0.76);
        }

        .formCard {
          padding: 30px;
        }

        .formIntro {
          color: rgba(255,255,255,0.78);
          line-height: 1.7;
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
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .field input,
        .field select {
          padding: 15px;
          border-radius: 14px;
          border: 1px solid rgba(255,213,0,0.24);
          background: rgba(255,255,255,0.06);
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
          width: 100%;
          margin-top: 28px;
          background: #ffd500;
          color: black;
          border: none;
          padding: 18px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        .submitBtn:disabled {
          opacity: 0.6;
        }

        .statusBox {
          margin-top: 18px;
          background: rgba(255,213,0,0.12);
          border: 1px solid rgba(255,213,0,0.3);
          border-radius: 18px;
          padding: 18px;
          text-align: center;
          font-weight: 900;
        }

        .leaderboardWrap {
          overflow: hidden;
        }

        .leaderboardTop,
        .leaderboardRow {
          display: grid;
          grid-template-columns: 80px 1fr 120px 180px;
          gap: 16px;
          padding: 20px 24px;
          align-items: center;
        }

        .leaderboardTop {
          background: rgba(255,213,0,0.12);
          color: #ffd500;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .leaderboardRow {
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .leaderboardRow.gold {
          background: rgba(255,213,0,0.08);
        }

        .leaderboardInfo {
          margin-top: 18px;
          text-align: center;
          color: rgba(255,255,255,0.7);
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 48px 18px 24px;
            text-align: center;
          }

          h1 {
            font-size: 48px;
          }

          .lead {
            font-size: 18px;
          }

          .section {
            padding: 42px 18px;
          }

          .sectionTitle {
            font-size: 34px;
            text-align: center;
          }

          .shirtBox {
            grid-template-columns: 1fr;
          }

          .prizeCard {
            grid-template-columns: 1fr;
          }

          .rulesGrid {
            grid-template-columns: 1fr;
          }

          .formGrid {
            grid-template-columns: 1fr;
          }

          .leaderboardTop,
          .leaderboardRow {
            grid-template-columns: 50px 1fr 70px;
            gap: 10px;
            padding: 16px;
            font-size: 14px;
          }

          .leaderboardTop div:last-child,
          .leaderboardRow div:last-child {
            display: none;
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
            Tipp Norge–Irak og konkurrer live mot kollegaene dine under kampen.
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
            <img src="/events/betonmast-sommerfest/drakt-front.jpg" />
            <img src="/events/betonmast-sommerfest/drakt-back.jpg" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Lever ditt tips</h2>

        <form className="formCard" onSubmit={handleSubmit}>
          <div className="formGrid">

            <div className="field">
              <label>Navn</label>
              <input
                value={formData.navn}
                onChange={(e) => updateField('navn', e.target.value)}
              />
            </div>

            <div className="field">
              <label>E-post</label>
              <input
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
              />
            </div>

            <div className="field">
              <label>Sluttresultat</label>
              <input
                value={formData.sluttresultat}
                onChange={(e) =>
                  updateField('sluttresultat', e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Pause-resultat</label>
              <input
                value={formData.pauseResultat}
                onChange={(e) =>
                  updateField('pauseResultat', e.target.value)
                }
              />
            </div>

            <div className="field">
              <label>Hvem vinner?</label>
              <select
                value={formData.vinner}
                onChange={(e) => updateField('vinner', e.target.value)}
              >
                <option>Norge</option>
                <option>Irak</option>
                <option>Uavgjort</option>
              </select>
            </div>

            <div className="field">
              <label>Totalt antall mål</label>
              <input
                value={formData.maal}
                onChange={(e) => updateField('maal', e.target.value)}
              />
            </div>

            <div className="field">
              <label>Første mål</label>
              <select
                value={formData.forsteMaal}
                onChange={(e) =>
                  updateField('forsteMaal', e.target.value)
                }
              >
                <option>Norge</option>
                <option>Irak</option>
                <option>Ingen mål</option>
              </select>
            </div>

            <div className="field">
              <label>Første corner</label>
              <select
                value={formData.forsteCorner}
                onChange={(e) =>
                  updateField('forsteCorner', e.target.value)
                }
              >
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Første innkast</label>
              <select
                value={formData.forsteInnkast}
                onChange={(e) =>
                  updateField('forsteInnkast', e.target.value)
                }
              >
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Første gule kort</label>
              <select
                value={formData.gultKort}
                onChange={(e) =>
                  updateField('gultKort', e.target.value)
                }
              >
                <option>Norge</option>
                <option>Irak</option>
                <option>Ingen</option>
              </select>
            </div>

            <div className="field">
              <label>Første bytte</label>
              <select
                value={formData.forsteBytte}
                onChange={(e) =>
                  updateField('forsteBytte', e.target.value)
                }
              >
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Straffe?</label>
              <select
                value={formData.straffe}
                onChange={(e) =>
                  updateField('straffe', e.target.value)
                }
              >
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>VAR-situasjon?</label>
              <select
                value={formData.var}
                onChange={(e) =>
                  updateField('var', e.target.value)
                }
              >
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>Rødt kort?</label>
              <select
                value={formData.rodtKort}
                onChange={(e) =>
                  updateField('rodtKort', e.target.value)
                }
              >
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field full">
              <label>Bonus: første allsang?</label>
              <select
                value={formData.allsang}
                onChange={(e) =>
                  updateField('allsang', e.target.value)
                }
              >
                <option>Før kampstart</option>
                <option>I pausen</option>
                <option>Etter første Norge-mål</option>
                <option>Etter kampen</option>
              </select>
            </div>

          </div>

          <button className="submitBtn" disabled={loading}>
            {loading ? 'Sender...' : 'Send inn tips'}
          </button>

          {status && (
            <div className="statusBox">
              {status}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
