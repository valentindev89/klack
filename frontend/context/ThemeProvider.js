import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { themeDark, themeWhite } from 'styles/themes';
import useDarkMode from 'use-dark-mode';

export default ({ children }) => {
  const { value: isDarkMode } = useDarkMode(false);
  const theme = isDarkMode ? themeDark : themeWhite;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};
