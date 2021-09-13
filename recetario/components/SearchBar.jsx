import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return(
    <View
      style={styles.searchBarContainer}
    >
      <Ionicons 
        style={styles.searchIcon}
        name='search'
        size={25} 
        color='#E0D5D9'
      />
      <TextInput 
        style={styles.textInput}
        placeholder='What do you want to eat?'
        placeholderTextColor='#fff'
      />
      <FontAwesome 
        style={styles.microphoneIcon}
        name='microphone' 
        size={25} 
        color='#E0D5D9' 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 50,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1,
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#343435',
    borderRadius: 18,
    paddingLeft: 45,
    paddingRight: 15,
    color: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 9,
    left: 12,
  },
  microphoneIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 16,
  }
});

export default SearchBar;