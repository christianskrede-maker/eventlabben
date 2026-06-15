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

  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, #3a3200 0%, #000 45%);
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
          background: rgba(0,0,0,0.95);
          border-bottom: 3px solid #ffd500;
        }

        .logo {
          height: 36px;
        }

        .menu {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: flex-end;
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
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,213,0,0.25);
          border-radius: 32px;
          padding: 24px;
          box-shadow: 0 0 50px rgba(255,213,0,0.15);
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

        .musicEmbed {
          margin-top: 18px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255,213,0,0.22);
          background: rgba(0,0,0,0.35);
        }

        .musicEmbed iframe {
          display: block;
          width: 100%;
          border: 0;
        }

        .youtubeEmbed {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
        }

        .youtubeEmbed iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .factCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 22px;
          padding: 24px;
          text-decoration: none;
          color: white;
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

        .hostsSection {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 100px;
          text-align: center;
        }

        .jcpLogo {
          height: 72px;
          max-width: 220px;
          object-fit: contain;
          margin-bottom: 28px;
          background: white;
          padding: 12px 18px;
          border-radius: 18px;
        }

        .hostsTitle {
          color: #ffd500;
          font-size: 44px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .hostsIntro {
          color: #ddd;
          font-size: 20px;
          margin-bottom: 34px;
        }

        .hostsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .hostCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.25);
          border-radius: 26px;
          padding: 30px;
        }

        .callBtn {
          display: inline-block;
          background: #ffd500;
          color: black;
          padding: 15px 24px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .hostName {
          font-size: 26px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .hostRole {
          color: #ffd500;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .hostPhone {
          color: #ccc;
          font-size: 18px;
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
          }

          .menu a {
            font-size: 12px;
            background: rgba(255,213,0,0.12);
            border: 1px solid rgba(255,213,0,0.25);
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
          }

          .text {
            font-size: 18px;
            margin: 0 auto;
          }

          .badges {
            justify-content: center;
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

          .factsGrid,
          .hostsGrid {
            grid-template-columns: 1fr;
          }

          .factsSection h2,
          .hostsTitle {
            font-size: 34px;
          }

          .hostsIntro {
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
          <a href="#praktisk-info">Praktisk info</a>
          <a href="#musikk">Musikk</a>
          <a href="#verter">Verter</a>
            <a href="/events/betonmast-sommerfest/rom">
    Rom
  </a>
          <a href="/events/betonmast-sommerfest/tippekampen">Tippekampen</a>
          <a href="/events/betonmast-sommerfest/hms">HMS</a>
          <a href="/events/betonmast-sommerfest/savner-du-jobben">
            Savner du byggeplassen din?
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
            Én gjeng. Én kultur. Fotball-VM, hemmelig Oslo-opplegg, musikk,
            middag og sommerfest med ekte Betonmast-stemning.
          </p>

          <div className="badges">
            <div className="badge">16. juni 2026</div>
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
            <div className="time">07:45</div>
            <div>Avreise Larvik → Sem → Drammen → Oslo</div>
          </div>

          <div className="programItem">
            <div className="time">08:20</div>
            <div>Opphenting Sem</div>
          </div>

          <div className="programItem">
            <div className="time">08:30</div>
            <div>Buss fra Sem til Drammen</div>
          </div>

          <div className="programItem">
            <div className="time">09:15</div>
            <div>Samling i Drammen</div>
          </div>

          <div className="programItem">
            <div className="time">12:45</div>
            <div>Avreise til Oslo</div>
          </div>

          <div className="programItem">
            <div className="time">13:30</div>
            <div>Ankomst Oslo – Vippetangen</div>
          </div>

          <div className="programItem">
            <div className="time">14:00</div>
            <div>
              Avgang til hemmelig Oslo-opplegg, aperitiff, mingling og lunsj
            </div>
          </div>

          <div className="programItem">
            <div className="time">14:30</div>
            <div>DJ-overraskelse og Patski spiller</div>
          </div>

          <div className="programItem">
            <div className="time">17:00</div>
            <div>Ankomst og avreise til Kampen Bistro</div>
          </div>

          <div className="programItem">
            <div className="time">18:00</div>
            <div>Middag på Kampen Bistro</div>
          </div>

          <div className="programItem">
            <div className="time">20:00</div>
            <div>Avreise til Jordal Amfi</div>
          </div>

          <div className="programItem">
            <div className="time">21:00</div>
            <div>Kampstart: Frankrike – Senegal</div>
          </div>

          <div className="programItem">
            <div className="time">00:00</div>
            <div>Kampstart: Irak – Norge</div>
          </div>

          <div className="programItem">
            <div className="time">01:30</div>
            <div>Avreise til hotell</div>
          </div>
        </div>
      </section>

      <section className="section" id="praktisk-info">
        <h2 className="sectionTitle">PRAKTISK INFO</h2>

        <div className="programList">
          <div className="programItem">
            <div className="time">OSLO</div>
            <div>
              Opplegget i Oslo er hemmelig. Kle dere etter vær og for en hel dag.
            </div>
          </div>

          <div className="programItem">
            <div className="time">KLÆR</div>
            <div>
              Badetøy anbefales dersom noen ønsker en dukkert underveis.
            </div>
          </div>

          <div className="programItem">
            <div className="time">BAGASJE</div>
            <div>
              Bager merkes med navn og telefonnummer. Bagasjen sjekkes inn på
              hotellet for dere.
            </div>
          </div>

          <div className="programItem">
            <div className="time">HOTELL</div>
            <div>
              Hotellene er Scandic Helsfyr og K7 Hotel Oslo. Romfordeling
              i egen fane.
            </div>
          </div>

          <div className="programItem">
            <div className="time">NATT</div>
            <div>
              Folk sørger for transport selv eller i grupper til hotell når det
              passer utover natten.
            </div>
          </div>

          <div className="programItem">
            <div className="time">HJEM</div>
            <div>
              Transport hjem onsdag 17. juni er på eget ansvar. Tog anbefales
              for det sosiale og miljøet.
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="musikk">
        <h2 className="sectionTitle">MUSIKK</h2>

        <div className="spotifyGrid">
          <div className="spotifyCard">
            <h3>TOG FOR BIL 2026</h3>
            <p>Årets låt – klar for allsang.</p>

            <div className="musicEmbed">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/christianskrede/betonmast-helt-ra-2&color=%23ffd500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              />
            </div>
          </div>

          <div className="spotifyCard">
            <h3>BUSS FOR TOG 2025</h3>
            <p>Den første låta – klar for allsang.</p>

            <div className="musicEmbed">
              <iframe
                src="https://open.spotify.com/embed/track/45H8lXkftq2qzGA1bQbV7T?utm_source=generator"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>

          <div className="spotifyCard">
            <h3>HELT RÅ</h3>
            <p>Offisiell Betonmast-stemning.</p>

            <div className="musicEmbed youtubeEmbed">
              <iframe
                src="https://www.youtube.com/embed/OSSbtGlNLRY"
                title="HELT RÅ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
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

            <a
              className="factCard"
              href="https://ruter.no/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Transport</span>
              <strong>Ruter</strong>
              <p>Planlegg kollektivtransport i Oslo.</p>
            </a>

            <a
              className="factCard"
              href="https://bolt.eu/no-no/cities/oslo/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Drosje</span>
              <strong>Bolt</strong>
              <p>Bestill Bolt i Oslo-området.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="hostsSection" id="verter">
        <img
          src="/events/betonmast-sommerfest/JPC-logo.jpg"
          alt="JCP"
          className="jcpLogo"
        />

        <h2 className="hostsTitle">VERTER</h2>

        <p className="hostsIntro">
          Trenger du hjelp underveis? Ring en av vertene fra eventbyrået.
        </p>

        <div className="hostsGrid">
          <div className="hostCard">
            <a href="tel:+4793062809" className="callBtn">
              Ring Paul
            </a>

            <div className="hostName">Paul Zimmer</div>
            <div className="hostRole">Project Manager</div>
            <div className="hostPhone">Tlf: +47 930 62 809</div>
          </div>

          <div className="hostCard">
            <a href="tel:+4748263605" className="callBtn">
              Ring Mathias
            </a>

            <div className="hostName">Mathias Holgersen</div>
            <div className="hostRole">Travel Manager</div>
            <div className="hostPhone">Tlf: +47 482 63 605</div>
          </div>
        </div>
      </section>
    </main>
  );
}
