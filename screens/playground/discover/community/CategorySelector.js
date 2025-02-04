import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const categories = [
  "I need help", "Addiction", "School", "Friends", "Relationship", "Anxiety",
  "Self-care", "My Story", "Helpful Tips", "Self-harm", "Mental Health",
  "Depression", "Hope", "Health", "Grief", "Family", "Job", "Other",
];

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View>
      <Text style={styles.label}>Add Category:</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === item ? styles.selectedCategory : null
            ]}
            onPress={() => onSelectCategory(item)}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  categoryButton: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#ccc",
  },
  selectedCategory: {
    backgroundColor: "#dab6fc",
    borderColor: "#a77ce7",
  },
//   categoryText: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
});

export default CategorySelector;
