'use client';

import { useState } from 'react';
import PopupForm from './PopupForm';

const imageBasePath =
  '/events/borgen-barne-og-gjenbruksfestival';

export default function Program() {
  const [schoolPopupOpen, setSchoolPopupOpen] = useState(false);

  return (
    <section id="program" style={sectionStyle}>
      <h2 style={headingStyle}>Program</h2>

      <p style={introStyle}>
        Festivalområdet fylles med aktiviteter, musikk, mat og opplevelser for
        hele familien. Flere detaljer og tidspunkt publiseres fortløpende.
      </p>

      <img
        src={`${imageBasePath}/program-musikk.png`}
        alt="Musikk og kultur på festivalen"
        style={heroImageStyle}
      />

      <div style={timelineStyle}>
        <ProgramItem
          title="08.00"
          text="Oppmøte for frivillige."
        />

        <ProgramItem
          title="09.30"
          text="Oppmøte for deltakere med salgsboder og standplasser."
        />

        <ProgramItem
          title="11.00 – Festivalen åpner"
          text="Festivalområdet åpner for publikum. DJ-en starter musikken, aktivitetene åpner og festivaldagen er i gang."
          variant="opening"
        />

        <GrillItem />

        <KongHalvorItem />

        <PhotographerItem />

        <SchoolStartItem
          onRegister={() => setSchoolPopupOpen(true)}
        />
      </div>

      <div style={sectionHeaderStyle}>
        <span style={eyebrowStyle}>
          Aktiviteter og opplevelser
        </span>

        <h3 style={sectionTitleStyle}>
          Dette skjer på festivalen
        </h3>

        <p style={sectionTextStyle}>
          Aktivitetene er gratis. Noen aktiviteter foregår hele dagen, mens
          andre har egne tidspunkt.
        </p>
      </div>

      <div style={activityGridStyle}>
        <ActivityCard
          imageName="program-kritt.png"
          imageLabel="Askers uoffisielle krittmesterskap"
          time="Hele dagen"
          title="Askers uoffisielle krittmesterskap"
          text="Bli med og forvandle Elgplassen til et gigantisk kunstverk. Jo flere farger, streker og mønstre, desto bedre. Klarer vi å tegne opp hele plassen?"
        />

        <ActivityCard
          imageName="program-rebus.png"
          imageLabel="Rebusaktivitet på Elgplassen"
          time="Hele dagen"
          title="Rebus på Elgplassen"
          text="Kom og løs gåter og oppgaver rundt på Elgplassen. Alle som fullfører, får en premie."
        />

        <ActivityCard
          imageName="program-gjenbruksverksted.png"
          imageLabel="Kreativt verksted med gjenbruksmaterialer"
          time="Hele dagen"
          title="Kreativt verksted med Borgen Vel"
          text="Lag egne kunstverk og kreative figurer av gjenbruksmaterialer sammen med Borgen Vel."
        />

        <ActivityCard
          imageName="program-hoppeslott.png"
          imageLabel="Hoppeslott på festivalen"
          time="Hele dagen"
          title="Hoppeslott"
          text="Hopp, lek og ha det gøy i hoppeslottet gjennom hele festivaldagen."
        />

        <ActivityCard
          imageName="program-dj.png"
          imageLabel="DJ og musikk på festivalen"
          time="11.00–16.00"
          title="DJ og musikk"
          text="DJ-en sørger for musikk og god stemning på festivalområdet fra åpning og utover ettermiddagen."
        />

        <ActivityCard
          imageName="program-mariokart.png"
          imageLabel="Mario Kart-turnering"
          time="12.00–16.00"
          title="Mario Kart playoff"
          text="Bli med på Mario Kart med flere spillere og spennende playoff gjennom ettermiddagen."
        />
      </div>

      <div style={{ ...timelineStyle, marginTop: '40px' }}>
        <ProgramItem
          title="18.00"
          text="Festivalen avsluttes. Takk for en hyggelig dag på Elgplassen."
        />
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
  variant = 'default',
}: {
  title: string;
  text: string;
  variant?: 'default' | 'opening';
}) {
  const isOpening = variant === 'opening';

  return (
    <div
      style={{
        ...programItemStyle,
        background: isOpening ? '#fff3d6' : '#f7f8f3',
        border: isOpening
          ? '2px solid #e4b853'
          : '1px solid #dfe8d8',
        boxShadow: isOpening
          ? '0 10px 28px rgba(158, 111, 10, 0.12)'
          : 'none',
      }}
    >
      {isOpening && (
        <span style={openingLabelStyle}>
          Festivalåpning
        </span>
      )}

      <strong
        style={{
          ...programTitleStyle,
          color: isOpening ? '#795500' : '#31583a',
        }}
      >
        {title}
      </strong>

      <div style={programTextStyle}>
        {text}
      </div>
    </div>
  );
}

