'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';

type Volunteer = {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  shift: string | null;
  task: string | null;
  notes: string | null;
  status: string | null;
};

export default function EditVolunteerForm({
  volunteer,
}: {
  volunteer: Volunteer;
}) {
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: volunteer.name || '',
    email: volunteer.email || '',
    phone: volunteer.phone || '',
    shift: volunteer.shift || '',
    task: volunteer.task || '',
    notes: volunteer.notes || '',
    status: volunteer.status || 'ikke_tildelt',
  });

  async function saveVolunteer() {
    setSaving(true);

    const { error } = await supabase
      .from('festival_volunteers')
      .update({
        name: form.name,
        email: form.email,
        phone: form.phone,
        shift: form.shift,
        task: form.task,
        notes: form.notes,
        status: form.status,
      })
      .eq('id', volunteer.id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert('Frivillig lagret!');

    router.refresh();
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveVolunteer();
      }}
      style={{
        marginTop: 30,
        display: 'grid',
        gap: 20,
      }}
    >
      <Input
        label="Navn"
        value={form.name}
        onChange={(value) => setForm({ ...form, name: value })}
      />

      <Input
        label="E-post"
        value={form.email}
        onChange={(value) => setForm({ ...form, email: value })}
      />

      <Input
        label="Telefon"
        value={form.phone}
        onChange={(value) => setForm({ ...form, phone: value })}
      />

      <Input
        label="Oppgave"
        value={form.task}
        onChange={(value) => setForm({ ...form, task: value })}
      />

      <Input
        label="Vakt"
        value={form.shift}
        onChange={(value) => setForm({ ...form, shift: value })}
      />

      <label>
        Notater

        <textarea
          rows={5}
          value={form.notes}
          onChange={(e) =>
            setForm({
              ...form,
              notes: e.target.value,
            })
          }
          style={textarea}
        />
      </label>

      <label>
        Status

        <select
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value,
            })
          }
          style={input}
        >
          <option value="ikke_tildelt">Ikke tildelt</option>
          <option value="aktiv">Aktiv</option>
          <option value="ferdig">Ferdig</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={saving}
        style={{
          background: '#31583a',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: 14,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        {saving ? 'Lagrer...' : 'Lagre'}
      </button>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label>
      {label}

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={input}
      />
    </label>
  );
}

const input: React.CSSProperties = {
  width: '100%',
  padding: 12,
  marginTop: 8,
  border: '1px solid #ccc',
  borderRadius: 8,
};

const textarea: React.CSSProperties = {
  ...input,
  resize: 'vertical',
};