'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function NewStudentButton() {
  const router = useRouter();

  async function createStudent() {
    const { data, error } = await supabase
      .from('festival_school')
.insert({
  child_name: '',
  guardian_name: '',
  school: '',
  email: '',
  phone: '',
  notes: '',
  delivered: false,
  status: 'ny',
})
      .select()
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    router.push(`/admin/school/${data.id}`);
  }

  return (
    <button
      type="button"
      onClick={createStudent}
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
      + Ny elev
    </button>
  );
}