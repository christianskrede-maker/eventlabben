export default function Navbar() {
  const links = [
    { label: 'Til toppen', href: '#hero' },
    { label: 'Festivalkart', href: '#kart' },
    { label: 'Program', href: '#program' },
    { label: 'Mat', href: '#foodtruck' },
    { label: 'Salgsboder', href: '#market' },
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
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '14px 18px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
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
              padding: '10px 16px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.12)',
              fontSize: '15px',
              transition: '0.2s',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}