import Hero from './components/Hero';
import Organizers from './components/Organizers';
import FestivalMap from './components/FestivalMap';
import Program from './components/Program';
import Foodtruck from './components/Foodtruck';
import Market from './components/Market';
import Stands from './components/Stands';
import Waste from './components/Waste';
import Contact from './components/Contact';

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
      <Program />
      <Foodtruck />
      <Market />
      <Stands />
      <Waste />
      <Contact />
    </main>
  );
}
