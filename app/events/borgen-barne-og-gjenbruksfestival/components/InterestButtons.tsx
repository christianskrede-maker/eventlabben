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
      <div style={buttonGridStyle}>
        <button onClick={() => setPopup('sales')} style={buttonStyle}>
          Meld interesse for salgsplass
        </button>

        <button onClick={() => setPopup('volunteer')} style={buttonStyle}>
          Bli frivillig
        </button>

        <button onClick={() => setPopup('contact')} style={buttonStyle}>
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