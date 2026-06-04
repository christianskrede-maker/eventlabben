import Hero from './components/Hero';
import Organizers from './components/Organizers';
import FestivalMap from './components/FestivalMap';

export default function Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#1f2a24',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Hero />
      <Organizers />
      <FestivalMap />
    </main>
  );
}
