import Link from 'next/link';
import PageHeader from '../../../../components/admin/PageHeader';
import { supabase } from '../../../../lib/supabase';
import EditStudentForm from './EditStudentForm';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Props = {
  params: {
    id: string;
  };
};

export default async function StudentPage({ params }: Props) {
  const { data: student, error } = await supabase
    .from('festival_school')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !student) {
    return (
      <main
        style={{
          maxWidth: 800,
          margin: '40px auto',
          padding: 20,
        }}
      >
        <PageHeader
          title="Fant ikke elev"
          description="Denne skolepåmeldingen eksisterer ikke eller kunne ikke hentes fra databasen."
        />

        <Link
          href="/admin/school"
          style={{
            color: '#31583a',
            textDecoration: 'none',
          }}
        >
          ← Tilbake til oversikten
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: 800,
        margin: '40px auto',
        padding: 20,
      }}
    >
      <Link
        href="/admin/school"
        style={{
          color: '#31583a',
          textDecoration: 'none',
        }}
      >
        ← Tilbake til oversikten
      </Link>

      <PageHeader
        title={`Rediger ${student.child_name || 'elev'}`}
        description="Oppdater elev, foresatt, skole, kontaktinformasjon og status."
      />

      <EditStudentForm student={student} />
    </main>
  );
}