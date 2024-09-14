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
        <Dropdown buttonLabel="More">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.url} className="w-52 text-xs">
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </Dropdown>
    );
};

export default DropdownMenu;
