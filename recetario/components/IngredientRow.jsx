import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientRow = ({ingredient}) => {
  return(
    <View
      style={styles.ingredientRow}
    >
      <View>
        <Text
          style={styles.ingredient}
        >
          {ingredient.name}
        </Text>
      </View>
      <View>
        <Text
          style={styles.ingredient}
        >
          {ingredient.quantity}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientRow: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#323232',
    padding: 8,
    paddingTop: 13,
    paddingBottom: 13,
  },
  ingredient: {
    color: '#fff',
  },
});

export default IngredientRow;