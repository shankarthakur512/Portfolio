"use client"

import { useEffect, useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load the theme preference on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'dark' || (!savedMode && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Listen for system changes to theme
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('theme')) { // Only react to system changes if there's no saved preference
        const newPreference = e.matches ? 'dark' : 'light';
        setDarkMode(newPreference === 'dark');
        document.documentElement.classList.toggle('dark', newPreference === 'dark');
      }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemThemeChange);

    // Clean up event listener on unmount
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Toggle dark mode manually
  const toggleDarkMode = () => {
    const newMode = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', newMode); // Save preference
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-black dark:text-white text-2xl"
    >
      {darkMode ? <IoSunnyOutline /> : <IoIosMoon />}
    </button>
  );
};

export default DarkModeToggle;
