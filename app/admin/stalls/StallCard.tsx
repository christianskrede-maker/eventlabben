import Link from 'next/link';
import StatusBadge from './StatusBadge';
import type { Stall } from './types';

type StallCardProps = {
  stall: Stall;
};

export default function StallCard({ stall }: StallCardProps) {
  return (
    <Link
      href={`/admin/stalls/${stall.id}`}
      style={{
        border: '1px solid #ddd',
        borderRadius: 12,
        padding: 20,
        background: '#fff',
        color: '#111',
        textDecoration: 'none',
        display: 'block',
        transition: 'all 0.2s ease',
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 16,
          color: '#31583a',
        }}
      >
        Bod {stall.stall_number}
      </h3>

      <p>
        <strong>Selger:</strong>{' '}
        {stall.seller_name || 'Ikke registrert'}
      </p>

      <p>
        <strong>E-post:</strong>{' '}
        {stall.email || 'Ikke registrert'}
      </p>

      <p>
        <strong>Telefon:</strong>{' '}
        {stall.phone || 'Ikke registrert'}
      </p>

      <p>
        <strong>Beskrivelse:</strong>{' '}
        {stall.description || 'Ingen beskrivelse'}
      </p>

      <div
        style={{
          marginTop: 18,
        }}
      >
        <StatusBadge status={stall.status} />
      </div>
    </Link>
  );
}