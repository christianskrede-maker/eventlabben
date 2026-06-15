'use client';

export default function RomPage({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug !== 'betonmast-sommerfest') {
    return <div>Fant ikke arrangementet</div>;
  }

  const k7Rooms = [
    ['Ole Bergersen', ''],
    ['Emma Stiansen', 'Eva Schuster'],
    ['Stine Krigsstrøm', 'Kirsten Slotte Birkeland'],
    ['Yvonne Sørem', ''],
    ['Amund Blomkvist', 'Anders Bertheussen'],
    ['Anders Mandt', 'Andreas Narverud'],
    ['Carl Erik Gjersøe', ''],
    ['Kristian Gjestemoen', ''],
    ['Henrik Hermann', 'Håvard Føske'],
    ['Per Kristian Hegg', ''],
    ['Ole Gunnar Meland Hansen', 'Lars Bettum Stuen'],
    ['Pål Frenvik Sveen', ''],
    ['Øyvind Grødem', 'Sondre Fristad Aas'],
    ['Trygve Ygre Fjeld', 'Tom Rickard Holm'],
    ['Leif Raustein', 'Andreas Wahl Espeseth'],
    ['Trond Nordseter', ''],
  ];

  const scandicRooms = [
    ['Morten Solum', ''],
    ['Hannie Evensen', ''],
    ['Mari Landa Ericsson', ''],
    ['Christoffer Henriksen', ''],
    ['Pål Farmen', ''],
    ['Rune Allum', ''],
    ['Frode Kristiansen', 'Hans-Asbjørn Gunnerød'],
    ['Johan Swanberg', 'Jøran Horntvedt'],
    ['Kenneth Bredesen', 'Lars Gundersen Waale'],
    ['Lars Mendonca Fuhre', 'Magnus Hoff'],
    ['Marius Røgeberg Evensen', 'Mathias Bjune'],
    ['Rolf Jacobsen Blaasvær', ''],
    ['Stian Hilliges Bergsveen', 'Truls Dahl Wiese'],
    ['Rune Aas', 'Eirik Ryvænge Larsen'],
    ['Kristian Hoel Dahl', 'Torstein Dahle'],
    ['Christopher Carlsen', 'Eirik Trulsen Bakken'],
    ['Mats Trollsås', 'Espen Bråten'],
    ['Harald Verpe Dyrrdal', 'Jon Sverre Roberg'],
    ['Christopher Bjønness', 'Henrik Øren Lundh'],
  ];

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
          max-width: 820px;
          margin-bottom: 38px;
        }

        .infoBox {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 24px;
          padding: 26px;
          color: #ddd;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 54px;
        }

        .addressGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-bottom: 54px;
        }

        .addressCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 24px;
          padding: 26px;
        }

        .addressCard h2 {
          color: #ffd500;
          font-size: 26px;
          margin: 0 0 10px;
        }

        .addressCard p {
          color: #ddd;
          font-size: 18px;
          line-height: 1.5;
          margin: 0 0 18px;
        }

        .mapBtn {
          display: inline-block;
          background: #ffd500;
          color: black;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
        }

        .hotelSection {
          margin-top: 60px;
        }

        .hotelSection h2 {
          color: #ffd500;
          font-size: 38px;
          margin-bottom: 24px;
          font-weight: 900;
        }

        .roomGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
        }

        .roomCard {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,213,0,0.22);
          border-radius: 22px;
          padding: 22px;
          min-height: 78px;
        }

        .roomCard strong {
          display: block;
          font-size: 20px;
          margin-bottom: 8px;
        }

        .roomCard span {
          color: #ffd500;
          font-size: 18px;
        }

        .note {
          margin-top: 54px;
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

          .addressGrid {
            grid-template-columns: 1fr;
          }

          .hotelSection h2 {
            font-size: 30px;
          }

          .roomCard strong {
            font-size: 18px;
          }

          .roomCard span {
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
          Her finner du hvilket hotell du skal bo på og eventuell romkamerat.
          Endelig romnummer tildeles ved innsjekk på hotellet.
        </p>

        <div className="infoBox">
          Listen under viser hotell og romfordeling. Faktisk romnummer får du
          ved innsjekk.
        </div>

        <div className="addressGrid">
          <div className="addressCard">
            <h2>K7 Hotel Oslo</h2>
            <p>
              Rådhusgata / Kongens gate 7
              <br />
              0153 Oslo
            </p>
            <a
              className="mapBtn"
              href="https://www.google.com/maps/search/?api=1&query=Kongens%20gate%207%200153%20Oslo"
              target="_blank"
              rel="noreferrer"
            >
              Åpne kart
            </a>
          </div>

          <div className="addressCard">
            <h2>Scandic Helsfyr</h2>
            <p>
              Innspurten 7
              <br />
              0663 Oslo
            </p>
            <a
              className="mapBtn"
              href="https://www.google.com/maps/search/?api=1&query=Innspurten%207%200663%20Oslo"
              target="_blank"
              rel="noreferrer"
            >
              Åpne kart
            </a>
          </div>
        </div>

        <div className="hotelSection">
          <h2>K7 HOTEL OSLO</h2>

          <div className="roomGrid">
            {k7Rooms.map((room, index) => (
              <div className="roomCard" key={`k7-${index}`}>
                <strong>{room[0]}</strong>
                {room[1] && <span>{room[1]}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="hotelSection">
          <h2>SCANDIC HELSFYR</h2>

          <div className="roomGrid">
            {scandicRooms.map((room, index) => (
              <div className="roomCard" key={`scandic-${index}`}>
                <strong>{room[0]}</strong>
                {room[1] && <span>{room[1]}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="note">
          Romfordelingen oppdateres ved behov. Ta kontakt med arrangør dersom
          noe ser feil ut.
        </div>
      </section>
    </main>
  );
}
