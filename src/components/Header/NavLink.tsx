import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, children, className }: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <Link href={href} className={`sticky top-0 dark:text-gray-50 block px-4 py-2 text-gray-600 hover:dark:text-green-400 ${className}`}>
        {children}
    </Link>
);

export default NavLink;
