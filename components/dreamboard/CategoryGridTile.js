import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
    console.log("Rendering CategoryGridTile:", { title, color });
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.gridItem} onPress={onPress}>
          <View style={{ ...styles.container, backgroundColor: color }}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden", // Ensures children are clipped if they exceed the boundaries
    elevation: 5, // Adds shadow for Android
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black", // Adds shadow for iOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  wrapper: {
    flex: 1,
    margin: 10, // Adjust spacing between tiles
  },
});
