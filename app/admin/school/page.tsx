import PageHeader from '../../../components/admin/PageHeader';
import AdminStats from '../../../components/admin/AdminStats';
import StudentGrid from './StudentGrid';
import NewStudentButton from './NewStudentButton';
import { getAllStudents } from '../../../lib/school';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SchoolPage() {
  const students = await getAllStudents();

  const total = students.length;
  const nye = students.filter((s) => s.status === 'ny' || !s.status).length;
  const kontaktet = students.filter((s) => s.status === 'kontaktet').length;
  const ferdige = students.filter((s) => s.status === 'ferdig').length;

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: '40px auto',
        padding: 20,
      }}
    >
      <PageHeader
        title="Skole"
        description="Administrer påmeldinger til skolestartpakker."
      />

      <AdminStats
        stats={[
          {
            label: 'Totalt',
            value: total,
          },
          {
            label: 'Nye',
            value: nye,
            color: '#f9a825',
          },
          {
            label: 'Kontaktet',
            value: kontaktet,
            color: '#1976d2',
          },
          {
            label: 'Ferdige',
            value: ferdige,
            color: '#2e7d32',
          },
        ]}
      />

      <NewStudentButton />

      <StudentGrid students={students} />
    </main>
  );
}