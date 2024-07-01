import { useState, useEffect } from 'react';

function createTheme(isDark) {
  if (isDark) {
    return {
      background: '#000',
      color: '#fff',
    };
  } else {
    return {
      background: '#fff',
      color: '#000',
    };
  }
}

function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('isDark');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const theme = createTheme(isDark);

  return [theme, isDark, toggleTheme];
}

export default useTheme;
