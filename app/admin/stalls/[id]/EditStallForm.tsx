'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { supabase } from '../../../../lib/supabase';

type Stall = {
  id: string;
  stall_number: string | number | null;
  seller_name: string | null;
  email: string | null;
  phone: string | null;
  description: string | null;
  status: string | null;
};

export default function EditStallForm({ stall }: { stall: Stall }) {
  const router = useRouter();

  const [sellerName, setSellerName] = useState(stall.seller_name || '');
  const [email, setEmail] = useState(stall.email || '');
  const [phone, setPhone] = useState(stall.phone || '');
  const [description, setDescription] = useState(stall.description || '');
  const [status, setStatus] = useState(stall.status || 'ledig');

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setMessage('');

    const result = await supabase
      .from('festival_stalls')
      .update({
        seller_name: sellerName,
        email,
        phone,
        description,
        status,
      })
      .eq('id', stall.id)
      .select();

    console.log('UPDATE RESULT:', result);

    setSaving(false);

    if (result.error) {
      setMessage(`Kunne ikke lagre: ${result.error.message}`);
      return;
    }

    if (!result.data || result.data.length === 0) {
      setMessage(
        'Ingen rad ble oppdatert. Dette betyr at databasen ikke fant riktig bod-id.'
      );
      return;
    }

    setMessage('Lagret! Oppdateringen er skrevet til databasen.');
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSave}
      style={{
        marginTop: 30,
        border: '1px solid #ddd',
        borderRadius: 12,
        padding: 24,
        background: '#fff',
        display: 'grid',
        gap: 18,
      }}
    >
      <label>
        <strong>Bodnummer</strong>
        <input value={stall.stall_number ?? ''} disabled style={inputStyle} />
      </label>

      <label>
        <strong>Selger</strong>
        <input
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label>
        <strong>E-post</strong>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label>
        <strong>Telefon</strong>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label>
        <strong>Beskrivelse</strong>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          style={inputStyle}
        />
      </label>

      <label>
        <strong>Status</strong>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={inputStyle}
        >
          <option value="ledig">Ledig</option>
          <option value="reservert">Reservert</option>
          <option value="opptatt">Opptatt</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={saving}
        style={{
          padding: '14px 18px',
          borderRadius: 10,
          border: 'none',
          background: '#31583a',
          color: '#fff',
          fontWeight: 700,
          cursor: saving ? 'not-allowed' : 'pointer',
        }}
      >
        {saving ? 'Lagrer...' : 'Lagre endringer'}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  marginTop: 8,
  padding: 12,
  border: '1px solid #ccc',
  borderRadius: 8,
  fontSize: 16,
};