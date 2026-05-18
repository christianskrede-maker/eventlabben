'use client';

import { useState } from 'react';

export default function EventPage({ params }: { params: { slug: string } }) {
  const [code, setCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  if (params.slug !== 'betonmast-sommerfest') {
    return <div>Fant ikke arrangementet</div>;
  }

  const checkPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (code.trim().toLowerCase() === 'beton') {
      setUnlocked(true);
      setError('');
    } else {
      setError('Feil kode. Prøv igjen.');
    }
  };

  if (!unlocked) {
    return (
      <main className="lockPage">
        <style jsx>{styles}</style>

        <section className="lockBox">
          <img
            src="/events/betonmast-sommerfest/betonmast-logo.jpg"
            alt="Betonmast"
            className="lockLogo"
          />

          <h1>Sommerfest 2026</h1>
          <p>Fotball-VM, lagånd og en helt rå kveld.</p>

          <form onSubmit={checkPassword}>
            <input
              placeholder="Skriv inn kode"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button type="submit">Åpne arrangement</button>
            {error && <div className="error">{error}</div>}
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <style jsx>{styles}</style>

      <nav className="nav">
        <img
          src="/events/betonmast-sommerfest/betonmast-logo.jpg"
          alt="Betonmast"
          className="navLogo"
        />

        <div>
          <a href="/events/betonmast-sommerfest/program">Program</a>
          <a href="/events/betonmast-sommerfest/praktisk-info">Praktisk info</a>
          <a href="/events/betonmast-sommerfest/drakter">Drakter</a>
          <a href="/events/betonmast-sommerfest/spotify">Spotify</a>
          <a href="/events/betonmast-sommerfest/tippekampen">Tippekampen</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="label">Betonmast Buskerud-Vestfold</p>

          <h1>
            Sommerfest
            <span> 2026</span>
          </h1>

          <p className="lead">
            Én gjeng. Én kultur. Fotball-VM, konkurranser, musikk og sommerfest
            med skikkelig Betonmast-stemning.
          </p>

          <div className="meta">
            <span>22. juni 2026</span>
            <span>Oslo</span>
            <span>Dresscode: fotballdrakt</span>
          </div>
        </div>

        <div className="heroImageBox">
          <img
            src="/events/betonmast-sommerfest/hero-banner.jpg"
            alt="Fotball VM 2026 Norway"
          />
        </div>
      </section>

      <section id="program" className="section">
        <h2>Program</h2>

        <div className="timeline">
          <div><strong>15:00</strong><span>Dørene åpner</span></div>
          <div><strong>16:00</strong><span>Grillbuffet og mingling</span></div>
          <div><strong>17:30</strong><span>Quiz og konkurranser</span></div>
          <div><strong>18:30</strong><span>Kampvisning og tippekamp</span></div>
          <div><strong>21:00</strong><span>DJ, musikk og sommerfest</span></div>
          <div><strong>01:00</strong><span>Takk for i kveld</span></div>
        </div>
      </section>

      <section id="info" className="section cards">
        <div className="card">
          <h3>Dato</h3>
          <p>22. juni 2026</p>
        </div>

        <div className="card">
          <h3>Sted</h3>
          <p>Oslo — mer praktisk info kommer.</p>
        </div>

        <div className="card">
          <h3>Dresscode</h3>
          <p>Fotballdrakt, retrodrakt eller sommerlig pent.</p>
        </div>

        <div className="card">
          <h3>Transport</h3>
          <p>Info om buss, taxi og parkering kommer.</p>
        </div>
      </section>

      <section id="drakter" className="section">
        <h2>Draktene</h2>
        <p className="sectionIntro">
          Vi kjører VM-stemning med retrofølelse og egen Betonmast-vri.
        </p>

        <div className="shirtGrid">
          <div className="shirtCard">
            <h3>1998 Retro</h3>
            <img
              src="/events/betonmast-sommerfest/drakt-front.jpg"
              alt="Drakt front"
            />
          </div>

          <div className="shirtCard">
            <h3>Betonmast Edition</h3>
            <img
              src="/events/betonmast-sommerfest/drakt-back.jpg"
              alt="Drakt bakside"
            />
          </div>
        </div>
      </section>

      <section id="spotify" className="section">
        <h2>Spotify</h2>

        <div className="musicGrid">
          <div className="musicCard">
            <h3>Buss for tog 2025</h3>
            <p>Den første låta — klar for allsang.</p>
            <a href="#" className="disabled">Spotify-link kommer</a>
          </div>

          <div className="musicCard">
            <h3>2026-låta</h3>
            <p>Ikke klar ennå — kommer når den er publisert.</p>
            <a href="#" className="disabled">Kommer snart</a>
          </div>

          <div className="musicCard">
            <h3>Helt Rå</h3>
            <p>Offisiell Betonmast-stemning.</p>
            <a href="https://www.youtube.com/watch?v=OSSbtGlNLRY" target="_blank">
              Se på YouTube ↗
            </a>
          </div>
        </div>
      </section>

      <section id="tippekampen" className="section tippeBox">
        <h2>Tippekampen</h2>
        <p>
          Her kan ansatte tippe resultat på de første VM-kampene. Vi kan senere
          koble dette til skjema og leaderboard.
        </p>

        <div className="matchGrid">
          <div>🇳🇴 Norge — Brasil 🇧🇷</div>
          <div>🇩🇪 Tyskland — Spania 🇪🇸</div>
          <div>🇫🇷 Frankrike — Argentina 🇦🇷</div>
        </div>
      </section>

      <footer>
        EventLabben for <span>Betonmast</span> © 2026
      </footer>
    </main>
  );
}

const styles = `
  .page,
  .lockPage {
    min-height: 100vh;
    background:
      radial-gradient(circle at top right, rgba(255,213,0,0.18), transparent 32%),
      linear-gradient(135deg, #050505, #111, #000);
    color: white;
    font-family: Arial, sans-serif;
  }

  .lockPage {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  .lockBox {
    max-width: 480px;
    width: 100%;
    text-align: center;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,213,0,0.3);
    border-radius: 28px;
    padding: 36px;
  }

  .lockLogo {
    max-width: 280px;
    margin-bottom: 24px;
  }

  .lockBox h1 {
    font-size: 44px;
    margin: 0 0 12px;
    text-transform: uppercase;
  }

  .lockBox p {
    color: rgba(255,255,255,0.75);
  }

  form {
    display: grid;
    gap: 12px;
    margin-top: 24px;
  }

  input,
  button {
    padding: 16px;
    border-radius: 14px;
    border: none;
    font-size: 16px;
  }

  button {
    background: #ffd500;
    color: black;
    font-weight: 900;
    cursor: pointer;
  }

  .error {
    color: #fecaca;
    font-weight: 800;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 20;
    height: 84px;
    background: rgba(0,0,0,0.94);
    border-bottom: 4px solid #ffd500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
  }

  .navLogo {
    height: 42px;
    width: auto;
  }

  .nav div {
    display: flex;
    gap: 24px;
  }

  .nav a {
    color: white;
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 14px;
  }

  .nav a:hover {
    color: #ffd500;
  }

  .hero {
    max-width: 1240px;
    margin: 0 auto;
    padding: 72px 32px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  .label {
    color: #ffd500;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 82px;
    line-height: 0.92;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: -4px;
  }

  h1 span,
  footer span {
    color: #ffd500;
  }

  .lead {
    margin-top: 28px;
    font-size: 22px;
    line-height: 1.6;
    color: rgba(255,255,255,0.78);
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  .meta span {
    background: #ffd500;
    color: black;
    padding: 12px 16px;
    border-radius: 999px;
    font-weight: 900;
  }

  .heroImageBox img {
    width: 100%;
    border-radius: 30px;
    border: 2px solid rgba(255,213,0,0.35);
    box-shadow: 0 0 50px rgba(255,213,0,0.14);
  }

  .section {
    max-width: 1180px;
    margin: 48px auto 0;
    padding: 0 32px;
  }

  .section h2 {
    color: #ffd500;
    font-size: 46px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .sectionIntro {
    color: rgba(255,255,255,0.75);
    font-size: 20px;
  }

  .timeline {
    display: grid;
    gap: 14px;
  }

  .timeline div,
  .card,
  .musicCard,
  .tippeBox {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,213,0,0.28);
    border-radius: 22px;
    padding: 24px;
  }

  .timeline div {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .timeline strong {
    color: #ffd500;
    font-size: 24px;
    min-width: 90px;
  }

  .timeline span {
    font-size: 20px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  .card h3,
  .shirtCard h3,
  .musicCard h3 {
    color: #ffd500;
    text-transform: uppercase;
    margin-top: 0;
  }

  .card p,
  .musicCard p,
  .tippeBox p {
    color: rgba(255,255,255,0.75);
    line-height: 1.6;
  }

  .shirtGrid,
  .musicGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .musicGrid {
    grid-template-columns: repeat(3, 1fr);
  }

  .shirtCard {
    background: #050505;
    border: 1px solid rgba(255,213,0,0.28);
    border-radius: 28px;
    padding: 24px;
    text-align: center;
  }

  .shirtCard img {
    width: 100%;
    border-radius: 22px;
  }

  .musicCard a {
    display: inline-block;
    margin-top: 14px;
    background: #ffd500;
    color: black;
    padding: 13px 16px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 900;
  }

  .musicCard a.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .matchGrid {
    display: grid;
    gap: 12px;
    margin-top: 20px;
  }

  .matchGrid div {
    background: rgba(0,0,0,0.35);
    border-radius: 14px;
    padding: 16px;
    font-weight: 900;
  }

  footer {
    text-align: center;
    color: rgba(255,255,255,0.6);
    margin: 72px 0 0;
    padding-bottom: 48px;
  }

  @media (max-width: 900px) {
    .hero,
    .shirtGrid,
    .musicGrid,
    .cards {
      grid-template-columns: 1fr;
    }

    .nav {
      height: auto;
      flex-direction: column;
      gap: 14px;
      padding: 18px;
    }

    .nav div {
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
    }

    h1 {
      font-size: 52px;
    }
  }
`;
