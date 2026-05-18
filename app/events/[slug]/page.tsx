'use client';

import { useEffect, useState } from 'react';

export default function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const [shirtIndex, setShirtIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShirtIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  if (params.slug !== 'betonmast-sommerfest') {
    return <div>Fant ikke arrangementet</div>;
  }

  const shirts = [
    '/events/betonmast-sommerfest/drakt-front.jpg',
    '/events/betonmast-sommerfest/drakt-back.jpg',
  ];

  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at top right, #3a3200 0%, #000 45%);
          color: white;
          font-family: Arial, sans-serif;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 40px;
          background: rgba(0, 0, 0, 0.95);
          border-bottom: 3px solid #ffd500;
        }

        .logo {
          height: 36px;
        }
        .musicBannerWrap {
  margin-top: 56px;
  display: flex;
  justify-content: center;
}

.musicBanner {
  width: 100%;
  max-width: 900px;
  border-radius: 28px;
  border: 1px solid rgba(255,213,0,0.3);
  box-shadow: 0 0 45px rgba(255,213,0,0.12);
}

        .menu {
          display: flex;
          gap: 24px;
        }

        .menu a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 14px;
          text-transform: uppercase;
        }

        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .eyebrow {
          color: #ffd500;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .title {
          font-size: 82px;
          line-height: 0.95;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .title span {
          color: #ffd500;
        }

        .text {
          font-size: 24px;
          line-height: 1.6;
          color: #ddd;
          max-width: 560px;
        }

        .badges {
          display: flex;
          gap: 12px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .badge {
          background: #ffd500;
          color: black;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: bold;
        }

        .visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .shirtCard {
          width: 100%;
          max-width: 500px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,213,0,0.25);
          border-radius: 32px;
          padding: 24px;
          backdrop-filter: blur(8px);
          box-shadow: 0 0 50px rgba(255,213,0,0.15);
        }

        .shirtImage {
          width: 100%;
          border-radius: 20px;
          transition: opacity 0.5s ease;
        }

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px 100px;
        }

        .sectionTitle {
          font-size: 56px;
          color: #ffd500;
          margin-bottom: 40px;
          font-weight: 900;
        }

        .programList {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .programItem {
          display: flex;
          gap: 32px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.2);
          padding: 24px;
          border-radius: 22px;
          font-size: 22px;
        }

        .time {
          color: #ffd500;
          font-weight: bold;
          min-width: 100px;
        }

        .spotifyGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .spotifyCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.2);
          padding: 28px;
          border-radius: 24px;
        }

        .spotifyCard h3 {
          color: #ffd500;
          margin-bottom: 12px;
        }

        .spotifyBtn {
          display: inline-block;
          margin-top: 18px;
          background: #ffd500;
          color: black;
          padding: 12px 18px;
          border-radius: 14px;
          font-weight: bold;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 58px;
          }

          .menu {
            gap: 14px;
            font-size: 12px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          .factsSection {
  margin-top: 80px;
  padding-top: 56px;
  border-top: 1px solid rgba(255,213,0,0.25);
}

.factsSection h2 {
  color: #ffd500;
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 12px;
}

.factsIntro {
  color: #ddd;
  font-size: 20px;
  margin-bottom: 32px;
}

.factsGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.factCard {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,213,0,0.22);
  border-radius: 22px;
  padding: 24px;
}

.factCard span {
  display: block;
  color: #ffd500;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 13px;
  margin-bottom: 12px;
}

.factCard strong {
  display: block;
  font-size: 28px;
  margin-bottom: 10px;
}

