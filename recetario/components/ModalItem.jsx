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
        closeButton={onClose}
      /> 
      <IngredientsList 
        item={itemToDisplay}
      />
    </Modal>
  );
};

export default CustomModal;