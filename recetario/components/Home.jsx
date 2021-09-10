import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import HorizontalList from './HorizontalList';
import CustomModal from './ModalItem';
import { recipes } from '../data/data.js'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
});

export default Home;