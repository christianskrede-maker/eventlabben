'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import type { Student, StudentStatus } from '../types';

type Props = {
  student: Student;
};

export default function EditStudentForm({ student }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    child_name: student.child_name || '',
    guardian_name: student.guardian_name || '',
    school: student.school || '',
    email: student.email || '',
    phone: student.phone || '',
    notes: student.notes || '',
    delivered: student.delivered ?? false,
    status: (student.status ?? 'ny') as StudentStatus,
  });

  async function saveStudent() {
    setSaving(true);

    const { error } = await supabase
      .from('festival_school')
      .update({
        child_name: form.child_name,
        guardian_name: form.guardian_name,
        school: form.school,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
        delivered: form.delivered,
        status: form.status,
      })
      .eq('id', student.id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert('Elev lagret!');

    router.push('/admin/school');
    router.refresh();
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveStudent();
      }}
      style={{
        marginTop: 30,
        display: 'grid',
        gap: 20,
      }}
    >
      <Input
        label="Elev"
        value={form.child_name}
        onChange={(value) => setForm({ ...form, child_name: value })}
      />

      <Input
        label="Foresatt"
        value={form.guardian_name}
        onChange={(value) => setForm({ ...form, guardian_name: value })}
      />

      <Input
        label="Skole"
        value={form.school}
        onChange={(value) => setForm({ ...form, school: value })}
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
              status: e.target.value as StudentStatus,
            })
          }
          style={input}
        >
          <option value="ny">Ny</option>
          <option value="kontaktet">Kontaktet</option>
          <option value="ferdig">Ferdig</option>
        </select>
      </label>

      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <input
          type="checkbox"
          checked={form.delivered}
          onChange={(e) =>
            setForm({
              ...form,
              delivered: e.target.checked,
            })
          }
        />

        Pakke utlevert
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