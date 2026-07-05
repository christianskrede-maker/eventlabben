import VolunteerCard from './VolunteerCard';
import type { Volunteer } from './types';

type VolunteerGridProps = {
  volunteers: Volunteer[];
};

export default function VolunteerGrid({
  volunteers,
}: VolunteerGridProps) {
  if (volunteers.length === 0) {
    return (
      <p
        style={{
          color: '#666',
          marginTop: 20,
        }}
      >
        Ingen frivillige funnet.
      </p>
    );
  }

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 20,
        marginTop: 20,
      }}
    >
      {volunteers.map((volunteer) => (
        <VolunteerCard
          key={volunteer.id}
          volunteer={volunteer}
        />
      ))}
    </section>
  );
}