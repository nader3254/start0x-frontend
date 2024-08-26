// import DarkLogo from './assets/logo_dark.png';
// import LightLogo from './assets/logo_white.png';


import { useState, useEffect } from 'react';

const Logo = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Assuming you have a way to detect the theme, e.g., from a context or directly from the DOM
    const theme = document.documentElement.classList.contains('dark');
    setIsDarkTheme(theme);
  }, []);

  return (
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src={isDarkTheme ? '/public/logo_dark.png' : '/public/logo_light.png'}
        className="h-8"
        alt="Flowbite Logo"
      />
    </a>
  );
};

export default Logo;

