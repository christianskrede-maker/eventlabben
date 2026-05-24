'use client';

export default function HMSPage() {
  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #000;
          padding: 24px 16px 40px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .top {
          width: 100%;
          text-align: center;
          margin-bottom: 28px;
        }

        .logo {
          width: 80%;
          max-width: 320px;
          height: auto;
        }

        .poster {
          width: 100%;
          max-width: 900px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 0 35px rgba(0,0,0,0.5);
        }

        .poster img {
          width: 100%;
          display: block;
        }

        @media (max-width: 800px) {
          .page {
            padding: 18px 10px 28px;
          }

          .logo {
            width: 88%;
          }

          .poster {
            border-radius: 18px;
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

      <div className="poster">
        <img
          src="/events/betonmast-sommerfest/hms-plakat.jpg"
          alt="HMS-plakat"
        />
      </div>
    </main>
  );
}
