export default function EventsPage() {
  const events = [
    {
      title: "Betonmast Sommerfest",
      date: "22. juni 2026",
      location: "Oslo",
      slug: "betonmast-sommerfest",
    },
    {
      title: "Asker Høyre Årsmøte",
      date: "14. februar 2026",
      location: "Asker",
      slug: "asker-hoyre-arsmote",
    },
    {
      title: "Valgkamp Kickoff",
      date: "5. august 2026",
      location: "Drammen",
      slug: "valgkamp-2026",
    },
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <div style={styles.hero}>
          <div style={styles.badge}>EVENTS</div>

          <h1 style={styles.title}>
            Arrangementer
          </h1>

          <p style={styles.lead}>
            Moderne eventopplevelser med NFC,
            digitale arrangementssider og smarte løsninger.
          </p>
        </div>

        <div style={styles.grid}>
          {events.map((event) => (
            <a
              key={event.slug}
              href={`/events/${event.slug}`}
              style={styles.card}
            >
              <div style={styles.cardTop}>
                <span style={styles.date}>
                  {event.date}
                </span>

                <span style={styles.location}>
                  {event.location}
                </span>
              </div>

              <h2 style={styles.cardTitle}>
                {event.title}
              </h2>

              <p style={styles.cardText}>
                Åpne arrangementsside →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "80px 24px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  hero: {
    textAlign: "center",
    marginBottom: "70px",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    marginBottom: "24px",
    fontWeight: 700,
  },

  title: {
    fontSize: "72px",
    margin: 0,
    marginBottom: "20px",
    fontWeight: 900,
  },

  lead: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "22px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.75)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },

  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "28px",
    padding: "30px",
    textDecoration: "none",
    color: "white",
    transition: "0.2s",
    backdropFilter: "blur(10px)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "24px",
    color: "rgba(255,255,255,0.6)",
    fontSize: "14px",
  },

  date: {},

  location: {},

  cardTitle: {
    fontSize: "32px",
    marginTop: 0,
    marginBottom: "14px",
  },

  cardText: {
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.6,
  },
};
