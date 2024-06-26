import React, { createContext, useState, useContext } from 'react';
import { StatusBar, View } from 'react-native';

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  circle: '#e0e0e0',
  tabBarBackground: '#ffffff',
  tabBarText: '#000000',
};

const darkTheme = {
  background: '#191e39',
  text: '#ffffff',
  circle: '#ffffff',
  tabBarBackground: '#191e39',
  tabBarText: '#ffffff',
};

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  currentTheme: lightTheme,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      <View style={{ flex: 1, backgroundColor: currentTheme.background }}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
