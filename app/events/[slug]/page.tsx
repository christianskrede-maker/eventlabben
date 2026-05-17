'use client';

import { useMemo, useState } from 'react';

const events = {
  'betonmast-sommerfest': {
    company: 'Betonmast',
    title: 'Sommerfest 2026',
    subtitle: 'Én gjeng. Én kultur. Helt rå.',
    date: '22. juni 2026',
    location: 'Oslo',
    password: 'beton',
    type: 'betonmast',
  },
  'asker-hoyre-arsmote': {
    company: 'Asker Høyre',
    title: 'Årsmøte',
    subtitle: 'Praktisk informasjon og program',
    date: '14. februar 2026',
    location: 'Asker',
    password: 'asker',
    color: '#1d4ed8',
    dark: '#0f172a',
  },
  'valgkamp-2026': {
    company: 'EventLabben',
    title: 'Valgkamp Kickoff',
    subtitle: 'Program og praktisk informasjon',
    date: '5. august 2026',
    location: 'Drammen',
    password: 'valg',
    color: '#ec4899',
    dark: '#111827',
  },
};

type EventSlug = keyof typeof events;

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events[params.slug as EventSlug];

  const [code, setCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const theme = useMemo(() => {
    if (!event) return { color: '#ffffff', dark: '#111827' };

    if ('type' in event && event.type === 'betonmast') {
      return {
        color: '#ffd500',
        dark: '#050505',
      };
    }

  return {
  color: 'color' in event ? event.color : '#ffffff',
  dark: 'dark' in event ? event.dark : '#111827',
};
  }, [event]);

  if (!event) {
    return (
      <main className="page">
        <style jsx>{styles}</style>
        <section className="notFound">
          <h1>Fant ikke arrangementet</h1>
          <p>Dette arrangementet finnes ikke ennå.</p>
          <a href="/events">Tilbake til arrangementer</a>
        </section>
      </main>
    );
  }

  const checkPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (code.trim().toLowerCase() === event.password.toLowerCase()) {
      setUnlocked(true);
      setError('');
      return;
    }

    setError('Feil kode. Prøv igjen.');
  };

  if (!unlocked) {
    return (
      <main
        className="page"
        style={{
          background: `radial-gradient(circle at top left, ${theme.color}55, transparent 34%), linear-gradient(135deg, ${theme.dark}, #020617)`,
        }}
      >
        <style jsx>{styles}</style>

        <section className="lockBox">
          <div className="smallLabel">{event.company}</div>
          <h1>{event.title}</h1>
          <p>{event.subtitle}</p>

          <form onSubmit={checkPassword} className="lockForm">
            <input
              placeholder="Skriv inn kode"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <button type="submit">Åpne arrangement</button>

            {error && <div className="error">{error}</div>}
          </form>

          <a href="/events" className="backLink">
            ← Tilbake
          </a>
        </section>
      </main>
    );
  }

  if ('type' in event && event.type === 'betonmast') {
    return <BetonmastPage event={event} />;
  }

  return (
    <main
      className="page"
      style={{
        background: `radial-gradient(circle at top left, ${theme.color}55, transparent 32%), linear-gradient(135deg, ${theme.dark}, #020617)`,
      }}
    >
      <style jsx>{styles}</style>

      <div className="container">
        <header className="hero">
          <div className="smallLabel">{event.company}</div>
          <h1>{event.title}</h1>
          <p className="subtitle">{event.subtitle}</p>

          <div className="meta">
            <span>{event.date}</span>
            <span>{event.location}</span>
          </div>
        </header>

        <section className="grid">
          <div className="card large">
            <h2>Velkommen</h2>
            <p>
              Her finner du program, praktisk informasjon, linker og
              oppdateringer for arrangementet.
            </p>
          </div>

          <div className="card">
            <h2>Praktisk info</h2>
            <p>Transport, kontaktpersoner, kart, linker og beskjeder.</p>
          </div>

          <div className="card">
            <h2>NFC</h2>
            <p>NFC-brikken peker direkte hit.</p>
          </div>
        </section>

        <footer>EventLabben · {event.company}</footer>
      </div>
    </main>
  );
}

