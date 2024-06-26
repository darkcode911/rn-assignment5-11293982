import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  const cardDetails = {
    number: '4562 1122 4595 7852',
    name: 'AR Jonson',
    expiry: '24/2000'
  };

  return (
    <ScrollView style={styles.container}>
      <CardComponent cardDetails={cardDetails} />
      {/* Place for Transaction List */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
});

export default HomeScreen;
