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
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleDropdown = () => setDropdownOpen(prev => !prev);
    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

    const navLinks = [
        { name: 'Download Video Instagram', url: '/download-instagram-video' },
        { name: 'Download Video Tiktok', url: '/download-tiktok-video' },
        { name: 'How to', url: '/how-to' },
        { name: 'Download Video twitter', url: '/download-twitter-video' },
        { name: 'Download Video Youtube', url: '/download-youtube-video' },
    ];
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
        <section className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg dark:shadow-green-900' : 'shadow-none'}`}>
            <nav className='max-w-7xl mx-auto bg-white p-4 dark:bg-[#181C14]'>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <Logo />
                        <div className="hidden md:flex items-center space-x-6">
                            <NavLink href="/" className="text-gray-600 dark:text-gray-50 hover:text-gray-900">Download Facebook Videos</NavLink>
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
