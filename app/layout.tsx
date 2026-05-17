export const metadata = {
  title: 'EventLabben',
  description: 'Digitale arrangementssider med NFC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
