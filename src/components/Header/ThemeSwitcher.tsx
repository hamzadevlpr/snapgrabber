import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = ({ isDarkTheme, toggleTheme }: {
    isDarkTheme?: boolean;
    toggleTheme?: () => void;
}) => (
    <button onClick={toggleTheme} className="flex items-center text-gray-600 hover:text-gray-900">
        {isDarkTheme ? <Sun /> : <Moon />}
    </button>
);

export default ThemeSwitcher;
