import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CategoryGridTile from "../../components/dreamboard/CategoryGridTile"; // Adjust the path to your CategoryGridTile file
import { CATEGORIES } from "../../data/dream-data"; 

const CategoriesScreen = ({ navigation }) => {
    // console.log("Navigation Prop: ", navigation);
    // console.log("Navigation Prop: ", navigation);
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() => {
          // Navigate to the DreamOverview page and pass the category data
          navigation.navigate("DreamOverview", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2} // Two-column grid layout
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: "#e1bee7",
  },
});
