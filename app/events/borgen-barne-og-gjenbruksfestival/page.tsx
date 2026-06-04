import Hero from './components/Hero';

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
    </main>
  );
}
