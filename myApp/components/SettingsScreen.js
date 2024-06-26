import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const { theme, toggleTheme, currentTheme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Text style={[styles.title, { color: currentTheme.text }]}>Settings</Text>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('Language')}>
        <Text style={[styles.text, { color: currentTheme.text }]}>Language</Text>
        <Ionicons name="chevron-forward" size={24} color={currentTheme.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('Profile')}>
        <Text style={[styles.text, { color: currentTheme.text }]}>My Profile</Text>
        <Ionicons name="chevron-forward" size={24} color={currentTheme.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('ContactUs')}>
        <Text style={[styles.text, { color: currentTheme.text }]}>Contact Us</Text>
        <Ionicons name="chevron-forward" size={24} color={currentTheme.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('ChangePassword')}>
        <Text style={[styles.text, { color: currentTheme.text }]}>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} color={currentTheme.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Text style={[styles.text, { color: currentTheme.text }]}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color={currentTheme.text} />
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: currentTheme.text }]}>Theme</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 70,
    textAlign: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
