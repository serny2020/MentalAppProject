import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const DeleteOrReplaceImagesScreen = ({ navigation }) => {
  const [images, setImages] = useState([
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
  ]);

  const handleDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
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
        data={images}
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
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>{item}</Text>
            </View>
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
  imageText: {
    fontSize: 14,
    color: "#A9A9A9",
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
