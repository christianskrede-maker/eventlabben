import type { StallStatus } from './types';

type StatusBadgeProps = {
  status: StallStatus | string | null;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const normalizedStatus = (status || 'ledig').toLowerCase();

  const config = {
    ledig: {
      label: 'Ledig',
      emoji: '🟢',
      background: '#e8f5e9',
      color: '#1b5e20',
      border: '#c8e6c9',
    },
    reservert: {
      label: 'Reservert',
      emoji: '🟡',
      background: '#fff8e1',
      color: '#7a5b00',
      border: '#ffecb3',
    },
    opptatt: {
      label: 'Opptatt',
      emoji: '🔴',
      background: '#ffebee',
      color: '#8a1c1c',
      border: '#ffcdd2',
    },
  };

  const current =
    config[normalizedStatus as keyof typeof config] ?? {
      label: 'Ukjent',
      emoji: '⚪',
      background: '#f5f5f5',
      color: '#555',
      border: '#ddd',
    };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        borderRadius: 999,
        background: current.background,
        color: current.color,
        border: `1px solid ${current.border}`,
        fontSize: 14,
        fontWeight: 700,
      }}
    >
      <span>{current.emoji}</span>
      <span>{current.label}</span>
    </span>
  );
}