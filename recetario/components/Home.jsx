import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import HorizontalList from './HorizontalList';
import CustomModal from './ModalItem';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const handleShowItem = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  return(
    <View style={styles.container}>
      <HorizontalList 
        items={recipes}
        title='TRENDING'
        handleShowItem={handleShowItem}
      />
      <HorizontalList 
        items={recipes}
        title='RECENT'
        customWidth={190}
        handleShowItem={handleShowItem}
      />
      <CustomModal
        onClose={() => setShowModal(false)}
        itemToDisplay={currentItem}
        isVisible={showModal}
      />
    </View>
  );
};

const recipes = [
  {
    name: 'item 1'
  },
  {
    name: 'Mi receta'
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