'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [tippingOpen, setTippingOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const [fasit, setFasit] = useState({
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

  function checkPassword(e: React.FormEvent) {
    e.preventDefault();

    if (password === 'zoo') {
      setUnlocked(true);
    }
  }

  function updateFasit(field: string, value: string) {
    setFasit((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  useEffect(() => {
    fetchStatus();
  }, []);

  async function fetchStatus() {
    try {
      const res = await fetch('/api/tippekampen?mode=status');
      const data = await res.json();
      setTippingOpen(data.tippingOpen);
    } catch (err) {
      console.error(err);
    }
  }

  async function updateTipping(value: boolean) {
    setLoading(true);

    try {
      const res = await fetch('/api/tippekampen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'setTippingOpen', value }),
      });

      const data = await res.json();

      if (data.success) {
        setTippingOpen(value);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  async function saveFasit() {
    setLoading(true);

    try {
      await fetch('/api/tippekampen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'saveFasit', fasit }),
      });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  if (!unlocked) {
    return (
      <main className="loginPage">
        <style jsx>{`
          .loginPage {
            min-height: 100vh;
            background: #050505;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
            padding: 20px;
          }

          .box {
            width: 100%;
            max-width: 420px;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,213,0,0.25);
            border-radius: 28px;
            padding: 32px;
            text-align: center;
          }

          h1 {
            color: #ffd500;
          }

          input {
            width: 100%;
            padding: 16px;
            border-radius: 14px;
            border: 1px solid rgba(255,213,0,0.25);
            background: rgba(255,255,255,0.08);
            color: white;
            font-size: 16px;
            margin-bottom: 16px;
          }

          button {
            width: 100%;
            padding: 16px;
            border: none;
            border-radius: 14px;
            background: #ffd500;
            color: black;
            font-weight: 900;
            cursor: pointer;
          }
        `}</style>

        <form className="box" onSubmit={checkPassword}>
          <h1>Admin</h1>

          <input
            type="password"
            placeholder="Skriv passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Logg inn</button>
        </form>
      </main>
    );
  }

  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(255,213,0,0.16), transparent 35%),
            linear-gradient(135deg, #050505, #111, #000);
          color: white;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        .wrap {
          max-width: 1000px;
          margin: 0 auto;
        }

        h1 {
          font-size: 54px;
          color: #ffd500;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .sub {
          color: rgba(255,255,255,0.7);
          margin-bottom: 36px;
          line-height: 1.6;
        }

        .card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.2);
          border-radius: 28px;
          padding: 30px;
          margin-bottom: 28px;
        }

        .status {
          display: inline-flex;
          padding: 14px 18px;
          border-radius: 999px;
          font-weight: 900;
          margin-bottom: 26px;
        }

        .open {
          background: rgba(0,255,120,0.12);
          color: #6dff9c;
        }

        .closed {
          background: rgba(255,80,80,0.12);
          color: #ff8d8d;
        }

        .buttons {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        button {
          border: none;
          border-radius: 16px;
          padding: 18px 24px;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
        }

        .openBtn {
          background: #18c964;
          color: white;
        }

        .closeBtn {
          background: #ff4d4f;
          color: white;
        }

        .saveBtn {
          width: 100%;
          margin-top: 24px;
          background: #ffd500;
          color: black;
        }

        button:disabled {
          opacity: 0.5;
          cursor: wait;
        }

        .fasitGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        label {
          color: #ffd500;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
        }

        input,
        select {
          padding: 15px;
          border-radius: 14px;
          border: 1px solid rgba(255,213,0,0.24);
          background: rgba(255,255,255,0.06);
          color: white;
          font-size: 16px;
        }

        select option {
          color: black;
        }

        .back {
          display: inline-block;
          margin-bottom: 24px;
          color: #ffd500;
          font-weight: 900;
          text-decoration: none;
        }

        @media (max-width: 800px) {
          h1 {
            font-size: 36px;
          }

          .fasitGrid {
            grid-template-columns: 1fr;
          }

          .buttons {
            flex-direction: column;
          }

          button {
            width: 100%;
          }
        }
      `}</style>

      <div className="wrap">
        <a className="back" href="/events/betonmast-sommerfest/tippekampen">
          ← Tilbake til Tippekampen
        </a>

        <h1>Admin Tippekampen</h1>

        <p className="sub">
          Kontroller tipping og fyll inn fasit live under kampen.
        </p>

        <div className="card">
          <div className={`status ${tippingOpen ? 'open' : 'closed'}`}>
            {tippingOpen ? '🟢 Tippingen er ÅPEN' : '🔴 Tippingen er STENGT'}
          </div>

          <div className="buttons">
            <button
              className="openBtn"
              onClick={() => updateTipping(true)}
              disabled={loading}
            >
              Åpne tippingen
            </button>

            <button
              className="closeBtn"
              onClick={() => updateTipping(false)}
              disabled={loading}
            >
              Stopp tippingen
            </button>
          </div>
        </div>

        <div className="card">
          <h2>Live fasit</h2>

          <div className="fasitGrid">
            <div className="field">
              <label>Sluttresultat</label>
              <input value={fasit.sluttresultat} onChange={(e) => updateFasit('sluttresultat', e.target.value)} />
            </div>

            <div className="field">
              <label>Pause-resultat</label>
              <input value={fasit.pauseResultat} onChange={(e) => updateFasit('pauseResultat', e.target.value)} />
            </div>

            <div className="field">
              <label>Hvem vinner?</label>
              <select value={fasit.vinner} onChange={(e) => updateFasit('vinner', e.target.value)}>
                <option>Norge</option>
                <option>Irak</option>
                <option>Uavgjort</option>
              </select>
            </div>

            <div className="field">
              <label>Totalt antall mål</label>
              <input value={fasit.maal} onChange={(e) => updateFasit('maal', e.target.value)} />
            </div>

            <div className="field">
              <label>Første mål</label>
              <select value={fasit.forsteMaal} onChange={(e) => updateFasit('forsteMaal', e.target.value)}>
                <option>Norge</option>
                <option>Irak</option>
                <option>Ingen mål</option>
              </select>
            </div>

            <div className="field">
              <label>Første corner</label>
              <select value={fasit.forsteCorner} onChange={(e) => updateFasit('forsteCorner', e.target.value)}>
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Første innkast</label>
              <select value={fasit.forsteInnkast} onChange={(e) => updateFasit('forsteInnkast', e.target.value)}>
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Første gule kort</label>
              <select value={fasit.gultKort} onChange={(e) => updateFasit('gultKort', e.target.value)}>
                <option>Norge</option>
                <option>Irak</option>
                <option>Ingen</option>
              </select>
            </div>

            <div className="field">
              <label>Første bytte</label>
              <select value={fasit.forsteBytte} onChange={(e) => updateFasit('forsteBytte', e.target.value)}>
                <option>Norge</option>
                <option>Irak</option>
              </select>
            </div>

            <div className="field">
              <label>Straffe?</label>
              <select value={fasit.straffe} onChange={(e) => updateFasit('straffe', e.target.value)}>
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>VAR-situasjon?</label>
              <select value={fasit.var} onChange={(e) => updateFasit('var', e.target.value)}>
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>Rødt kort?</label>
              <select value={fasit.rodtKort} onChange={(e) => updateFasit('rodtKort', e.target.value)}>
                <option>Ja</option>
                <option>Nei</option>
              </select>
            </div>

            <div className="field">
              <label>Første allsang?</label>
              <select value={fasit.allsang} onChange={(e) => updateFasit('allsang', e.target.value)}>
                <option>Før kampstart</option>
                <option>I pausen</option>
                <option>Etter første Norge-mål</option>
                <option>Etter kampen</option>
              </select>
            </div>
          </div>

          <button className="saveBtn" onClick={saveFasit} disabled={loading}>
            Lagre fasit
          </button>
        </div>
      </div>
    </main>
  );
}
