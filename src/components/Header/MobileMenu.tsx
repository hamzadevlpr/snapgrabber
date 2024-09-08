import React from 'react';
import classNames from 'classnames';
import { ChevronDown, X } from 'lucide-react';
import Logo from '@/components/Header/Logo';
import ThemeSwitcher from '@/components/Header/ThemeSwitcher';
import LanguageSelector from '@/components/Header/LanguageSelector';
import NavLink from '@/components/Header/NavLink';

const MobileMenu = ({
    isOpen,
    onToggle,
    toggleDropdown,
    links,
}: {
    isOpen: boolean;
    onToggle: () => void;
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
    links: { name: string; url: string }[];
}) => (
    isOpen ? (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50">
            {/* Top Bar */}
            <div className="flex justify-between items-center p-4">
                <Logo />
                <div className="flex items-center space-x-4">
                    <ThemeSwitcher />
                    <LanguageSelector />
                    <button
                        onClick={onToggle}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <X />
                    </button>
                </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col space-y-4 px-4 mt-6">
                <NavLink href="#">Download Facebook Videos</NavLink>
                <button
                    onClick={toggleDropdown}
                    className="pl-4 flex items-center text-gray-600 hover:text-gray-900"
                >
                    More
                    <ChevronDown
                        size={16}
                        color="#16A34A"
                    />
                </button>
                <div className={classNames('mt-2 transition-all ml-8')}>
                    <ul className="space-y-2">
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    href={link.url}
                                    className="text-sm w-full rounded-md bg-green-50"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : null
);

export default MobileMenu;