function GrillItem() {
  return (
    <div style={grillCardStyle}>
      <div style={grillAccentStyle} />

      <div style={grillContentStyle}>
        <span style={grillLabelStyle}>
          Grilling hele dagen
        </span>

        <strong style={grillTitleStyle}>
          Husk å ta med egen mat
        </strong>

        <p style={grillTextStyle}>
          Grillene er tilgjengelige gjennom hele festivaldagen. Ta med maten
          dere ønsker å spise, så kan dere grille selv på festivalområdet.
        </p>

        <p style={grillImportantStyle}>
          Det finnes både felles grill og en egen halalgrill.
        </p>
      </div>
    </div>
  );
}

function KongHalvorItem() {
  return (
    <div style={kongHalvorCardStyle}>
      <div style={kongHalvorImageWrapperStyle}>
        <img
          src={`${imageBasePath}/kong-halvor.png`}
          alt="Graffiti av Kong Halvor"
          style={kongHalvorImageStyle}
        />
      </div>

      <div style={kongHalvorContentStyle}>
        <span style={kongHalvorLabelStyle}>
          12.00 – Graffiti
        </span>

        <strong style={kongHalvorTitleStyle}>
          Kong Halvor maler graffiti på Elgplassen
        </strong>

        <p style={kongHalvorTextStyle}>
          Halvor Harsem, bedre kjent som Kong Halvor, kommer til festivalen og
          starter graffitiarbeidet kl. 12.00. Han vil male videre gjennom dagen,
          slik at publikum kan følge verket fra start til slutt.
        </p>

        <p style={kongHalvorTextStyle}>
          Vi tar også en liten prat med Halvor om oppveksten hans i Huldreveien,
          veien inn i graffitimiljøet, hva han arbeider med i dag og noen av
          prosjektene han har vært involvert i.
        </p>

        <p style={kongHalvorTextStyle}>
          Han har blant annet skrevet boka{' '}
          <strong>
            «Skrotnisse – på skattejakt i Norge: din guide til bruktmarkeder,
            thrifting og samlinger»
          </strong>
          , et tema som passer svært godt inn i årets gjenbruksfestival.
        </p>

        <a
          href="https://konghalvor.blogg.no/"
          target="_blank"
          rel="noopener noreferrer"
          style={kongHalvorLinkStyle}
        >
          Besøk bloggen til Kong Halvor
        </a>
      </div>
    </div>
  );
}

function PhotographerItem() {
  return (
    <div style={photographerCardStyle}>
      <span style={photographerLabelStyle}>
        12.00–14.00 – Fotograf
      </span>

      <strong style={photographerTitleStyle}>
        Kristian Ruvino fotograferer festivalen
      </strong>

      <p style={photographerTextStyle}>
        Fotograf Kristian Ruvino er til stede mellom kl. 12.00 og 14.00 og
        dokumenterer stemningen, aktivitetene og livet på festivalområdet.
      </p>

      <a
        href="https://kristianruvino.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={photographerLinkStyle}
      >
        Se mer av Kristian Ruvinos arbeid
      </a>
    </div>
  );
}

function SchoolStartItem({
  onRegister,
}: {
  onRegister: () => void;
}) {
  return (
    <div style={schoolCardStyle}>
      <div style={schoolContentStyle}>
        <span style={schoolLabelStyle}>
          Skolestart
        </span>

        <strong style={schoolTitleStyle}>
          13.00 – Utdeling av skolestartpakker
        </strong>

        <p style={schoolTextStyle}>
          Vi deler ut skolestartpakker til påmeldte førsteklassinger.
        </p>

        <button
          onClick={onRegister}
          style={buttonStyle}
        >
          Meld på førsteklassing
        </button>

        <p style={smallTextStyle}>
          Har du ikke rukket å melde på barnet? Kom innom festivalen, så
          hjelper vi deg med registreringen.
        </p>
      </div>
    </div>
  );
}

