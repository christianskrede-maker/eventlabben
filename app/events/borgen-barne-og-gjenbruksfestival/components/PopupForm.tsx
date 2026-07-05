'use client';

import { useState } from 'react';
import { formConfig, type FormType } from '../data/formConfig';

type Props = {
  type: FormType;
  open: boolean;
  onClose: () => void;
};

export default function PopupForm({ type, open, onClose }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const config = formConfig[type];

  function closeAndReset() {
    setStatus('idle');
    setAccepted(false);
    onClose();
  }

  if (!open) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type,
        ...data,
      }),
    });

    if (response.ok) {
      setStatus('success');
      setAccepted(false);
    } else {
      setStatus('error');
    }
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={closeAndReset} style={closeStyle}>
          ✕
        </button>

        <h2 style={titleStyle}>{config.title}</h2>

        {status === 'success' ? (
          <div style={successStyle}>
            <strong>{config.successMessage}</strong>

            <button onClick={closeAndReset} style={sendStyle}>
              Lukk
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            {config.fields.map((field) => (
              <FieldInput key={field.name} field={field} />
            ))}

            {type === 'school' && (
              <p style={noteStyle}>
                Dersom du ikke rekker å melde deg på før festivalen kan barnet
                registreres manuelt ved standen under festivaldagen.
              </p>
            )}

            <label style={checkboxStyle}>
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                required
              />

              <span>{config.checkboxText}</span>
            </label>

            {status === 'error' && (
              <p style={errorStyle}>
                Noe gikk galt. Prøv igjen, eller ta kontakt med arrangøren.
              </p>
            )}

            <button
              type="submit"
              disabled={!accepted || status === 'sending'}
              style={{
                ...sendStyle,
                opacity: accepted && status !== 'sending' ? 1 : 0.5,
              }}
            >
              {status === 'sending' ? 'Sender...' : 'Send'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function FieldInput({
  field,
}: {
  field: {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    required?: boolean;
    options?: string[];
  };
}) {
  if (field.type === 'textarea') {
    return (
      <textarea
        name={field.name}
        required={field.required}
        placeholder={field.label}
        style={textareaStyle}
      />
    );
  }

  if (field.type === 'select') {
    return (
      <select name={field.name} required={field.required} style={inputStyle}>
        <option value="">{field.label}</option>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      name={field.name}
      required={field.required}
      type={field.type}
      placeholder={field.label}
      style={inputStyle}
    />
  );
}

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 99999,
} as const;

const modalStyle = {
  width: '95%',
  maxWidth: '620px',
  background: '#fff',
  borderRadius: '24px',
  padding: '30px',
  position: 'relative',
  maxHeight: '90vh',
  overflowY: 'auto',
} as const;

const closeStyle = {
  position: 'absolute',
  right: '18px',
  top: '18px',
  border: 'none',
  background: 'transparent',
  fontSize: '22px',
  cursor: 'pointer',
} as const;

const titleStyle = {
  color: '#31583a',
  marginTop: 0,
} as const;

const formStyle = {
  display: 'grid',
  gap: '16px',
} as const;

const inputStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '12px',
  border: '1px solid #dfe8d8',
  fontSize: '16px',
} as const;

const textareaStyle = {
  ...inputStyle,
  minHeight: '140px',
} as const;

const noteStyle = {
  background: '#f7f8f3',
  padding: 12,
  borderRadius: 12,
  fontSize: 14,
  lineHeight: 1.6,
} as const;

const checkboxStyle = {
  display: 'flex',
  gap: 10,
  alignItems: 'flex-start',
} as const;

const sendStyle = {
  background: '#31583a',
  color: '#fff',
  border: 'none',
  borderRadius: '999px',
  padding: '16px',
  fontWeight: 700,
  cursor: 'pointer',
  fontSize: '16px',
} as const;

const successStyle = {
  display: 'grid',
  gap: '20px',
  lineHeight: 1.7,
} as const;

const errorStyle = {
  color: '#9b1c1c',
  margin: 0,
  fontWeight: 700,
} as const;