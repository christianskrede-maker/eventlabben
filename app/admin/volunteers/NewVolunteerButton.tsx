'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function NewVolunteerButton() {
  const router = useRouter();

  async function createVolunteer() {
    const { data, error } = await supabase
      .from('festival_volunteers')
      .insert({
        name: '',
        email: '',
        phone: '',
        shift: '',
        task: '',
        notes: '',
        status: 'ikke_tildelt',
      })
      .select()
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    router.push(`/admin/volunteers/${data.id}`);
  }

  return (
    <button
      type="button"
      onClick={createVolunteer}
      style={{
        background: '#31583a',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        padding: '12px 18px',
        fontWeight: 700,
        cursor: 'pointer',
        marginBottom: 24,
      }}
    >
      + Ny frivillig
    </button>
  );
}