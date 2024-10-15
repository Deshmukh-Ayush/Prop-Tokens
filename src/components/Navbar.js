import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/buy">Buy Tokens</Link></li>
      </ul>
    </nav>
  );
}
