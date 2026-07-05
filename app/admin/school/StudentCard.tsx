import Link from 'next/link';
import type { Student } from './types';

type StudentCardProps = {
  student: Student;
};

export default function StudentCard({ student }: StudentCardProps) {
  const status = student.status ?? 'ny';

  const statusColor = {
    ny: '#f9a825',
    kontaktet: '#1976d2',
    ferdig: '#2e7d32',
  };

  const statusBackground = {
    ny: '#fff8e1',
    kontaktet: '#e3f2fd',
    ferdig: '#e8f5e9',
  };

  return (
    <Link href={`/admin/school/${student.id}`} style={{ display: 'block', textDecoration: 'none', color: '#222' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: 14, padding: 20, background: '#fff' }}>
        <h3 style={{ marginTop: 0, color: '#31583a' }}>
          {student.child_name || 'Ny elev'}
        </h3>

        <p><strong>Foresatt:</strong> {student.guardian_name || 'Ikke registrert'}</p>
        <p><strong>Skole:</strong> {student.school || 'Ikke registrert'}</p>
        <p><strong>E-post:</strong> {student.email || 'Ikke registrert'}</p>
        <p><strong>Telefon:</strong> {student.phone || 'Ikke registrert'}</p>
        <p><strong>Utlevert:</strong> {student.delivered ? 'Ja' : 'Nei'}</p>

        <span
          style={{
            display: 'inline-block',
            marginTop: 12,
            padding: '6px 12px',
            borderRadius: 999,
            background: statusBackground[status],
            color: statusColor[status],
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {status}
        </span>
      </div>
    </Link>
  );
}