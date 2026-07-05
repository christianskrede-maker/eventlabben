import PageHeader from '../../../components/admin/PageHeader';
import AdminStats from '../../../components/admin/AdminStats';
import StallDashboard from '../../../components/admin/stalls/StallDashboard';
import { getAllStalls } from '../../../lib/stalls';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminStalls() {
  const stalls = await getAllStalls();

  const total = stalls.length;
  const ledige = stalls.filter((s) => s.status === 'ledig').length;
  const reserverte = stalls.filter((s) => s.status === 'reservert').length;
  const opptatte = stalls.filter((s) => s.status === 'opptatt').length;

  return (
    <main
      style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '20px',
      }}
    >
      <PageHeader
        title="Salgsboder"
        description="Administrer festivalens salgsplasser. Søk, filtrer og klikk på en bod for å redigere."
      />

      <AdminStats
        stats={[
          { label: 'Totalt', value: total },
          { label: 'Ledige', value: ledige, color: '#2e7d32' },
          { label: 'Reserverte', value: reserverte, color: '#f9a825' },
          { label: 'Opptatte', value: opptatte, color: '#c62828' },
        ]}
      />

      <StallDashboard stalls={stalls} />
    </main>
  );
}