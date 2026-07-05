import Link from 'next/link';
import type { Volunteer } from './types';

type VolunteerCardProps = {
  volunteer: Volunteer;
};

export default function VolunteerCard({
  volunteer,
}: VolunteerCardProps) {
  const statusColor = {
    aktiv: '#2e7d32',
    ikke_tildelt: '#f9a825',
    ferdig: '#1976d2',
  };

  const statusBackground = {
    aktiv: '#e8f5e9',
    ikke_tildelt: '#fff8e1',
    ferdig: '#e3f2fd',
  };

  return (
    <Link
      href={`/admin/volunteers/${volunteer.id}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: '#222',
      }}
    >
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: 14,
          padding: 20,
          background: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          transition: '0.2s',
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: '#31583a',
          }}
        >
          {volunteer.name || 'Ny frivillig'}
        </h3>

        <p>
          <strong>E-post:</strong>{' '}
          {volunteer.email || 'Ikke registrert'}
        </p>

        <p>
          <strong>Telefon:</strong>{' '}
          {volunteer.phone || 'Ikke registrert'}
        </p>

        <p>
          <strong>Oppgave:</strong>{' '}
          {volunteer.task || 'Ikke tildelt'}
        </p>

        <p>
          <strong>Vakt:</strong>{' '}
          {volunteer.shift || 'Ikke satt'}
        </p>

        <span
          style={{
            display: 'inline-block',
            marginTop: 12,
            padding: '6px 12px',
            borderRadius: 999,
            background: statusBackground[volunteer.status],
            color: statusColor[volunteer.status],
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {volunteer.status.replace('_', ' ')}
        </span>
      </div>
    </Link>
  );
}