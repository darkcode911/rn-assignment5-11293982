import React, { useState, useMemo } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { ThemeContext } from './theme/ThemeContext';

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = useState('light');

  const themeData = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
