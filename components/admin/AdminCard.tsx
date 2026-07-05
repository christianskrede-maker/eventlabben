import { ReactNode } from 'react';

type AdminCardProps = {
  children: ReactNode;
};

export default function AdminCard({
  children,
}: AdminCardProps) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: 14,
        padding: 24,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
    >
      {children}
    </div>
  );
}