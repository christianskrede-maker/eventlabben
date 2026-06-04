export default function Navbar() {
  const links = [
    { label: 'Kart', href: '#kart' },
    { label: 'Program', href: '#program' },
    { label: 'Mat', href: '#foodtruck' },
    { label: 'Boder', href: '#market' },
    { label: 'Stands', href: '#stands' },
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
          gap: '10px',
          padding: '12px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <a
          href="#top"
          style={{
            color: '#fff',
            fontWeight: 800,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            paddingRight: '8px',
          }}
        >
          Borgen
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
              background: 'rgba(255,255,255,0.12)',
              fontSize: '14px',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
