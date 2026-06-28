import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-900">
          Dr. Sweety Pal
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <Link href="/" className="text-black font-bold hover:text-blue-700">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="text-black font-bold hover:text-blue-700">
              About
            </Link>
          </li>

          <li>
            <Link href="/research" className="text-black font-bold hover:text-blue-700">
              Research
            </Link>
          </li>

          <li>
            <Link href="/projects" className="text-black font-bold hover:text-blue-700">
              Projects
            </Link>
          </li>

          <li>
            <Link href="/publications" className="text-black font-bold hover:text-blue-700">
              Publications
            </Link>
          </li>

          <li>
            <Link href="/contact" className="text-black font-bold hover:text-blue-700">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}