import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const isDarkTheme = resolvedTheme === 'dark';

    return (
        <button onClick={toggleTheme} className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-50  hover:dark:text-green-400">
            {isDarkTheme ? <Sun /> : <Moon />}
        </button>
    );
};

export default ThemeSwitcher;
