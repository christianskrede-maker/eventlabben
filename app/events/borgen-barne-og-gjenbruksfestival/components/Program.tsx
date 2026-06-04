export default function Program() {
  return (
    <section id="program"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '34px',
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
        Festivalområdet er fullt av aktiviteter hele dagen.
        DJ og musikk skaper stemning gjennom hele arrangementet.
        Flere kulturinnslag annonseres fortløpende.
      </p>

      <img
        src="/events/borgen-barne-og-gjenbruksfestival/program-musikk.png"
        alt="Musikk og kultur"
   style={{
  width: '100%',
  maxWidth: '760px',
  display: 'block',
  margin: '0 auto 30px',
  borderRadius: '24px',
}}
      />

      <div
        style={{
          display: 'grid',
          gap: '12px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <ProgramItem
          title="11:00"
          text="Festivalområdet åpner"
        />

        <ProgramItem
          title="Hele dagen"
          text="DJ, musikk, bruktmarked, barneaktiviteter, stands, miljøaktiviteter og grilling"
        />

        <ProgramItem
          title="Kommer"
          text="Kulturinnslag og gjesteopptredener"
        />

        <ProgramItem
          title="18:00"
          text="Festivalen avsluttes"
        />
      </div>
    </section>
  );
}

function ProgramItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: '#f7f8f3',
        border: '1px solid #dfe8d8',
        borderRadius: '16px',
        padding: '18px',
      }}
    >
      <strong
        style={{
          color: '#31583a',
          display: 'block',
          marginBottom: '6px',
        }}
      >
        {title}
      </strong>

      <span>{text}</span>
    </div>
  );
}
