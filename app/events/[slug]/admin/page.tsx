'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [tippingOpen, setTippingOpen] = useState(true);
  const [password, setPassword] = useState('');
const [unlocked, setUnlocked] = useState(false);

function checkPassword(e: React.FormEvent) {
  e.preventDefault();

  if (password === 'zoo') {
    setUnlocked(true);
  }
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'setTippingOpen',
          value,
        }),
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

  if (!unlocked) {
  return (
    <main className="page">
      <style jsx>{`
        .page {
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
          margin-bottom: 18px;
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
          max-width: 900px;
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
        }

        .status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
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

        button:disabled {
          opacity: 0.5;
          cursor: wait;
        }
      `}</style>

      <div className="wrap">
        <h1>Admin Tippekampen</h1>

        <p className="sub">
          Kontroller live tipping under arrangementet.
        </p>

        <div className="card">
          <div
            className={`status ${
              tippingOpen ? 'open' : 'closed'
            }`}
          >
            {tippingOpen
              ? '🟢 Tippingen er ÅPEN'
              : '🔴 Tippingen er STENGT'}
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
      </div>
    </main>
  );
}
