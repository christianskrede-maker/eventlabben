type StatCard = {
  label: string;
  value: number;
  color?: string;
};

type AdminStatsProps = {
  stats: StatCard[];
};

export default function AdminStats({
  stats,
}: AdminStatsProps) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 20,
        marginBottom: 30,
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 14,
            padding: 24,
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#666',
              fontSize: 14,
            }}
          >
            {stat.label}
          </p>

          <h2
            style={{
              marginTop: 10,
              marginBottom: 0,
              color: stat.color ?? '#31583a',
              fontSize: '2rem',
            }}
          >
            {stat.value}
          </h2>
        </div>
      ))}
    </section>
  );
}