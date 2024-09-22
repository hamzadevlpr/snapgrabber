'use client';
import React from 'react';
import Dropdown from './Dropdown';
import NavLink from '@/components/Header/NavLink';

interface Link {
    name: string;
    url: string;
}

interface DropdownMenuProps {
    links: Link[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ links }) => {
    return (
        <Dropdown variant='primary' buttonLabel="More">
            <ul className='w-52'>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.url} className="text-xs">
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </Dropdown>
    );
};

export default DropdownMenu;
