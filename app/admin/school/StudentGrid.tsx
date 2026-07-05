import StudentCard from './StudentCard';
import type { Student } from './types';

type StudentGridProps = {
  students: Student[];
};

export default function StudentGrid({ students }: StudentGridProps) {
  if (students.length === 0) {
    return (
      <p
        style={{
          color: '#666',
          marginTop: 20,
        }}
      >
        Ingen skoleelever funnet.
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
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  );
}