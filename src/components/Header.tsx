'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './Avatar';

const menu = [
  { href: '/', icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: '/search', icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: '/new', icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="flex justify-between items-center px-10 py-5 sticky top-0 bg-white border-b z-10">
      <Link href="/">
        <h1 className="text-2xl font-bold">Instantgram</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-3 text-2xl">
          {menu.map(item => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
