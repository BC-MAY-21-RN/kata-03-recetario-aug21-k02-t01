import React from 'react';
import { ScrollView, View,  Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const HorizontalList = ({items, title, customWidth, customHeight}) => {
  return(
    <View
      style={styles.container}
    >
      <Text
      style={styles.title}
      >
        {title}
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={styles.scrollContainer}
      >
        {items.map((listItem, index) => (
          <ListItem 
            item={listItem} 
            key={index} 
            customWidth={customWidth} 
            customHeight={customHeight} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 5,
    height: 'auto'
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    color: '#D00C50',
  },
  scrollContainer: {
    paddingBottom: 15,
  }
});

export default HorizontalList;