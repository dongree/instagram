'use client';

import Link from 'next/link';
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePlusSquare,
  AiFillPlusSquare,
} from 'react-icons/ai';

import { BiSearch, BiSolidSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-10 py-5 sticky top-0 bg-white">
      <h1 className=" text-2xl font-bold">Instantgram</h1>
      <nav className="flex items-center gap-3 text-2xl">
        <Link href="/">
          {pathname === '/' ? <AiFillHome /> : <AiOutlineHome />}
        </Link>
        <Link href="/search">
          {pathname === '/search' ? <BiSolidSearch /> : <BiSearch />}
        </Link>
        <Link href="/new">
          {pathname === '/new' ? <AiFillPlusSquare /> : <AiOutlinePlusSquare />}
        </Link>
        <Link
          href="/"
          className="text-lg rounded-lg p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        >
          <span className="w-full h-full bg-white rounded-lg p-1">Sign in</span>
        </Link>
      </nav>
    </header>
  );
}
