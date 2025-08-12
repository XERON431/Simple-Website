import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">CharityFund</h1>
      <div className="space-x-4 text-blue-600">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/game">Game</Link>
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/donate">Donate</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}