function BetonmastPage({ event }: { event: any }) {
  return (
    <main className="betonPage">
      <style jsx>{styles}</style>

      <nav className="betonNav">
        <div className="betonLogo">BETONMAST</div>

        <div className="navLinks">
          <a href="#program">Program</a>
          <a href="#musikk">Musikk</a>
          <a href="#info">Praktisk info</a>
          <a href="#bonger">Bonger</a>
        </div>
      </nav>

      <section className="betonHero">
        <div className="heroText">
          <div className="yellowLabel">Velkommen til</div>

          <h1>
            BETONMAST
            <br />
            <span>SOMMERFEST</span>
            <br />
            2026
          </h1>

          <div className="eventStrip">
            <strong>{event.date}</strong>
            <span>|</span>
            <strong>{event.location}</strong>
          </div>

          <h2>
            Én gjeng. Én kultur.
            <br />
            Helt <span>rå.</span>
          </h2>

          <p>
            Velkommen til årets høydepunkt. Her finner du program, praktisk
            informasjon, nyttige linker og alt du trenger for en legendarisk
            kveld.
          </p>
        </div>

        <div className="comicBox">
          <div className="speech">Penger i kassa, fest i glassa!</div>

          <div className="comicPlaceholder">
            <div className="comicFace">😎</div>
            <div className="money">💸 💰 💸</div>
            <p>Humoristisk tegneseriebilde kommer her</p>
          </div>
        </div>
      </section>

      <section id="musikk" className="musicSection">
        <h2>Våre låter</h2>

        <div className="musicGrid">
          <div className="musicCard">
            <div className="platform spotify">Spotify</div>

            <h3>Buss for tog (Betonmast) 2025</h3>

            <p>
              Den første låta. Her legger vi inn Spotify-link når du sender den.
            </p>

            <a href="#" className="musicButton disabled">
              Spotify-link kommer
            </a>
          </div>

          <div className="musicCard">
            <div className="platform spotify">Spotify</div>

            <h3>Buss for tog (Betonmast) 2026</h3>

            <p>
              Ny låt for sommerfesten 2026. Klar for fullt trøkk.
            </p>

            <a
              href="https://open.spotify.com/track/45H8lXkftq2qzGA1bQbV7T"
              target="_blank"
              className="musicButton"
            >
              Lytt på Spotify ↗
            </a>
          </div>

          <div className="musicCard">
            <div className="platform youtube">YouTube</div>

            <h3>Helt Rå</h3>

            <p>
              Offisiell Betonmast-låt. Alltid like rå.
            </p>

            <a
              href="https://www.youtube.com/watch?v=OSSbtGlNLRY"
              target="_blank"
              className="musicButton"
            >
              Se på YouTube ↗
            </a>
          </div>
        </div>
      </section>

      <section id="info" className="infoGrid">
        <div className="infoCard">
          <div className="icon">📅</div>
          <h3>Dato</h3>
          <p>{event.date}</p>
          <small>Sett av dagen!</small>
        </div>

        <div className="infoCard">
          <div className="icon">📍</div>
          <h3>Sted</h3>
          <p>{event.location}</p>
          <small>Mer info kommer snart.</small>
        </div>

        <div id="program" className="infoCard">
          <div className="icon">👷</div>
          <h3>Program</h3>
          <p>Fullt program kommer.</p>
          <small>Mat, musikk og moro.</small>
        </div>
      </section>

      <section id="bonger" className="quoteBox">
        <div>
          “Vi bygger mer enn bygg.
          <br />
          Vi bygger <span>kultur.</span>”
        </div>

        <div className="stamp">
          BETONMAST
          <small>HELT RÅ SIDEN 1958</small>
        </div>
      </section>

      <footer className="betonFooter">
        EventLabben for <span>Betonmast</span> © 2026
      </footer>
    </main>
  );
}

