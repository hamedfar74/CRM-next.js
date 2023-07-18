import React, { createContext, useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../../styles/themes/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const selectedTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeContext;
