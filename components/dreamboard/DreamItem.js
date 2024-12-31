import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const DreamItem = ({ title, description, imageUrl, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.itemContainer}>
      <Image source={{ uri: imageUrl }} style={styles.dreamboardImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{description}</Text>
    </TouchableOpacity>
  );
};

export default DreamItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#e1bee7",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  dreamboardImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4a148c",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#4a148c",
    textAlign: "center",
    marginBottom: 10,
  },
});
