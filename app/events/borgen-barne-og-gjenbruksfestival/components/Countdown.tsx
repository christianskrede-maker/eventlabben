'use client';

import { useEffect, useState } from 'react';

const festivalDate = new Date('2026-08-15T11:00:00+02:00');

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const diff = festivalDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('Festivalen er i gang!');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${days} dager • ${hours} timer • ${minutes} minutter`);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        margin: '0 auto 34px',
        padding: '18px 22px',
        maxWidth: '560px',
        borderRadius: '22px',
        background: '#f4f7f1',
        border: '1px solid #d9e5d1',
        color: '#31583a',
        fontWeight: 800,
      }}
    >
      <div style={{ fontSize: '15px', marginBottom: '6px' }}>
        Festivalen starter om
      </div>
      <div style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>{timeLeft}</div>
    </div>
  );
}