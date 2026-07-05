'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    setLoading(true);
    setError('');

    const response = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setError('Feil passord.');
      setLoading(false);
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <main style={pageStyle}>
      <form onSubmit={handleLogin} style={cardStyle}>
        <h1 style={titleStyle}>EventLabben</h1>
        <p style={textStyle}>Logg inn for å administrere festivalen.</p>

        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={inputStyle}
          autoFocus
        />

        {error && <p style={errorStyle}>{error}</p>}

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? 'Logger inn...' : 'Logg inn'}
        </button>
      </form>
    </main>
  );
}

const pageStyle = {
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  background: '#f7f8f3',
  padding: '20px',
} as const;

const cardStyle = {
  width: '100%',
  maxWidth: '420px',
  background: '#fff',
  border: '1px solid #dfe8d8',
  borderRadius: '22px',
  padding: '34px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  display: 'grid',
  gap: '16px',
} as const;

const titleStyle = {
  margin: 0,
  color: '#31583a',
  fontSize: '32px',
} as const;

const textStyle = {
  margin: 0,
  color: '#444',
} as const;

const inputStyle = {
  padding: '14px 16px',
  borderRadius: '12px',
  border: '1px solid #cfd8c6',
  fontSize: '16px',
} as const;

const buttonStyle = {
  padding: '14px 16px',
  borderRadius: '12px',
  border: 'none',
  background: '#31583a',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
  fontSize: '16px',
} as const;

const errorStyle = {
  color: '#9b1c1c',
  fontWeight: 700,
  margin: 0,
} as const;