function ActivityCard({
  imageName,
  imageLabel,
  time,
  title,
  text,
}: {
  imageName: string;
  imageLabel: string;
  time: string;
  title: string;
  text: string;
}) {
  return (
    <article style={activityCardStyle}>
      <ProgramImage
        fileName={imageName}
        label={imageLabel}
      />

      <div style={activityContentStyle}>
        <span style={timeLabelStyle}>
          {time}
        </span>

        <h4 style={activityTitleStyle}>
          {title}
        </h4>

        <p style={activityTextStyle}>
          {text}
        </p>
      </div>
    </article>
  );
}

function ProgramImage({
  fileName,
  label,
}: {
  fileName: string;
  label: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!imageFailed) {
    return (
      <img
        src={`${imageBasePath}/${fileName}`}
        alt={label}
        loading="lazy"
        onError={() => setImageFailed(true)}
        style={{
          display: 'block',
          width: '100%',
          height: '210px',
          objectFit: 'cover',
          objectPosition: 'center',
          flexShrink: 0,
          background: '#eef3e9',
        }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      style={{
        ...imagePlaceholderStyle,
        width: '100%',
        height: '210px',
        minHeight: '210px',
      }}
    >
      <strong style={placeholderTitleStyle}>
        Bilde kommer
      </strong>

      <span style={placeholderFileStyle}>
        {fileName}
      </span>
    </div>
  );
}

const sectionStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '80px 20px',
} as const;

const headingStyle = {
  textAlign: 'center',
  fontSize: '36px',
  color: '#31583a',
  marginBottom: '20px',
} as const;

const introStyle = {
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 30px',
  lineHeight: 1.7,
} as const;

const heroImageStyle = {
  width: '100%',
  maxWidth: '650px',
  display: 'block',
  margin: '0 auto 44px',
  borderRadius: '24px',
} as const;

const timelineStyle = {
  display: 'grid',
  gap: '14px',
  maxWidth: '850px',
  margin: '0 auto',
} as const;

const programItemStyle = {
  borderRadius: '18px',
  padding: '20px',
} as const;

const programTitleStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '20px',
} as const;

const programTextStyle = {
  lineHeight: 1.6,
} as const;

const openingLabelStyle = {
  display: 'inline-block',
  background: '#e3b44c',
  color: '#4c3500',
  borderRadius: '999px',
  padding: '6px 12px',
  fontSize: '13px',
  fontWeight: 800,
  marginBottom: '10px',
} as const;

const grillCardStyle = {
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
  background: '#f1f7ed',
  border: '2px solid #6f9664',
  borderRadius: '20px',
  boxShadow: '0 10px 28px rgba(49, 88, 58, 0.1)',
} as const;

const grillAccentStyle = {
  width: '10px',
  background: '#31583a',
  flexShrink: 0,
} as const;

const grillContentStyle = {
  padding: '22px 24px',
} as const;

const grillLabelStyle = {
  display: 'inline-block',
  background: '#31583a',
  color: '#ffffff',
  borderRadius: '999px',
  padding: '6px 12px',
  fontSize: '13px',
  fontWeight: 800,
  marginBottom: '10px',
} as const;

const grillTitleStyle = {
  display: 'block',
  color: '#31583a',
  fontSize: '22px',
  marginBottom: '9px',
} as const;

const grillTextStyle = {
  margin: '0 0 10px',
  lineHeight: 1.65,
} as const;

const grillImportantStyle = {
  margin: 0,
  color: '#31583a',
  fontWeight: 800,
  lineHeight: 1.6,
} as const;

const kongHalvorCardStyle = {
  overflow: 'hidden',
  background: '#f5f0f7',
  border: '2px solid #83628f',
  borderRadius: '20px',
  boxShadow: '0 12px 30px rgba(81, 53, 91, 0.12)',
} as const;

const kongHalvorImageWrapperStyle = {
  width: '100%',
  background: '#222',
} as const;

const kongHalvorImageStyle = {
  display: 'block',
  width: '100%',
  height: 'auto',
  maxHeight: '280px',
  objectFit: 'cover',
  objectPosition: 'center',
} as const;

const kongHalvorContentStyle = {
  padding: '24px',
} as const;

const kongHalvorLabelStyle = {
  display: 'inline-block',
  background: '#65476f',
  color: '#ffffff',
  borderRadius: '999px',
  padding: '6px 12px',
  fontSize: '13px',
  fontWeight: 800,
  marginBottom: '11px',
} as const;

const kongHalvorTitleStyle = {
  display: 'block',
  color: '#31583a',
  fontSize: '23px',
  marginBottom: '12px',
} as const;

