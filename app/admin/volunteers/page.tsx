import PageHeader from '../../../components/admin/PageHeader';
import AdminStats from '../../../components/admin/AdminStats';
import VolunteerGrid from './VolunteerGrid';
import NewVolunteerButton from './NewVolunteerButton';
import { getAllVolunteers } from '../../../lib/volunteers';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function VolunteersPage() {
  const volunteers = await getAllVolunteers();

  const total = volunteers.length;
  const aktive = volunteers.filter((v) => v.status === 'aktiv').length;
  const ikkeTildelt = volunteers.filter((v) => v.status === 'ikke_tildelt').length;
  const ferdige = volunteers.filter((v) => v.status === 'ferdig').length;

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: '40px auto',
        padding: 20,
      }}
    >
      <PageHeader
        title="Frivillige"
        description="Administrer alle frivillige under festivalen."
      />

      <AdminStats
        stats={[
          { label: 'Totalt', value: total },
          { label: 'Aktive', value: aktive, color: '#2e7d32' },
          { label: 'Ikke tildelt', value: ikkeTildelt, color: '#f9a825' },
          { label: 'Ferdige', value: ferdige, color: '#1976d2' },
        ]}
      />

      <NewVolunteerButton />

      <VolunteerGrid volunteers={volunteers} />
    </main>
  );
}