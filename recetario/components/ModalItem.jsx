import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import BackgroundImage from './BackgroundImage';
import IngredientsList from './IngredientsList';

const CustomModal = ({onClose, isVisible, itemToDisplay}) => {

  return(
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <BackgroundImage 
        item={itemToDisplay}
        title={itemToDisplay.trending ? 'TRENDING' : 'RECENT'}
      /> 
      <IngredientsList 
        item={itemToDisplay}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#282828',
  },
  text: {
    color: '#fff'
  }
});

export default CustomModal;