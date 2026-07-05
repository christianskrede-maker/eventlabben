import Link from 'next/link';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Organizers from './components/Organizers';
import FestivalMap from './components/FestivalMap';
import Program from './components/Program';
import Foodtruck from './components/Foodtruck';
import Market from './components/Market';
import Waste from './components/Waste';
import Contact from './components/Contact';

export default function Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#1f2a24',
        fontFamily: 'Inter, Arial, Helvetica, sans-serif',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Organizers />
      <FestivalMap />
      <Program />
      <Foodtruck />
      <Market />
      <Waste />
      <Contact />

      <div style={adminLinkWrapperStyle}>
        <Link href="/admin" style={adminLinkStyle}>
          Administrasjon
        </Link>
      </div>
    </main>
  );
}

const adminLinkWrapperStyle = {
  textAlign: 'center',
  padding: '0 20px 40px',
} as const;

const adminLinkStyle = {
  fontSize: '12px',
  color: '#8a958b',
  textDecoration: 'none',
} as const;