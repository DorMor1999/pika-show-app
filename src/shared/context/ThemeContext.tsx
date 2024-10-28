import React, { createContext, useState } from 'react';

// Define the type for the ThemeContextProvider's props.
// It expects 'children', which can be any valid React node.
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// Define the type for the context value, which includes both
// the current theme and a function to toggle the theme.
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create the ThemeContext with a default value for both theme and toggleTheme.
// Initially, the theme is 'light', and toggleTheme is a placeholder function.
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Define the ThemeContextProvider component.
// This component will wrap children components with ThemeContext, providing theme control.
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  // Set up state to manage the theme, defaulting to 'light'.
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme between 'light' and 'dark'.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Set the value of ThemeContext to include the current theme and the toggleTheme function.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
