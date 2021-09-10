import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import IngredientRow from './IngredientRow';

const IngredientsList = ({item}) => {
  return(
    <View
      style={styles.container}
    >
      <View
        style={styles.containerHeader}
      >
        <Text
          style={styles.header}
        >
          Ingredients
        </Text>
        <Text
          style={styles.header}
        >
          {`for ${item.servings}`}
        </Text>
      </View>
      <ScrollView>
        {
          item.ingredients.map((ingredient, index) => (
            <IngredientRow 
              key={index}
              ingredient={ingredient}
            />
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    flex: 1,
    padding: 20,
  },
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
  header: {
    color: '#fff',
    fontSize: 16,
  },
  ingredient: {
    color: '#fff',
  },
  containerHeader: {
    marginBottom: 15,
  }
});

export default IngredientsList;