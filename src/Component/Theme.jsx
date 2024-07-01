import React, { useState } from 'react';

const ThemeComponent = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = {
    background: isDarkMode ? '#000' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
  };

  return (
    <div style={{ ...theme, minHeight: '100vh', padding: '20px' }}>
      <button onClick={toggleTheme}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      {children}
    </div>
  );
};

export default ThemeComponent;
