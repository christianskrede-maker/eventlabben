import Link from "next/link";
import Image from "next/image";

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <div className="relative h-[320px] w-full overflow-hidden">
        <Image
          src="/events/betonmast-sommerfest/hero-banner.jpg"
          alt="Hero Banner"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          
          <Image
            src="/events/betonmast-sommerfest/betonmast-logo.jpg"
            alt="Betonmast"
            width={260}
            height={80}
            className="mb-6"
          />

          <h1 className="text-5xl font-black uppercase tracking-wide">
            Betonmast Sommerfest
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Fotball-VM, lagånd og sommerfest 2026
          </p>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/90 backdrop-blur">
        <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-4 text-sm font-semibold uppercase tracking-wide">
          
          <Link href="/events/betonmast-sommerfest">
            Hjem
          </Link>

          <Link href="/events/betonmast-sommerfest/program">
            Program
          </Link>

          <Link href="/events/betonmast-sommerfest/praktisk-info">
            Praktisk Info
          </Link>

          <Link href="/events/betonmast-sommerfest/drakter">
            Drakter
          </Link>

          <Link href="/events/betonmast-sommerfest/spotify">
            Spotify
          </Link>

          <Link href="/events/betonmast-sommerfest/tippekampen">
            Tippekampen
          </Link>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        {children}
      </main>
    </div>
  );
}
