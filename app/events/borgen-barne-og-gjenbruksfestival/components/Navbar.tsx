export default function Navbar() {
  const links = [
    { label: 'Program', href: '#program' },
    { label: 'Kart', href: '#kart' },
    { label: 'Salgsboder', href: '#market' },
    { label: 'Standplasser', href: '#stands' },
    { label: 'Foodtruck', href: '#foodtruck' },
    { label: 'Miljø', href: '#waste' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#31583a',
        padding: '12px 20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
        }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
