import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import recommendations from "../../../../data/dreamboard-data"

const CommonTopicsScreen = ({ navigation }) => {
  const [selectedImages, setSelectedImages] = useState([]); // Track selected images

    // Access the template passed from the previous screen
    const { section, template } = route.params || {};

  const handleSelectImage = (image) => {
    if (selectedImages.includes(image)) {
      // Deselect image
      setSelectedImages(selectedImages.filter((img) => img !== image));
    } else {
      // Select image
      setSelectedImages([...selectedImages, image]);
    }
  };

  const renderCategory = (category, images) => (
    <View style={styles.categoryContainer} key={category}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <View style={styles.imageRow}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleSelectImage(image)}>
            <Image
              source={image}
              style={[
                styles.image,
                selectedImages.includes(image) && styles.imageSelected, // Apply style if selected
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  // const handleSubmit = () => {
  //   navigation.navigate("RecommendationScreen", { newPhotos: selectedImages }); // Pass selected images back
  // };

  const handleSubmit = () => {
    navigation.navigate("RecommendationScreen", {
      newPhotos: selectedImages, // Pass selected images
      section,
      template, // Pass the template to the next screen
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
      </View>
      {/* Title on a new line */}
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>
          Here are some common topics recommended for you
        </Text>
      </View>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {recommendations.map((item) =>
          renderCategory(item.category, item.images)
        )}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBDCFD",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  headerTitleContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  content: {
    padding: 16,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  imageRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#D3D3D3",
  },
  imageSelected: {
    borderColor: "#4CAF50", // Green border for selected images
    borderWidth: 3,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CommonTopicsScreen;
