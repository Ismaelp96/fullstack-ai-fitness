'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { name: 'Chat', path: '/' },
  { name: 'Profile', path: '/profile' },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='p-4 flex flex-row justify-between items-center bg-black text-white'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>Goggins AI</h1>
      </Link>
      <div className='flex gap-x-6 text-lg items-center'>
        {routes.map((route, idx) => (
          <Link
            key={idx}
            href={route.path}
            className={
              pathname === route.path
                ? 'border-b-2 border-yellow-500'
                : 'border-none'
            }
          >
            {route.name}
          </Link>
        ))}
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default Navbar;
