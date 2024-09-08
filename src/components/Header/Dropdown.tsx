'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
    buttonLabel: React.ReactNode;
    children: React.ReactNode;
    width: string;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, children,width }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    // if click outside dropdown, close it
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.target instanceof Element && !event.target.closest('.relative')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-600 hover:text-gray-900"
            >
                {buttonLabel}
                <ChevronDown
                    size={16}
                    color="#16A34A"
                    className={classNames('ml-1 transition-transform', {
                        'rotate-180': isOpen,
                    })}
                />
            </button>
            <div
                className={classNames(
                    `absolute py-4 mt-2 w-${width} bg-white border border-gray-200 shadow-lg rounded-lg transition-all`,
                    {
                        'opacity-0 pointer-events-none -translate-y-4': !isOpen,
                        'opacity-100 translate-y-0': isOpen,
                    }
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
