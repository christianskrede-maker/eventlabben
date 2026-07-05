'use client';

import { useState } from 'react';
import PopupForm from './PopupForm';

export default function Program() {
  const [schoolPopupOpen, setSchoolPopupOpen] = useState(false);

  return (
    <section
      id="program"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '36px',
          color: '#31583a',
          marginBottom: '20px',
        }}
      >
        Program
      </h2>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 30px',
          lineHeight: 1.7,
        }}
      >
        Festivalområdet er fullt av aktiviteter hele dagen. DJ og musikk skaper
        stemning gjennom hele arrangementet. Flere kulturinnslag annonseres
        fortløpende.
      </p>

      <img
        src="/events/borgen-barne-og-gjenbruksfestival/program-musikk.png"
        alt="Musikk og kultur"
        style={{
          width: '100%',
          maxWidth: '650px',
          display: 'block',
          margin: '0 auto 40px',
          borderRadius: '24px',
        }}
      />

      <div
        style={{
          display: 'grid',
          gap: '14px',
          maxWidth: '850px',
          margin: '0 auto',
        }}
      >
        <ProgramItem title="08.00" text="Oppmøte for frivillige." />

        <ProgramItem
          title="09.30"
          text="Oppmøte for deltakere med salgsboder og standplasser."
        />

        <ProgramItem
          title="11.00"
          text="Festivalområdet åpner for publikum."
        />

        <ProgramItem
          title="13.00"
          text="Vi deler ut skolestartpakke til alle påmeldte førsteklassinger."
        >
          <button
            onClick={() => setSchoolPopupOpen(true)}
            style={buttonStyle}
          >
            Meld på førsteklassing
          </button>

          <p
            style={{
              marginTop: '14px',
              fontSize: '15px',
              color: '#555',
            }}
          >
            Har du ikke rukket å melde på barnet? Kom innom festivalen – vi
            hjelper deg med registreringen.
          </p>
        </ProgramItem>

        <ProgramItem
          title="Hele dagen"
          text="DJ, musikk, bruktmarked, barneaktiviteter, stands, miljøaktiviteter, grilling, foodtruck og gratis is til barna."
        />

        <ProgramItem
          title="Kommer"
          text="Kulturinnslag og gjesteopptredener annonseres fortløpende."
        />

        <ProgramItem title="18.00" text="Festivalen avsluttes." />
      </div>

      <PopupForm
        type="school"
        open={schoolPopupOpen}
        onClose={() => setSchoolPopupOpen(false)}
      />
    </section>
  );
}

function ProgramItem({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: '#f7f8f3',
        border: '1px solid #dfe8d8',
        borderRadius: '18px',
        padding: '20px',
      }}
    >
      <strong
        style={{
          color: '#31583a',
          display: 'block',
          marginBottom: '8px',
          fontSize: '20px',
        }}
      >
        {title}
      </strong>

      <div style={{ lineHeight: 1.6 }}>{text}</div>

      {children}
    </div>
  );
}

const buttonStyle = {
  marginTop: '18px',
  background: '#31583a',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  padding: '12px 22px',
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: '15px',
} as const;