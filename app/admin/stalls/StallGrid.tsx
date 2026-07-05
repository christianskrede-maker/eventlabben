import StallCard from './StallCard';
import type { Stall } from './types';

type StallGridProps = {
  stalls: Stall[];
};

export default function StallGrid({ stalls }: StallGridProps) {
  const sortedStalls = [...stalls].sort(
    (a, b) => Number(a.stall_number) - Number(b.stall_number)
  );

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginTop: '20px',
      }}
    >
      {sortedStalls.map((stall) => (
        <StallCard
          key={stall.id}
          stall={stall}
        />
      ))}
    </div>
  );
}