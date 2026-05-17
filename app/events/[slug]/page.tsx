'use client';

import { useMemo, useState } from 'react';

const events = {
  'betonmast-sommerfest': {
    company: 'Betonmast',
    title: 'Sommerfest',
    subtitle: 'Velkommen til Betonmast sommerfest',
    date: '22. juni 2026',
    location: 'Oslo',
    password: 'beton',
    color: '#ffd500',
    dark: '#050505',
    intro:
      'Her finner du program, praktisk informasjon, linker og oppdateringer for arrangementet.',
    program: [
      { time: '17:00', title: 'Ankomst og registrering' },
      { time: '17:30', title: 'Velkommen' },
      { time: '18:00', title: 'Matservering' },
      { time: '20:00', title: 'Underholdning' },
      { time: '22:00', title: 'Musikk og sosialt' },
    ],
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
    intro:
      'Her finner du program, dokumenter, praktisk informasjon og nyttige linker.',
    program: [
      { time: '18:00', title: 'Registrering' },
      { time: '18:30', title: 'Åpning av møtet' },
      { time: '19:00', title: 'Saksliste' },
      { time: '20:30', title: 'Avslutning' },
    ],
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
    intro:
      'Samlet informasjon for kickoff, program, kontaktpersoner og praktiske detaljer.',
    program: [
      { time: '10:00', title: 'Oppmøte' },
      { time: '10:30', title: 'Strategi og mål' },
      { time: '12:00', title: 'Lunsj' },
      { time: '13:00', title: 'Workshop' },
    ],
  },
};

type EventSlug = keyof typeof events;

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events[params.slug as EventSlug];

  const [code, setCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const isKnownEvent = Boolean(event);

  const theme = useMemo(() => {
    if (!event) {
      return {
        color: '#ffffff',
        dark: '#111827',
      };
    }

    return {
      color: event.color,
      dark: event.dark,
    };
  }, [event]);

  if (!isKnownEvent) {
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
          background: `radial-gradient(circle at top left, ${theme.color}55, transparent 32%), linear-gradient(135deg, ${theme.dark}, #020617)`,
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
            <p>{event.intro}</p>
          </div>

          <div className="card">
            <h2>Praktisk info</h2>
            <p>
              Denne siden er laget for deltakerne på arrangementet. Her kan vi
              legge inn transport, kontaktpersoner, kart, linker og beskjeder.
            </p>
          </div>

          <div className="card">
            <h2>NFC</h2>
            <p>
              NFC-brikken kan peke direkte hit, slik at deltakerne får rask
              tilgang til all informasjon på mobilen.
            </p>
          </div>
        </section>

        <section className="programCard">
          <h2>Program</h2>

          <div className="programList">
            {event.program.map((item) => (
              <div className="programItem" key={`${item.time}-${item.title}`}>
                <strong>{item.time}</strong>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid">
          <div className="card">
            <h2>Bonger</h2>
            <p>
              Her kan vi senere legge inn digitale bonger per deltaker, for
              eksempel matbong, drikkebonger eller garderobe.
            </p>
          </div>

          <div className="card">
            <h2>Lenker</h2>
            <p>
              Her kan vi legge inn menyer, kart, dokumenter, billetter,
              presentasjoner eller praktiske linker.
            </p>
          </div>

          <div className="card">
            <h2>Kontakt</h2>
            <p>
              Her kan vi legge inn kontaktperson for arrangementet, vakter,
              arrangør eller prosjektleder.
            </p>
          </div>
        </section>

        <footer>
          EventLabben · {event.company}
        </footer>
      </div>
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
    letter-spacing: 0.04em;
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
    border: 1px solid rgba(255,255,255,0.14);
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
  .programCard,
  .lockBox,
  .notFound {
    background: rgba(255,255,255,0.09);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 28px;
    padding: 30px;
    backdrop-filter: blur(16px);
    box-shadow: 0 18px 40px rgba(0,0,0,0.18);
  }

  .large {
    grid-column: span 2;
  }

  .card h2,
  .programCard h2 {
    margin-top: 0;
    font-size: 30px;
  }

  .card p,
  .programCard p {
    color: rgba(255,255,255,0.78);
    line-height: 1.7;
    font-size: 17px;
  }

  .programCard {
    margin-top: 24px;
  }

  .programList {
    display: grid;
    gap: 12px;
  }

  .programItem {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 18px;
    align-items: center;
    padding: 16px 18px;
    background: rgba(255,255,255,0.08);
    border-radius: 18px;
  }

  .programItem strong {
    font-size: 18px;
  }

  .programItem span {
    color: rgba(255,255,255,0.86);
    line-height: 1.5;
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

  .lockBox p,
  .notFound p {
    color: rgba(255,255,255,0.78);
    font-size: 18px;
    line-height: 1.6;
  }

  .lockForm {
    margin-top: 28px;
    display: grid;
    gap: 12px;
  }

  .lockForm input {
    padding: 17px 18px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.2);
    font-size: 17px;
    background: rgba(255,255,255,0.95);
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

  @media (max-width: 900px) {
    h1 {
      font-size: 54px;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    .large {
      grid-column: span 1;
    }

    .subtitle {
      font-size: 20px;
    }
  }

  @media (max-width: 640px) {
    .container {
      padding: 40px 16px 70px;
    }

    .hero {
      padding: 50px 8px 36px;
    }

    h1 {
      font-size: 42px;
      letter-spacing: -1px;
    }

    .lockBox h1,
    .notFound h1 {
      font-size: 38px;
    }

    .programItem {
      grid-template-columns: 1fr;
      gap: 4px;
    }
  }
`;
