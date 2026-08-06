'use client';

import { useState } from 'react';
import PopupForm from './PopupForm';
import type { FormType } from '../data/formConfig';

export default function InterestButtons() {
  const [popup, setPopup] = useState<FormType | null>(null);

  function closePopup() {
    setPopup(null);
  }

  return (
    <>
      <div style={volunteerBoxStyle}>
        <span style={volunteerLabelStyle}>
          Vi trenger flere frivillige
        </span>

        <h2 style={volunteerHeadingStyle}>
          Har du noen timer du kan bidra?
        </h2>

        <p style={volunteerIntroStyle}>
          Festivalen lages av mennesker i nærmiljøet, og vi trenger flere som
          kan hjelpe til før, under eller etter arrangementet.
        </p>

        <p style={volunteerTextStyle}>
          Du kan blant annet bidra med rigging, aktiviteter for barna,
          informasjon, grilling, rydding eller andre praktiske oppgaver. Du
          trenger ikke være med hele dagen.
        </p>

        <button
          onClick={() => setPopup('volunteer')}
          style={volunteerButtonStyle}
        >
          Jeg vil hjelpe
        </button>
      </div>

      <div style={buttonGridStyle}>
        <button
          onClick={() => setPopup('sales')}
          style={buttonStyle}
        >
          Meld interesse for salgsplass
        </button>

        <button
          onClick={() => setPopup('contact')}
          style={buttonStyle}
        >
          Ta kontakt
        </button>
      </div>

      {popup && (
        <PopupForm
          key={popup}
          type={popup}
          open={true}
          onClose={closePopup}
        />
      )}
    </>
  );
}

const volunteerBoxStyle = {
  maxWidth: '720px',
  margin: '28px auto 22px',
  padding: '26px',
  background: '#fff3d6',
  border: '2px solid #e4b853',
  borderRadius: '22px',
  boxShadow: '0 12px 32px rgba(158, 111, 10, 0.12)',
} as const;

const volunteerLabelStyle = {
  display: 'inline-block',
  background: '#e3b44c',
  color: '#4c3500',
  borderRadius: '999px',
  padding: '7px 14px',
  marginBottom: '12px',
  fontSize: '14px',
  fontWeight: 800,
} as const;

const volunteerHeadingStyle = {
  color: '#31583a',
  fontSize: 'clamp(25px, 4vw, 34px)',
  lineHeight: 1.15,
  margin: '0 0 14px',
} as const;

const volunteerIntroStyle = {
  maxWidth: '610px',
  margin: '0 auto 14px',
  fontSize: '17px',
  lineHeight: 1.65,
} as const;

const volunteerTextStyle = {
  maxWidth: '610px',
  margin: '0 auto 20px',
  lineHeight: 1.65,
  color: '#4b4b3f',
} as const;

const volunteerButtonStyle = {
  background: '#31583a',
  color: '#ffffff',
  border: 'none',
  borderRadius: '999px',
  padding: '14px 26px',
  fontSize: '16px',
  fontWeight: 800,
  cursor: 'pointer',
  boxShadow: '0 7px 18px rgba(49, 88, 58, 0.18)',
} as const;

const buttonGridStyle = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  flexWrap: 'wrap',
} as const;

const buttonStyle = {
  background: '#31583a',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  padding: '14px 24px',
  fontSize: '16px',
  fontWeight: 700,
  cursor: 'pointer',
} as const;