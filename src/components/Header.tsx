import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-orange-600 w-8 h-8 flex items-center justify-center rounded">A</div>
          AI News Daily
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white">Latest</Link>
          <Link href="#" className="hover:text-white">Trending</Link>
          <Link href="#" className="hover:text-white">Archive</Link>
        </nav>
      </div>
    </header>
  );
}