.factCard p {
  color: #ccc;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .factsGrid {
    grid-template-columns: 1fr;
  }

  .factsSection h2 {
    font-size: 36px;
  }
}
        }
      `}</style>

      <nav className="nav">
        <img
          src="/events/betonmast-sommerfest/betonmast-logo.jpg"
          alt="Betonmast"
          className="logo"
        />

        <div className="menu">
          <a href="#program">Program</a>
          <a href="#musikk">Musikk</a>
          <a href="/events/betonmast-sommerfest/tippekampen">
            Tippekampen
          </a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow">BETONMAST BUSKERUD-VESTFOLD</div>

          <h1 className="title">
            SOMMERFEST <span>2026</span>
          </h1>

          <p className="text">
            Én gjeng. Én kultur. Fotball-VM, konkurranser, musikk og
            sommerfest med ekte Betonmast-stemning.
          </p>

          <div className="badges">
            <div className="badge">18. juni 2026</div>
            <div className="badge">Oslo</div>
            <div className="badge">Dresscode: fotballdrakt</div>
          </div>
        </div>

        <div className="visual">
          <div className="shirtCard">
            <img
              key={shirtIndex}
              src={shirts[shirtIndex]}
              className="shirtImage"
            />
          </div>
        </div>
      </section>

      <section className="section" id="program">
        <h2 className="sectionTitle">PROGRAM</h2>

        <div className="programList">
          <div className="programItem">
            <div className="time">15:00</div>
            <div>Dørene åpner</div>
          </div>

          <div className="programItem">
            <div className="time">16:00</div>
            <div>Grillbuffet og mingling</div>
          </div>

          <div className="programItem">
            <div className="time">17:30</div>
            <div>Quiz og konkurranser</div>
          </div>

          <div className="programItem">
            <div className="time">18:30</div>
            <div>Kampvisning og tippekamp</div>
          </div>

          <div className="programItem">
            <div className="time">21:00</div>
            <div>DJ, musikk og sommerfest</div>
          </div>
        </div>
      </section>

      <section className="section" id="musikk">
  <h2 className="sectionTitle">MUSIKK</h2>

        <div className="spotifyGrid">
          <div className="spotifyCard">
            <h3>BUSS FOR TOG 2025</h3>
            <p>Den første låta — klar for allsang.</p>

            <a
  href="https://open.spotify.com/track/45H8lXkftq2qzGA1bQbV7T"
  target="_blank"
  rel="noreferrer"
  className="spotifyBtn"
>
  Hør på Spotify ↗
</a>
          </div>

          <div className="spotifyCard">
            <h3>2026-LÅTA</h3>
            <p>Ikke klar ennå — kommer når den er publisert.</p>

            <a className="spotifyBtn">Kommer snart</a>
          </div>

          <div className="spotifyCard">
            <h3>HELT RÅ</h3>
            <p>Offisiell Betonmast-stemning.</p>

            <a
              className="spotifyBtn"
              href="https://youtube.com"
              target="_blank"
            >
              Se på YouTube
            </a>
          </div>
       </div>

<div className="musicBannerWrap">
  <img
    src="/events/betonmast-sommerfest/hero-banner.jpg"
    alt="Fotball VM 2026 Norway"
    className="musicBanner"
  />
</div>
<div className="factsSection">
  <h2>LIVE & FAKTA</h2>
  <p className="factsIntro">
    Her samler vi nyttig live-info og morsomme fakta før og under arrangementet.
  </p>

  <div className="factsGrid">
    <div className="factCard">
      <span>Vær Oslo</span>
      <strong>Kommer snart</strong>
      <p>Live værmelding kan kobles inn her.</p>
    </div>

    <div className="factCard">
      <span>Badevann</span>
      <strong>Kommer snart</strong>
      <p>Badevannstemperatur for Oslofjorden.</p>
    </div>

    <div className="factCard">
      <span>Boligindeks</span>
      <strong>24 mnd</strong>
      <p>Graf eller nøkkeltall kan legges inn her.</p>
    </div>

    <div className="factCard">
      <span>Ekstra modul</span>
      <strong>Ledig</strong>
      <p>Plass til det kunden spør om senere.</p>
    </div>
  </div>
</div>
</section>
    </main>
  );
}
