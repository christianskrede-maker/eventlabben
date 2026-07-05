import Link from 'next/link';
import PageHeader from '../../../../components/admin/PageHeader';
import { supabase } from '../../../../lib/supabase';
import EditVolunteerForm from './EditVolunteerForm';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Props = {
  params: {
    id: string;
  };
};

export default async function VolunteerPage({ params }: Props) {
  const { data: volunteer, error } = await supabase
    .from('festival_volunteers')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !volunteer) {
    return (
      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
        <PageHeader
          title="Fant ikke frivillig"
          description="Denne frivillige eksisterer ikke eller kunne ikke hentes fra databasen."
        />

        <Link href="/admin/volunteers" style={{ color: '#31583a', textDecoration: 'none' }}>
          ← Tilbake til oversikten
        </Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <Link href="/admin/volunteers" style={{ color: '#31583a', textDecoration: 'none' }}>
        ← Tilbake til oversikten
      </Link>

      <PageHeader
        title={`Rediger ${volunteer.name || 'frivillig'}`}
        description="Oppdater kontaktinformasjon, oppgave, vakt og status."
      />

      <EditVolunteerForm volunteer={volunteer} />
    </main>
  );
}