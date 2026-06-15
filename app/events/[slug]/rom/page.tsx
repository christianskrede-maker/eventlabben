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
    { rom: '1', hotell: 'K7', person1: 'Lars Fauske', person2: 'Per Anders Muri' },
    { rom: '2', hotell: 'K7', person1: 'Emma Stiansen', person2: 'Eva Schuster' },
    { rom: '3', hotell: 'K7', person1: 'Marie Hammer Iversen', person2: 'Silje Foss Rønning' },
    { rom: '4', hotell: 'K7', person1: 'Yvonne Sørem', person2: 'Ingebjørg Eldevik' },
    { rom: '5', hotell: 'K7', person1: 'Amund Blomkvist', person2: 'Anders Bertheussen' },
    { rom: '6', hotell: 'K7', person1: 'Anders Mandt', person2: 'Andreas Narverud' },
    { rom: '7', hotell: 'K7', person1: 'Andreas Wahl Espeseth', person2: 'Carl Erik Gjersøe' },
    { rom: '8', hotell: 'K7', person1: 'Eivind Kjennerud', person2: 'Emil Ivarsson' },
    { rom: '9', hotell: 'K7', person1: 'Henrik Hermann', person2: 'Håvard Føske' },
    { rom: '10', hotell: 'K7', person1: 'Kristian Gjestemoen', person2: 'Lars Lian Tollnes' },
    { rom: '11', hotell: 'K7', person1: 'Ole Bergersen', person2: 'Ole Gunnar Meland Hansen' },
    { rom: '12', hotell: 'K7', person1: 'Per Kristian Hegg', person2: 'Pål Frenvik Sveen' },
    { rom: '13', hotell: 'K7', person1: 'Sondre Carlsen', person2: 'Sondre Fristad Aas' },
    { rom: '14', hotell: 'K7', person1: 'Trygve Ygre Fjeld', person2: 'Øyvind Grødem' },
    { rom: '15', hotell: 'K7', person1: 'Leif Raustein', person2: 'Tom Rickard Holm' },
    { rom: '16', hotell: 'K7', person1: 'Trond Nordseter', person2: 'Lars Bettum Stuen' },

    { rom: '17', hotell: 'Scandic Helsfyr', person1: 'Peter Sandrup', person2: 'Ole Bjørn Bakke' },
    { rom: '18', hotell: 'Scandic Helsfyr', person1: 'Hannie Evensen', person2: 'Mari Landa Ericsson' },
    { rom: '19', hotell: 'Scandic Helsfyr', person1: 'Stine Krigsstrøm', person2: 'Karolina Miklaszewicz-Szczawinska' },
    { rom: '20', hotell: 'Scandic Helsfyr', person1: 'Christoffer Henriksen', person2: 'Christopher Bjønness' },
    { rom: '21', hotell: 'Scandic Helsfyr', person1: 'Christopher Carlsen', person2: 'Eirik Trulsen Bakken' },
    { rom: '22', hotell: 'Scandic Helsfyr', person1: 'Erik Sætran Gustavsen', person2: 'Espen Bråten' },
    { rom: '23', hotell: 'Scandic Helsfyr', person1: 'Frode Kristiansen', person2: 'Hans-Asbjørn Gunnerød' },
    { rom: '24', hotell: 'Scandic Helsfyr', person1: 'Johan Swanberg', person2: 'Jøran Horntvedt' },
    { rom: '25', hotell: 'Scandic Helsfyr', person1: 'Kenneth Bredesen', person2: 'Lars Gundersen Waale' },
    { rom: '26', hotell: 'Scandic Helsfyr', person1: 'Lars Mendonca Fuhre', person2: 'Magnus Hoff' },
    { rom: '27', hotell: 'Scandic Helsfyr', person1: 'Marius Røgeberg Evensen', person2: 'Mathias Bjune' },
    { rom: '28', hotell: 'Scandic Helsfyr', person1: 'Rolf Jacobsen Blaasvær', person2: 'Rune Allum' },
    { rom: '29', hotell: 'Scandic Helsfyr', person1: 'Stian Hilliges Bergsveen', person2: 'Truls Dahl Wiese' },
    { rom: '30', hotell: 'Scandic Helsfyr', person1: 'Rune Aas', person2: 'Eirik Ryvænge Larsen' },
    { rom: '31', hotell: 'Scandic Helsfyr', person1: 'Kristian Hoel Dahl', person2: 'Torstein Dahle' },
    { rom: '32', hotell: 'Scandic Helsfyr', person1: 'Pål Farmen', person2: 'Henrik Øren Lundh' },
    { rom: '33', hotell: 'Scandic Helsfyr', person1: 'Mats Trollsås', person2: 'Morten Solum' },
    { rom: '34', hotell: 'Scandic Helsfyr', person1: 'Harald Verpe Dyrrdal', person2: 'Jon Sverre Roberg' },
    { rom: '35', hotell: 'Scandic Helsfyr', person1: 'Kirsten Slotte Birkeland', person2: 'Ingvild Svenke Fundli' },
    { rom: '36', hotell: 'Scandic Helsfyr', person1: '', person2: '' },
    { rom: '37', hotell: 'Scandic Helsfyr', person1: '', person2: '' },
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

        .logo { height: 36px; }

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

        .title span { color: #ffd500; }

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

        .empty {
          color: #777;
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

          .logo { height: 48px; }

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
          Her finner du romfordeling for hotelloppholdet i Oslo.
          Hotellene er K7 Hotel Oslo og Scandic Helsfyr.
        </p>

        <div className="hotelGrid">
          <div className="hotelCard">
            <h2>K7 Hotel Oslo</h2>
            <p>Rom 1–16.</p>
          </div>

          <div className="hotelCard">
            <h2>Scandic Helsfyr</h2>
            <p>Rom 17–37.</p>
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
              {rooms.map((room) => (
                <tr key={room.rom}>
                  <td className="roomNumber">{room.rom}</td>
                  <td className="hotelName">{room.hotell}</td>
                  <td className={room.person1 ? '' : 'empty'}>
                    {room.person1 || 'Ledig'}
                  </td>
                  <td className={room.person2 ? '' : 'empty'}>
                    {room.person2 || 'Ledig'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="note">
          Romfordelingen oppdateres ved behov. Ta kontakt med arrangør dersom
          noe ser feil ut.
        </div>
      </section>
    </main>
  );
}
