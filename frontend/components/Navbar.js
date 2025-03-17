// frontend/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">MCP Spotify Server</h1>
        <div>
          <Link href="/">
            <a className="px-4 hover:text-green-300">Home</a>
          </Link>
          <Link href="/login">
            <a className="px-4 hover:text-green-300">Login</a>
          </Link>
          <Link href="/search">
            <a className="px-4 hover:text-green-300">Search</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
