'use client';

export default function SavnerJobbenPage() {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, #3a3200 0%, #000 45%);
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
          margin-bottom: 22px;
        }

        .logo {
          width: 80%;
          max-width: 300px;
          height: auto;
        }

        h1 {
          color: #ffd500;
          font-size: 58px;
          text-align: center;
          margin: 8px 0 12px;
          text-transform: uppercase;
          line-height: 1;
        }

        .sub {
          text-align: center;
          color: rgba(255,255,255,0.82);
          font-size: 21px;
          max-width: 760px;
          line-height: 1.5;
          margin-bottom: 28px;
        }

        .card {
          width: 100%;
          max-width: 1250px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 26px;
          padding: 12px;
          overflow: hidden;
          box-shadow: 0 0 45px rgba(255,213,0,0.08);
        }

        .frame {
          width: 100%;
          height: 78vh;
          border: none;
          border-radius: 18px;
          background: #111;
          display: block;
        }

        .fallback {
          margin-top: 20px;
          text-align: center;
        }

        .button {
          display: inline-block;
          padding: 15px 24px;
          border-radius: 999px;
          background: #ffd500;
          color: black;
          text-decoration: none;
          font-weight: 900;
          font-size: 17px;
        }

        .back {
          display: inline-block;
          margin-top: 18px;
          color: #ffd500;
          text-decoration: none;
          font-weight: bold;
        }

        @media (max-width: 800px) {
          .page {
            padding: 14px 8px 26px;
          }

          .top {
            margin-bottom: 14px;
          }

          .logo {
            width: 72%;
            max-width: 240px;
          }

          h1 {
            font-size: 34px;
            margin: 6px 0 10px;
          }

          .sub {
            font-size: 16px;
            margin-bottom: 18px;
            padding: 0 8px;
          }

          .card {
            padding: 6px;
            border-radius: 18px;
          }

          .frame {
            height: 68vh;
            border-radius: 14px;
          }

          .button {
            width: 100%;
            box-sizing: border-box;
            font-size: 16px;
          }

          .fallback {
            width: 100%;
            margin-top: 14px;
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
        Følg byggeplassene live direkte fra kameraene.
      </p>

      <div className="card">
        <iframe
          src="https://byggekameras.pages.dev"
          className="frame"
          title="Byggekamera"
        />
      </div>

      <div className="fallback">
        <a
          href="https://byggekameras.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Åpne i ny fane
        </a>
      </div>

      <a href="/events/betonmast-sommerfest" className="back">
        ← Tilbake til sommerfesten
      </a>
    </main>
  );
}