const styles = `
  .page {
    min-height: 100vh;
    color: white;
    font-family: Arial, sans-serif;
  }

  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 70px 24px;
  }

  .hero {
    text-align: center;
    padding: 70px 20px 50px;
  }

  .smallLabel {
    display: inline-block;
    padding: 9px 16px;
    border-radius: 999px;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.16);
    font-weight: 900;
    margin-bottom: 22px;
  }

  h1 {
    font-size: 78px;
    line-height: 0.95;
    margin: 0 0 22px;
    font-weight: 900;
    letter-spacing: -3px;
  }

  .subtitle {
    font-size: 24px;
    color: rgba(255,255,255,0.82);
    margin: 0 auto 28px;
    max-width: 760px;
    line-height: 1.6;
  }

  .meta {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .meta span {
    background: rgba(255,255,255,0.12);
    padding: 12px 18px;
    border-radius: 999px;
    font-weight: 800;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
    margin-top: 24px;
  }

  .card,
  .lockBox,
  .notFound {
    background: rgba(255,255,255,0.09);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 28px;
    padding: 30px;
    backdrop-filter: blur(16px);
  }

  .large {
    grid-column: span 2;
  }

  .card h2 {
    margin-top: 0;
    font-size: 30px;
  }

  .card p {
    color: rgba(255,255,255,0.78);
    line-height: 1.7;
    font-size: 17px;
  }

  .lockBox,
  .notFound {
    max-width: 520px;
    margin: 14vh auto 0;
    text-align: center;
  }

  .lockBox h1,
  .notFound h1 {
    font-size: 54px;
  }

  .lockForm {
    margin-top: 28px;
    display: grid;
    gap: 12px;
  }

  .lockForm input {
    padding: 17px 18px;
    border-radius: 14px;
    border: none;
    font-size: 17px;
  }

  .lockForm button {
    padding: 17px 18px;
    border-radius: 14px;
    border: none;
    background: white;
    color: #111827;
    font-weight: 900;
    font-size: 17px;
    cursor: pointer;
  }

  .error {
    color: #fecaca;
    font-weight: 800;
  }

  .backLink,
  .notFound a {
    display: inline-block;
    margin-top: 22px;
    color: white;
    opacity: 0.8;
  }

  footer {
    text-align: center;
    color: rgba(255,255,255,0.5);
    margin-top: 70px;
    font-size: 15px;
  }

  .betonPage {
    min-height: 100vh;
    background:
      radial-gradient(circle at top right, rgba(255,213,0,0.18), transparent 34%),
      radial-gradient(circle at bottom left, rgba(255,213,0,0.16), transparent 32%),
      linear-gradient(135deg, #050505 0%, #111 45%, #020202 100%);
    color: white;
    font-family: Arial, sans-serif;
    padding-bottom: 60px;
  }

  .betonNav {
    height: 88px;
    border-bottom: 5px solid #ffd500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 42px;
    background: #050505;
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .betonLogo {
    color: #ffd500;
    font-size: 38px;
    font-weight: 1000;
    letter-spacing: -2px;
  }

  .navLinks {
    display: flex;
    gap: 30px;
  }

  .navLinks a {
    color: white;
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
  }

  .navLinks a:first-child {
    color: #ffd500;
  }

  .betonHero {
    max-width: 1240px;
    margin: 0 auto;
    padding: 70px 32px 40px;
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    gap: 40px;
    align-items: center;
  }

  .yellowLabel {
    color: white;
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .heroText h1 {
    font-size: 82px;
    line-height: 0.9;
    margin: 0;
    font-weight: 1000;
    letter-spacing: -4px;
  }

  .heroText h1 span {
    color: #ffd500;
  }

  .eventStrip {
    display: inline-flex;
    gap: 12px;
    align-items: center;
    background: #ffd500;
    color: black;
    padding: 14px 22px;
    font-size: 24px;
    font-weight: 1000;
    margin-top: 28px;
    transform: skew(-5deg);
  }

  .heroText h2 {
    margin-top: 34px;
    font-size: 38px;
    line-height: 1.15;
    text-transform: uppercase;
  }

  .heroText h2 span {
    color: #ffd500;
  }

  .heroText p {
    font-size: 21px;
    line-height: 1.65;
    max-width: 560px;
    color: rgba(255,255,255,0.82);
  }

  .comicBox {
    position: relative;
  }

  .speech {
    position: absolute;
    right: 0;
    top: 20px;
    background: white;
    color: black;
    padding: 20px;
    border-radius: 28px;
    max-width: 210px;
    font-size: 22px;
    font-weight: 1000;
    text-align: center;
    z-index: 2;
  }

  .comicPlaceholder {
    min-height: 500px;
    border-radius: 34px;
    background:
      radial-gradient(circle at center, rgba(255,213,0,0.3), transparent 40%),
      linear-gradient(135deg, #222, #050505);
    border: 1px solid rgba(255,213,0,0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-align: center;
    padding: 30px;
  }

  .comicFace {
    font-size: 120px;
  }

  .money {
    font-size: 62px;
    margin: 16px 0;
  }

  .comicPlaceholder p {
    color: rgba(255,255,255,0.65);
    font-weight: 800;
  }

  .musicSection,
  .infoGrid,
  .quoteBox {
    max-width: 1180px;
    margin: 42px auto 0;
    padding: 0 32px;
  }

  .musicSection h2 {
    text-align: center;
    color: #ffd500;
    font-size: 42px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .musicGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }

  .musicCard {
    background: rgba(255,255,255,0.055);
    border: 1px solid rgba(255,213,0,0.28);
    border-radius: 24px;
    padding: 28px;
  }

  .platform {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 999px;
    font-weight: 1000;
    margin-bottom: 18px;
  }

  .spotify {
    background: #1db954;
    color: black;
  }

  .youtube {
    background: #ff0000;
    color: white;
  }

  .musicCard h3 {
    font-size: 28px;
    margin: 0 0 12px;
    text-transform: uppercase;
  }

  .musicCard p {
    color: rgba(255,255,255,0.76);
    line-height: 1.6;
  }

  .musicButton {
    display: inline-block;
    margin-top: 18px;
    background: #ffd500;
    color: black;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 1000;
    text-decoration: none;
  }

  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .infoGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    border: 1px solid rgba(255,213,0,0.28);
    border-radius: 24px;
    overflow: hidden;
    padding: 0;
  }

  .infoCard {
    padding: 34px;
    background: rgba(255,255,255,0.045);
    border-right: 1px solid rgba(255,213,0,0.2);
  }

  .infoCard:last-child {
    border-right: none;
  }

  .icon {
    font-size: 40px;
    margin-bottom: 16px;
  }

  .infoCard h3 {
    color: #ffd500;
    font-size: 28px;
    margin: 0 0 12px;
    text-transform: uppercase;
  }

  .infoCard p {
    font-size: 22px;
    margin: 0 0 8px;
  }

  .infoCard small {
    color: rgba(255,255,255,0.65);
  }

  .quoteBox {
    border: 1px solid rgba(255,213,0,0.28);
    border-radius: 24px;
    padding: 34px;
    background: rgba(255,255,255,0.045);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    font-size: 36px;
    font-weight: 1000;
    font-style: italic;
    text-transform: uppercase;
  }

  .quoteBox span {
    color: #ffd500;
  }

  .stamp {
    border: 2px solid #ffd500;
    color: #ffd500;
    padding: 20px 26px;
    font-style: normal;
    text-align: center;
  }

  .stamp small {
    display: block;
    color: white;
    font-size: 13px;
    letter-spacing: 4px;
    margin-top: 8px;
  }

  .betonFooter {
    text-align: center;
    margin-top: 48px;
    color: rgba(255,255,255,0.65);
  }

  .betonFooter span {
    color: #ffd500;
  }

  @media (max-width: 900px) {
    .betonHero {
      grid-template-columns: 1fr;
    }

    .musicGrid,
    .infoGrid {
      grid-template-columns: 1fr;
    }

    .infoCard {
      border-right: none;
      border-bottom: 1px solid rgba(255,213,0,0.2);
    }

    .quoteBox {
      flex-direction: column;
      text-align: center;
      font-size: 28px;
    }

    .navLinks {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .betonNav {
      padding: 0 20px;
    }

    .betonLogo {
      font-size: 30px;
    }

    .heroText h1 {
      font-size: 52px;
    }

    .eventStrip {
      font-size: 18px;
    }

    .heroText h2 {
      font-size: 30px;
    }

    .comicPlaceholder {
      min-height: 340px;
    }

    .speech {
      position: static;
      margin-bottom: 16px;
      max-width: none;
    }
  }
`;
