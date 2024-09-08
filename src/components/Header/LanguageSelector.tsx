'use client';
import React, { useState } from 'react';
import { FlagIcon, FlagIconCode } from 'react-flag-kit';
import Dropdown from '@/components/Header/Dropdown';

interface Language {
    code: FlagIconCode;
    name: string;
}

const languages: Language[] = [
    { code: 'US', name: 'English' },
    { code: 'FR', name: 'French' },
    { code: 'ES', name: 'Spanish' },
    { code: 'DE', name: 'German' },
    { code: 'IT', name: 'Italian' },
];

const LanguageSelector: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language);
    };

    return (
        <Dropdown
            width='fit'
            buttonLabel={
                <>
                    <FlagIcon code={selectedLanguage.code} size={20} />
                    <span className="ml-1">{selectedLanguage.name}</span>
                </>
            }
        >
            <ul>
                {languages.map(language => (
                    <li key={language.code}>
                        <button
                            onClick={() => handleLanguageSelect(language)}
                            className="flex items-center px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100 w-full text-left"
                        >
                            {language.name}
                        </button>
                    </li>
                ))}
            </ul>
        </Dropdown>
    );
};

export default LanguageSelector;
