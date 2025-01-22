import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { AffirmationContext } from "../../context/AffirmationContext";

const DeleteOrReplaceImagesScreen = ({ navigation }) => {
  const { selectedAffirmations, deleteAffirmation } = useContext(AffirmationContext);

  const handleDelete = (index) => {
    deleteAffirmation(index); // Use the context function to delete
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.checkbox}>✔️</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <Text style={styles.instructionText}>
        Click on X to delete or replace images:
      </Text>

      {/* Image Grid */}
      <FlatList
        data={selectedAffirmations}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(index)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
            <ImageBackground
              source={item.backgroundImage}
              style={styles.imagePlaceholder}
              imageStyle={styles.image}
            >
              <Text style={styles.imageText}>{item.quote}</Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  checkbox: {
    fontSize: 24,
    color: "#000",
  },
  instructionText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    position: "relative",
  },
  imagePlaceholder: {
    width: "100%",
    height: 100,
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    borderRadius: 8,
    resizeMode: "cover",
  },
  imageText: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
    backgroundColor: "#FF6961", // Light red
    borderRadius: 50,
    padding: 4,
  },
  deleteButtonText: {
    fontSize: 12,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default DeleteOrReplaceImagesScreen;
