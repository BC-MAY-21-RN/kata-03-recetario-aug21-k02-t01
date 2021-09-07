import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({item, customWidth, customHeight}) => {
  return(
    <View
      style={[
        styles.itemContainer,
        {
          width: customWidth || styles.itemContainer.width,
          height: customHeight || styles.itemContainer.height,
        }
      ]}
    >
      <Image 
        style={
          styles.itemImage
        }
        source={{
          uri: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
        }}
      />
      <Text
        style={styles.itemName}
      >
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    height: 105,
    borderRadius: 6,
  },
  itemContainer: {
    width: 130,
    padding: 7,
  },
  itemName: {
    fontSize: 18,
    padding: 0,
    margin: 0,
    marginTop: 5,
    color: '#fff',
  }
});

export default ListItem;