const kongHalvorTextStyle = {
  margin: '0 0 12px',
  lineHeight: 1.65,
} as const;

const kongHalvorLinkStyle = {
  display: 'inline-block',
  marginTop: '6px',
  background: '#31583a',
  color: '#ffffff',
  textDecoration: 'none',
  borderRadius: '999px',
  padding: '11px 18px',
  fontSize: '14px',
  fontWeight: 800,
} as const;

const photographerCardStyle = {
  background: '#eef4f6',
  border: '2px solid #8ba7b1',
  borderRadius: '20px',
  padding: '22px 24px',
  boxShadow: '0 10px 28px rgba(59, 89, 102, 0.1)',
} as const;

const photographerLabelStyle = {
  display: 'inline-block',
  background: '#456b78',
  color: '#ffffff',
  borderRadius: '999px',
  padding: '6px 12px',
  fontSize: '13px',
  fontWeight: 800,
  marginBottom: '10px',
} as const;

const photographerTitleStyle = {
  display: 'block',
  color: '#31583a',
  fontSize: '21px',
  marginBottom: '9px',
} as const;

const photographerTextStyle = {
  margin: '0 0 14px',
  lineHeight: 1.65,
} as const;

const photographerLinkStyle = {
  display: 'inline-block',
  background: '#31583a',
  color: '#ffffff',
  textDecoration: 'none',
  borderRadius: '999px',
  padding: '10px 17px',
  fontSize: '14px',
  fontWeight: 800,
} as const;

const schoolCardStyle = {
  background: '#eef5ea',
  border: '2px solid #8baa80',
  borderRadius: '20px',
  padding: '22px',
  boxShadow: '0 10px 30px rgba(49, 88, 58, 0.1)',
} as const;

const schoolContentStyle = {
  width: '100%',
} as const;

const schoolLabelStyle = {
  display: 'inline-block',
  background: '#31583a',
  color: '#ffffff',
  borderRadius: '999px',
  padding: '6px 12px',
  fontSize: '13px',
  fontWeight: 700,
  marginBottom: '10px',
} as const;

const schoolTitleStyle = {
  color: '#31583a',
  display: 'block',
  fontSize: '21px',
  marginBottom: '10px',
} as const;

const schoolTextStyle = {
  margin: 0,
  lineHeight: 1.65,
} as const;

const sectionHeaderStyle = {
  textAlign: 'center',
  maxWidth: '760px',
  margin: '70px auto 30px',
} as const;

const eyebrowStyle = {
  display: 'inline-block',
  background: '#e8f1e3',
  color: '#31583a',
  borderRadius: '999px',
  padding: '7px 14px',
  fontSize: '14px',
  fontWeight: 700,
  marginBottom: '12px',
} as const;

const sectionTitleStyle = {
  color: '#31583a',
  fontSize: '30px',
  margin: '0 0 12px',
} as const;

const sectionTextStyle = {
  margin: 0,
  lineHeight: 1.7,
} as const;

const activityGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
} as const;

const activityCardStyle = {
  background: '#ffffff',
  border: '1px solid #dfe8d8',
  borderRadius: '22px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(49, 88, 58, 0.07)',
} as const;

const activityContentStyle = {
  padding: '22px',
} as const;

const timeLabelStyle = {
  display: 'inline-block',
  background: '#e8f1e3',
  color: '#31583a',
  borderRadius: '999px',
  padding: '6px 11px',
  fontSize: '13px',
  fontWeight: 800,
  marginBottom: '12px',
} as const;

const activityTitleStyle = {
  color: '#31583a',
  fontSize: '19px',
  margin: '0 0 10px',
} as const;

const activityTextStyle = {
  margin: 0,
  lineHeight: 1.65,
} as const;

const imagePlaceholderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  background:
    'linear-gradient(135deg, rgba(232, 241, 227, 0.9), rgba(247, 248, 243, 1))',
  border: '1px dashed #9eb292',
  color: '#31583a',
  padding: '16px',
  textAlign: 'center',
  boxSizing: 'border-box',
} as const;

const placeholderTitleStyle = {
  fontSize: '15px',
} as const;

const placeholderFileStyle = {
  fontSize: '12px',
  color: '#617164',
  wordBreak: 'break-word',
} as const;

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

const smallTextStyle = {
  marginTop: '14px',
  marginBottom: 0,
  fontSize: '15px',
  color: '#555',
} as const;