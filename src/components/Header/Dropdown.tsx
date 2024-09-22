'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
    buttonLabel: React.ReactNode;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, children, variant }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => setIsOpen(prev => !prev);

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

    const handleItemClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative z-50">
            <button
                onClick={toggleDropdown}
                className={`flex items-center  ${variant === 'primary' ? 'dark:text-gray-50 text-gray-600 hover:dark:text-green-400 hover:text-gray-900' : 'py-2 px-4 bg-green-300 dark:bg-gray-50 text-gray-800 rounded-md'}`}
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
            {isOpen && (
                <div
                    className={classNames(
                        `w-fullMore absolute py-4 mt-2 bg-white dark:bg-[#181C14] border border-gray-200 shadow-lg rounded-lg transition-all`,
                        {
                            'opacity-0 pointer-events-none -translate-y-4': !isOpen,
                            'opacity-100 translate-y-0': isOpen,
                        }
                    )}
                >
                    <div onClick={handleItemClick}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
