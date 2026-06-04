export default function Navbar() {
  const links = [
    { label: 'Kart', href: '#kart' },
    { label: 'Program', href: '#program' },
    { label: 'Foodtruck', href: '#foodtruck' },
    { label: 'Salgsboder', href: '#market' },
    { label: 'Standplasser', href: '#stands' },
    { label: 'Miljø', href: '#waste' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: '#31583a',
        borderBottom: '3px solid #4f6f52',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 16px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        <a
          href="#top"
          style={{
            color: '#fff',
            fontWeight: 800,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            marginRight: '12px',
          }}
        >
          🦌 Borgen Festival
        </a>

        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              padding: '8px 12px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.08)',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
