// src/screens/MyCardsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyCardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cards</Text>
      {/* Add the cards UI elements based on the design */}
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

export default MyCardsScreen;
