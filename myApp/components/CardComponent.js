import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardComponent = ({ cardDetails }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardNumber}>{cardDetails.number}</Text>
      <Text style={styles.cardName}>{cardDetails.name}</Text>
      <Text style={styles.cardExp}>{`Expires ${cardDetails.expiry}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#242A37',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  cardNumber: {
    color: 'white',
    fontSize: 24,
    letterSpacing: 2,
  },
  cardName: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  cardExp: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  }
});

export default CardComponent;
