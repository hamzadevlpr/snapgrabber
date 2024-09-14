'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import NavLink from './NavLink';
import { Menu } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prev => !prev);
    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

    const navLinks = [
        { name: 'Download Video Instagram', url: '#' },
        { name: 'Download Video Tiktok', url: '#' },
        { name: 'How to', url: '#' },
        { name: 'Download Video twitter', url: '#' },
        { name: 'Download Video Threads', url: '#' },
    ];

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className='shadow-xl dark:shadow-green-900'>
            <nav className='max-w-7xl mx-auto bg-white p-4 dark:bg-[#181C14]'>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <Logo />
                        <div className="hidden md:flex items-center space-x-6">
                            <NavLink href="#" className="text-gray-600 dark:text-gray-50 hover:text-gray-900">Download Facebook Videos</NavLink>
                            <DropdownMenu links={navLinks} />
                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <ThemeSwitcher />
                        <LanguageSelector />
                        <button onClick={toggleMobileMenu} className={`md:hidden text-gray-600 hover:text-gray-900 ${isMobileMenuOpen ? 'absolute top-10 right-10' : ''}`}>
                            <Menu />
                        </button>
                    </div>
                </div>

                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onToggle={toggleMobileMenu}
                    isDropdownOpen={isDropdownOpen}
                    toggleDropdown={toggleDropdown}
                    links={navLinks}
                />
            </nav>
        </section>

    );
};

export default Navbar;
