import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const ModalButtons = ({closeButton}) => {
  return(
    <View
      style={styles.containerIcons}
    >
      <TouchableOpacity
        onPress={closeButton}
      >
        <Ionicons 
          style={styles.closeIcon}
          name='close'
          size={32} 
          color='white'
        />
      </TouchableOpacity>
      <View
        style={styles.containerSocial}
      >
        <Ionicons 
          name='share-outline'
          size={32} 
          color='white'
        />
        <Ionicons 
          name='heart-outline'
          size={32} 
          color='white'
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  containerSocial: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default ModalButtons;