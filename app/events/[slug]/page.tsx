'use client';

import { useEffect, useState } from 'react';

export default function EventPage({ params }: { params: { slug: string } }) {
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

  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at top right, #3a3200 0%, #000 45%);
          color: white;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
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
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .shirtCard {
          width: 100%;
          max-width: 500px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 213, 0, 0.25);
          border-radius: 32px;
          padding: 24px;
          box-shadow: 0 0 50px rgba(255, 213, 0, 0.15);
          position: relative;
          overflow: hidden;
        }

        .shirtSpacer {
          padding-top: 120%;
        }

        .shirtImage {
          position: absolute;
          inset: 24px;
          width: calc(100% - 48px);
          height: calc(100% - 48px);
          object-fit: contain;
          border-radius: 20px;
          transition: opacity 0.8s ease-in-out;
        }

        .shirtImage.active {
          opacity: 1;
        }

        .shirtImage.hidden {
          opacity: 0;
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 213, 0, 0.2);
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 213, 0, 0.2);
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

        .musicBannerWrap {
          margin-top: 56px;
          display: flex;
          justify-content: center;
        }

        .musicBanner {
          width: 100%;
          max-width: 900px;
          border-radius: 28px;
          border: 1px solid rgba(255, 213, 0, 0.3);
          box-shadow: 0 0 45px rgba(255, 213, 0, 0.12);
        }

        .factsSection {
          margin-top: 80px;
          padding-top: 56px;
          border-top: 1px solid rgba(255, 213, 0, 0.25);
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 213, 0, 0.22);
          border-radius: 22px;
          padding: 24px;
          text-decoration: none;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .factCard:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 213, 0, 0.55);
          background: rgba(255, 255, 255, 0.08);
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
          .nav {
            flex-direction: column;
            justify-content: center;
            gap: 14px;
            padding: 18px 16px;
          }

          .logo {
            height: 48px;
          }

          .menu {
            width: 100%;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .menu a {
            font-size: 12px;
            background: rgba(255, 213, 0, 0.12);
            border: 1px solid rgba(255, 213, 0, 0.25);
            padding: 9px 11px;
            border-radius: 999px;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 52px 18px;
            gap: 36px;
            text-align: center;
          }

          .title {
            font-size: 46px;
            line-height: 1;
            letter-spacing: -1px;
          }

          .text {
            font-size: 18px;
            margin: 0 auto;
          }

          .badges {
            justify-content: center;
          }

          .badge {
            font-size: 13px;
            padding: 10px 14px;
          }

          .shirtCard {
            max-width: 340px;
            padding: 18px;
          }

          .shirtImage {
            inset: 18px;
            width: calc(100% - 36px);
            height: calc(100% - 36px);
          }

          .section {
            padding: 40px 18px 80px;
          }

          .sectionTitle {
            font-size: 38px;
            text-align: center;
          }

          .programItem {
            font-size: 17px;
            gap: 14px;
            padding: 18px;
          }

          .time {
            min-width: 64px;
          }

          .spotifyGrid {
            grid-template-columns: 1fr;
          }

          .musicBanner {
            border-radius: 18px;
          }

          .factsGrid {
            grid-template-columns: 1fr;
          }

          .factsSection h2 {
            font-size: 34px;
            text-align: center;
          }

          .factsIntro {
            text-align: center;
            font-size: 17px;
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
            Én gjeng. Én kultur. Fotball-VM, konkurranser, musikk og sommerfest
            med ekte Betonmast-stemning.
          </p>

          <div className="badges">
            <div className="badge">18. juni 2026</div>
            <div className="badge">Oslo</div>
            <div className="badge">Dresscode: fotballdrakt</div>
          </div>
        </div>

        <div className="visual">
          <div className="shirtCard">
            <div className="shirtSpacer" />

            <img
              src="/events/betonmast-sommerfest/drakt-front.jpg"
              alt="Fotballdrakt front"
              className={`shirtImage ${shirtIndex === 0 ? 'active' : 'hidden'}`}
            />

            <img
              src="/events/betonmast-sommerfest/drakt-back.jpg"
              alt="Fotballdrakt bakside"
              className={`shirtImage ${shirtIndex === 1 ? 'active' : 'hidden'}`}
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
              href="https://www.youtube.com/watch?v=OSSbtGlNLRY"
              target="_blank"
              rel="noreferrer"
              className="spotifyBtn"
            >
              Se på YouTube ↗
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
            Her samler vi nyttig live-info og morsomme fakta før og under
            arrangementet.
          </p>

          <div className="factsGrid">
            <a
              className="factCard"
              href="https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-72837/Norge/Oslo/Oslo/Oslo"
              target="_blank"
              rel="noreferrer"
            >
              <span>Vær Oslo</span>
              <strong>Yr</strong>
              <p>Se oppdatert værmelding for Oslo.</p>
            </a>

            <a
              className="factCard"
              href="https://badetemperaturer.no/oslo"
              target="_blank"
              rel="noreferrer"
            >
              <span>Badevann</span>
              <strong>Oslofjorden</strong>
              <p>Sjekk badetemperaturer i Oslo-området.</p>
            </a>

            <a
              className="factCard"
              href="https://eiendomnorge.no/boligprisstatistikk/statistikkbank/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Boligindeks</span>
              <strong>Statistikkbank</strong>
              <p>Se boligprisutvikling og nøkkeltall.</p>
            </a>

            <a
              className="factCard"
              href="https://www.afgruppen.no/investor/aksjen/"
              target="_blank"
              rel="noreferrer"
            >
              <span>AF Gruppen</span>
              <strong>Aksjen</strong>
              <p>Følg AF Gruppen på investorsiden.</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
