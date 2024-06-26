// src/screens/StatisticsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      {/* Add the statistics UI elements based on the design */}
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
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default StatisticsScreen;
