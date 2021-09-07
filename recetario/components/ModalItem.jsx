import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';

const CustomModal = ({onClose, isVisible, itemToDisplay}) => {

  return(
    <Modal
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View
        style={styles.square}
      >
        <Text
          style={styles.text}
        >
          {itemToDisplay.name}
          </Text>
      </View>
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