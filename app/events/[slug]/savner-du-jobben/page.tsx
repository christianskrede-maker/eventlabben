'use client';

export default function SavnerJobbenPage() {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #000;
          padding: 24px 16px 40px;
          font-family: Arial, sans-serif;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .top {
          width: 100%;
          text-align: center;
          margin-bottom: 30px;
        }

        .logo {
          width: 80%;
          max-width: 320px;
          height: auto;
        }

        h1 {
          color: #ffd500;
          font-size: 58px;
          text-align: center;
          margin: 10px 0 16px;
          text-transform: uppercase;
        }

        .sub {
          text-align: center;
          color: rgba(255,255,255,0.8);
          font-size: 22px;
          max-width: 700px;
          line-height: 1.6;
          margin-bottom: 42px;
        }

        .card {
          width: 100%;
          max-width: 1000px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,213,0,0.18);
          border-radius: 26px;
          padding: 40px 24px;
          text-align: center;
        }

        .button {
          display: inline-block;
          padding: 22px 34px;
          border-radius: 18px;
          background: #ffd500;
          color: black;
          text-decoration: none;
          font-weight: 900;
          font-size: 22px;
          transition: transform 0.2s ease;
        }

        .button:hover {
          transform: scale(1.04);
        }

        @media (max-width: 800px) {
          .page {
            padding: 18px 12px 28px;
          }

          .logo {
            width: 88%;
          }

          h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .sub {
            font-size: 18px;
            margin-bottom: 28px;
          }

          .card {
            padding: 28px 18px;
            border-radius: 20px;
          }

          .button {
            width: 100%;
            box-sizing: border-box;
            font-size: 20px;
            padding: 20px;
          }
        }
      `}</style>

      <div className="top">
        <a href="/events/betonmast-sommerfest">
          <img
            src="/events/betonmast-sommerfest/betonmast-logo.jpg"
            alt="Betonmast"
            className="logo"
          />
        </a>
      </div>

      <h1>Savner du jobben?</h1>

      <p className="sub">
        Følg byggeplassen minutt for minutt her.
      </p>

      <div className="card">
        <a
          href="https://tidex.riff.works/byggekameras"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Åpne byggekameraene
        </a>
      </div>
    </main>
  );
}
