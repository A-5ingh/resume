import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { DefaultTheme } from 'styled-components';
import { themes } from '../data/themeConfig';
import type { ThemeName } from '../data/types';

interface ThemeContextType {
    themeName: ThemeName;
    isDarkMode: boolean;
    toggleTheme: () => void;
    setThemeName: (name: ThemeName) => void;
    currentTheme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    // Initialize from local storage or default
    const [themeName, setThemeNameState] = useState<ThemeName>(() => {
        const saved = localStorage.getItem('themeName');
        return (saved as ThemeName) || 'aurora';
    });

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('isDarkMode');
        return saved ? JSON.parse(saved) : true;
    });

    useEffect(() => {
        localStorage.setItem('themeName', themeName);
    }, [themeName]);

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev: boolean) => !prev);
    };

    const setThemeName = (name: ThemeName) => {
        setThemeNameState(name);
    };

    const currentTheme = isDarkMode ? themes[themeName].dark : themes[themeName].light;

    return (
        <ThemeContext.Provider value={{ themeName, isDarkMode, toggleTheme, setThemeName, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
};
