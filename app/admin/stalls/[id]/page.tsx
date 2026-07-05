import Link from 'next/link';
import PageHeader from '../../../../components/admin/PageHeader';
import { supabase } from '../../../../lib/supabase';
import EditStallForm from './EditStallForm';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Props = {
  params: {
    id: string;
  };
};

export default async function StallPage({ params }: Props) {
  const { data: stall, error } = await supabase
    .from('festival_stalls')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !stall) {
    return (
      <main
        style={{
          maxWidth: '800px',
          margin: '40px auto',
          padding: '20px',
        }}
      >
        <PageHeader
          title="Fant ikke boden"
          description="Denne boden eksisterer ikke eller kunne ikke hentes fra databasen."
        />

        <Link
          href="/admin/stalls"
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
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
      }}
    >
      <Link
        href="/admin/stalls"
        style={{
          color: '#31583a',
          textDecoration: 'none',
        }}
      >
        ← Tilbake til oversikten
      </Link>

      <PageHeader
        title={`Rediger bod ${stall.stall_number}`}
        description="Oppdater selger, kontaktinformasjon, beskrivelse og status."
      />

      <EditStallForm stall={stall} />
    </main>
  );
}