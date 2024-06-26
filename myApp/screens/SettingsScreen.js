import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../theme/ThemeContext';

const SettingsScreen = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text>Theme: {theme}</Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={(value) => setTheme(value ? 'dark' : 'light')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SettingsScreen;
