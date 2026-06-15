'use client';
export default function RomPage({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug !== 'betonmast-sommerfest') {
    return <div>Fant ikke arrangementet</div>;
  }

  const rooms = [
    {
      hotell: 'K7 Hotel Oslo',
      rom: 'K7',
      person1: 'Emma Stiansen',
      person2: 'Eva Schuster',
    },
    {
      hotell: 'K7 Hotel Oslo',
      rom: 'K7',
      person1: 'Marie Hammer Iversen',
      person2: 'Silje Foss Rønning',
    },
    {
      hotell: 'Scandic Helsfyr',
      rom: '',
      person1: 'Hannie Evensen',
      person2: 'Mari Landa Ericsson',
    },
    {
      hotell: 'Scandic Helsfyr',
      rom: '',
      person1: 'Stine Krigsstrøm',
      person2: 'Karolina Miklaszewicz-Szczawinska',
    },
    {
      hotell: 'Scandic Helsfyr',
      rom: '35',
      person1: 'Kirsten Slotte Birkeland',
      person2: 'Ingvild Svenke Fundli',
    },
  ];

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

        .section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px 100px;
        }

        .eyebrow {
          color: #ffd500;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .title {
          font-size: 72px;
          line-height: 0.95;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .title span {
          color: #ffd500;
        }

        .intro {
          font-size: 22px;
          line-height: 1.6;
          color: #ddd;
          max-width: 760px;
          margin-bottom: 42px;
        }

        .hotelGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 46px;
        }

        .hotelCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 24px;
          padding: 28px;
        }

        .hotelCard h2 {
          color: #ffd500;
          font-size: 28px;
          margin-bottom: 12px;
        }

        .hotelCard p {
          color: #ddd;
          font-size: 18px;
          line-height: 1.5;
        }

        .tableWrap {
          overflow-x: auto;
          border: 1px solid rgba(255,213,0,0.25);
          border-radius: 24px;
          background: rgba(255,255,255,0.04);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 760px;
        }

        th {
          background: #ffd500;
          color: black;
          text-align: left;
          padding: 18px;
          font-size: 16px;
          text-transform: uppercase;
        }

        td {
          padding: 18px;
          border-top: 1px solid rgba(255,213,0,0.18);
          font-size: 18px;
        }

        .hotelName {
          color: #ffd500;
          font-weight: 900;
        }

        .roomNumber {
          font-weight: 900;
        }

        .note {
          margin-top: 34px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 22px;
          padding: 24px;
          color: #ddd;
          font-size: 18px;
          line-height: 1.6;
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

          .section {
            padding: 52px 18px 80px;
          }

          .title {
            font-size: 44px;
          }

          .intro {
            font-size: 18px;
          }

          .hotelGrid {
            grid-template-columns: 1fr;
          }

          td {
            font-size: 16px;
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
          <a href="/events/betonmast-sommerfest">Program</a>
          <a href="/events/betonmast-sommerfest#praktisk-info">Praktisk info</a>
          <a href="/events/betonmast-sommerfest#musikk">Musikk</a>
          <a href="/events/betonmast-sommerfest#verter">Verter</a>
          <a href="/events/betonmast-sommerfest/rom">Rom</a>
          <a href="/events/betonmast-sommerfest/tippekampen">Tippekampen</a>
          <a href="/events/betonmast-sommerfest/hms">HMS</a>
        </div>
      </nav>

      <section className="section">
        <div className="eyebrow">BETONMAST SOMMERFEST 2026</div>

        <h1 className="title">
          ROM<span>FORDELING</span>
        </h1>

        <p className="intro">
          Her finner du foreløpig romfordeling for hotelloppholdet i Oslo.
          Hotellene er Scandic Helsfyr og K7 Hotel Oslo.
        </p>

        <div className="hotelGrid">
          <div className="hotelCard">
            <h2>Scandic Helsfyr</h2>
            <p>Romfordeling for deltakere som bor på Scandic Helsfyr.</p>
          </div>

          <div className="hotelCard">
            <h2>K7 Hotel Oslo</h2>
            <p>Romfordeling for deltakere som bor på K7 Hotel Oslo.</p>
          </div>
        </div>

        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Rom</th>
                <th>Hotell</th>
                <th>Person 1</th>
                <th>Person 2</th>
              </tr>
            </thead>

            <tbody>
              {rooms.map((room, index) => (
                <tr key={index}>
                  <td className="roomNumber">{room.rom || '—'}</td>
                  <td className="hotelName">{room.hotell}</td>
                  <td>{room.person1}</td>
                  <td>{room.person2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="note">
          Romfordelingen oppdateres fortløpende. Dersom du ikke finner navnet
          ditt her ennå, kommer det i neste oppdatering.
        </div>
      </section>
    </main>
  );
}
