'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import StallGrid from '../../../app/admin/stalls/StallGrid';
import type { Stall, StallStatus } from '../../../app/admin/stalls/types';

type StallDashboardProps = {
  stalls: Stall[];
};

type FilterStatus = 'alle' | StallStatus;

export default function StallDashboard({ stalls }: StallDashboardProps) {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterStatus>('alle');

  const availableStalls = stalls
    .filter((stall) => stall.status === 'ledig')
    .sort((a, b) => Number(a.stall_number) - Number(b.stall_number));

  const filteredStalls = useMemo(() => {
    return stalls.filter((stall) => {
      const searchText = [
        stall.stall_number,
        stall.seller_name,
        stall.email,
        stall.phone,
        stall.description,
        stall.status,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesFilter = filter === 'alle' || stall.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [stalls, search, filter]);

  function handleNewSeller() {
    if (availableStalls.length === 0) {
      alert('Det finnes ingen ledige boder.');
      return;
    }

    const firstAvailableStall = availableStalls[0];
    router.push(`/admin/stalls/${firstAvailableStall.id}`);
  }

  return (
    <>
      <section
        style={{
          background: '#ffffff',
          border: '1px solid #ddd',
          borderRadius: 14,
          padding: 20,
          marginBottom: 30,
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <input
            type="text"
            placeholder="🔍 Søk etter bod, selger, e-post eller telefon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              minWidth: 260,
              padding: 12,
              border: '1px solid #ccc',
              borderRadius: 8,
              fontSize: 16,
            }}
          />

          <button
            type="button"
            onClick={handleNewSeller}
            style={{
              padding: '12px 18px',
              borderRadius: 8,
              border: 'none',
              background: '#31583a',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            + Ny selger
          </button>
        </div>

        <p
          style={{
            marginTop: 12,
            marginBottom: 0,
            color: '#666',
            fontSize: 14,
          }}
        >
          Ledige boder: <strong>{availableStalls.length}</strong>
        </p>

        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 20,
            flexWrap: 'wrap',
          }}
        >
          <FilterButton active={filter === 'alle'} onClick={() => setFilter('alle')}>
            Alle ({stalls.length})
          </FilterButton>

          <FilterButton active={filter === 'ledig'} onClick={() => setFilter('ledig')}>
            🟢 Ledige
          </FilterButton>

          <FilterButton
            active={filter === 'reservert'}
            onClick={() => setFilter('reservert')}
          >
            🟡 Reserverte
          </FilterButton>

          <FilterButton active={filter === 'opptatt'} onClick={() => setFilter('opptatt')}>
            🔴 Opptatte
          </FilterButton>
        </div>
      </section>

      <p>
        Viser <strong>{filteredStalls.length}</strong> av{' '}
        <strong>{stalls.length}</strong> salgsboder.
      </p>

      <StallGrid stalls={filteredStalls} />
    </>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '8px 14px',
        borderRadius: 999,
        border: active ? '1px solid #31583a' : '1px solid #ccc',
        background: active ? '#e8f5e9' : '#f7f7f7',
        color: active ? '#31583a' : '#333',
        cursor: 'pointer',
        fontWeight: active ? 700 : 500,
      }}
    >
      {children}
    </button>
  );
}