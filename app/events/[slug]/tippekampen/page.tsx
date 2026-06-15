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
    rodtKort: 'Nei',
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
    } catch {}
  }

  useEffect(() => {
    fetchLeaderboard();

    const interval = setInterval(fetchLeaderboard, 5000);

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
        headers: { 'Content-Type': 'application/json' },
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
          rodtKort: 'Nei',
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
          letter-spacing: -2px;
        }

        h1 span {
          color: #ffd500;
        }

        .lead {
          margin-top: 26px;
          font-size: 22px;
          line-height: 1.7;
          color: rgba(255,255,255,0.82);
          max-width: 680px;
        }

        .matchCard,
        .formCard,
        .leaderboardWrap,
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
          background: #050505;
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
          font-size: 18px;
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

        .formCard {
          padding: 30px;
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
          min-width: 0;
        }

        .field label {
          color: #ffd500;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .field input,
        .field select {
          width: 100%;
          box-sizing: border-box;
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
          cursor: wait;
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

        .adminLink {
          margin-top: 40px;
          padding-bottom: 30px;
          text-align: center;
          opacity: 0.28;
          font-size: 12px;
        }

        .adminLink a {
          color: white;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .top {
            padding: 22px 16px;
          }

          .logo {
            width: 86%;
            max-width: 280px;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 46px 18px 26px;
            text-align: center;
            gap: 30px;
          }

          .eyebrow {
            font-size: 13px;
            letter-spacing: 1px;
          }

          h1 {
            font-size: 46px;
            letter-spacing: -1px;
            line-height: 1;
          }

          .lead {
            font-size: 18px;
            margin-left: auto;
            margin-right: auto;
          }

          .matchCard {
            padding: 20px;
            border-radius: 22px;
          }

          .teams {
            font-size: 28px;
          }

          .vs {
            font-size: 20px;
          }

          .shirtBox {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 38px 18px;
          }

          .sectionTitle {
            font-size: 34px;
            text-align: center;
          }

          .prizeCard {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .farrisLogoBox {
            padding: 30px;
          }

          .farrisLogoBox img {
            max-width: 190px;
          }

          .prizeContent {
            padding: 26px;
            text-align: center;
          }

          .prizeContent h3 {
            font-size: 28px;
          }

          .prizeContent p {
            font-size: 16px;
          }

          .formCard {
            padding: 20px;
            border-radius: 22px;
          }

          .formGrid {
            grid-template-columns: 1fr;
          }

          .leaderboardTop,
          .leaderboardRow {
            grid-template-columns: 48px 1fr 64px;
            gap: 10px;
            padding: 15px 14px;
            font-size: 14px;
          }

          .leaderboardTop div:last-child,
          .leaderboardRow div:last-child {
            display: none;
          }

          .leaderboardWrap {
            border-radius: 22px;
          }
        }
      `}</style>

      <header className="top">
        <a href="/events/betonmast-sommerfest">
          <img
            src="/events/betonmast-sommerfest/betonmast-logo.jpg"
            alt="Betonmast"
            className="logo"
          />
        </a>
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">Betonmast Sommerfest 2026</div>

          <h1>
            TIPPE<span>KAMPEN</span>
          </h1>

          <p className="lead">
            Tipp før kampen Norge–Irak og konkurrer live mot kollegaene dine
            under kampen.
          </p>
        </div>

        <div className="matchCard">
          <div className="teams">
            <span>🇳🇴 Norge</span>
            <span className="vs">VS</span>
            <span>🇮🇶 Irak</span>
          </div>

          <div className="badges">
            <div className="badge">Én innsending per e-post</div>
          </div>

          <div className="shirtBox">
            <img
              src="/events/betonmast-sommerfest/drakt-front.jpg"
              alt="Fotballdrakt front"
            />
            <img
              src="/events/betonmast-sommerfest/drakt-back.jpg"
              alt="Fotballdrakt bakside"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">1. premie</h2>

        <div
          style={{
            marginBottom: '32px',
            borderRadius: '22px',
            overflow: 'hidden',
            border: '1px solid rgba(255,213,0,0.22)',
            background: 'rgba(255,255,255,0.05)',
            boxShadow: '0 0 45px rgba(255,213,0,0.08)',
          }}
        >
          <iframe
            width="100%"
            height="320"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/christianskrede/betonmast-slapper-av-2&color=%23ffd500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
          />
        </div>

        <div className="prizeCard">
          <div className="farrisLogoBox">
            <img
              src="/events/betonmast-sommerfest/farris-logo.png"
              alt="Farris Bad"
            />
          </div>

          <div className="prizeContent">
            <div className="prizeLabel">Skattefri premie</div>

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
                onChange={(e) => updateField('sluttresultat', e.target.value)}
              />
            </div>

            <div className="field">
              <label>Pause-resultat</label>
              <input
                value={formData.pauseResultat}
                onChange={(e) => updateField('pauseResultat', e.target.value)}
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
                onChange={(e) => updateField('forsteMaal', e.target.value)}
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
                onChange={(e) => updateField('forsteCorner', e.target.value)}
              >
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Første innkast</label>
              <select
                value={formData.forsteInnkast}
                onChange={(e) => updateField('forsteInnkast', e.target.value)}
              >
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Første gule kort</label>
              <select
                value={formData.gultKort}
                onChange={(e) => updateField('gultKort', e.target.value)}
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
                onChange={(e) => updateField('forsteBytte', e.target.value)}
              >
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Straffe?</label>
              <select
                value={formData.straffe}
                onChange={(e) => updateField('straffe', e.target.value)}
              >
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>Rødt kort?</label>
              <select
                value={formData.rodtKort}
                onChange={(e) => updateField('rodtKort', e.target.value)}
              >
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>
          </div>

          <button className="submitBtn" disabled={loading}>
            {loading ? 'Sender...' : 'Send inn tips'}
          </button>

          {status && <div className="statusBox">{status}</div>}
        </form>
      </section>

      <section className="section">
        <h2 className="sectionTitle">LIVE LEADERBOARD(loddtrekning hvis likt resultat)</h2>

        <div className="leaderboardWrap">
          <div className="leaderboardTop">
            <div>#</div>
            <div>Navn</div>
            <div>Poeng</div>
            <div>Status</div>
          </div>

          {leaderboard.map((player, index) => (
            <div
              key={player.email}
              className={`leaderboardRow ${index === 0 ? 'gold' : ''}`}
            >
              <div>{player.plass}</div>
              <div>{player.navn}</div>
              <div>{player.poeng}</div>
              <div>{player.status}</div>
            </div>
          ))}

          {leaderboard.length === 0 && (
            <div className="leaderboardRow">
              <div>-</div>
              <div>Ingen tips registrert ennå</div>
              <div>0</div>
              <div>Venter</div>
            </div>
          )}
        </div>

        <div className="leaderboardInfo">
          Leaderboard oppdateres live under kampen.
        </div>
      </section>

      <div className="adminLink">
        <a href="/events/betonmast-sommerfest/admin">Admin</a>
      </div>
    </main>
  );
}
