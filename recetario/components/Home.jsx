import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalList from './HorizontalList';

const Home = () => {
  return(
    <View style={styles.container}>
      <HorizontalList 
        items={recipes}
        title='TRENDING'
      />
      <HorizontalList 
        items={recipes}
        title='RECENT'
        customWidth={190}
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
    backgroundColor: '#282828',
  },
});

export default Home;