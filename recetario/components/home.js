import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HorizontalList from './horizontalList';

const Home = () => {
  return(
    <View style={styles.container}>
      <HorizontalList 
        items={recipes}
        title='Trending'
      />
      <HorizontalList 
        items={recipes}
        title='Recent'
        customWidth={200}
      />
    </View>
  );
};

const recipes = [
  {
    name: 'item 1'
  },
  {
    name: 'item 2'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 3'
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;