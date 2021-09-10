import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import ModalButtons from './ModalButtons';

const BackgroundImage = ({item, title, closeButton}) => {
  return(
    <View
      style={styles.imageContainer}
    >
      <ImageBackground 
        source={{
          uri: item && item.image || 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg' 
        }}
        style={styles.ImageBackground}
        resizeMode='cover'
      >
        <View
          style={styles.imageFilter}
        >
          <ModalButtons 
            closeButton={closeButton}
          />
          <View
            style={styles.textContainer}
          >
            <Text
              style={styles.title}
            >
              {title || 'TRENDING'}
            </Text>
            <Text
              style={styles.name}
            >
              {item && item.name || 'Peperoni Pizza Pockets'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '45%',
    alignContent: 'flex-end',
    backgroundColor: '#282828'
  },
  ImageBackground: {
    flex: 1,
  },
  imageFilter: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#282828',
    opacity: 0.8,
    alignContent: 'flex-end',
    padding: 25,
    paddingBottom: 35,
  },
  textContainer: {
    marginTop: 'auto',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  name: {
    color: '#fff',
    fontSize: 22,
  }
});

export default BackgroundImage;