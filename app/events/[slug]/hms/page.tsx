export default function HMSPage() {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #003b2f, #061f1a, #000);
          color: white;
          font-family: Arial, sans-serif;
          padding: 28px;
        }

        .top {
          text-align: center;
          margin-bottom: 36px;
        }

        .logo {
          max-width: 320px;
          width: 80%;
        }

        h1 {
          color: #7cffb2;
          text-align: center;
          font-size: 56px;
          text-transform: uppercase;
        }

        .poster {
          display: block;
          width: 100%;
          max-width: 900px;
          margin: 32px auto;
          border-radius: 24px;
          border: 2px solid rgba(124,255,178,0.35);
        }

        @media (max-width: 800px) {
          h1 {
            font-size: 38px;
          }

          .page {
            padding: 18px;
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

      <h1>HMS</h1>

      <img
        src="/events/betonmast-sommerfest/hms-plakat.jpg"
        alt="HMS-plakat"
        className="poster"
      />
    </main>
  );
}
