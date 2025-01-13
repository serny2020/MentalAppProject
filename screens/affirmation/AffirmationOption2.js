import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
// import * as ImagePicker from "expo-image-picker";

const Affirmations = ({ navigation }) => {
  const [images, setImages] = useState([null, null, null, null, null, null]);

  const handleAddImage = async (index) => {
    // const result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [1, 1],
    //   quality: 1,
    // });

    // if (!result.canceled) {
    //   const newImages = [...images];
    //   newImages[index] = result.uri;
    //   setImages(newImages);
    // }
  };

  const handleDoneOption1 = () => {
    const filledImages = images.filter((image) => image !== null);
    if (filledImages.length === 0) {
      Alert.alert("No Images", "Please add at least one image.");
    } else {
      Alert.alert("Images Saved", "Your affirmation images have been saved!");
      navigation.goBack();
    }
  };

  const handleDoneOption2 = () => {
    Alert.alert("Done", "Affirmation saved!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDoneOption1}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>You have two options to Add Affirmation Images</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Option 1 */}
        <Text style={styles.optionTitle}>Option 1:</Text>
        <Text style={styles.instruction}>
          Add up to 6 of your favorite affirmation quotes from our database:
        </Text>

        {/* Image Slots */}
        <View style={styles.imageGridOption1}>
          {images.map((uri, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.imageBox,
                uri ? styles.imageBoxFilled : null,
              ]}
              onPress={() => handleAddImage(index)}
            >
              {uri ? (
                <Image source={{ uri }} style={styles.image} />
              ) : (
                <Text style={styles.imagePlaceholder}>click to add image</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Option 2 */}
        <Text style={styles.optionTitle}>Option 2:</Text>
        <Text style={styles.subtitle}>Build your own affirmation here:</Text>

        {/* Guided Affirmation */}
        <Text style={styles.label}>• Guided Affirmation</Text>
        <TouchableOpacity
          style={[styles.addBox, { backgroundColor: "#ADD8E6" }]}
          onPress={() => navigation.navigate("GuidedAffirmation")}
        >
          <Text style={styles.addText}>click to add</Text>
        </TouchableOpacity>

        {/* Write Your Own Affirmation */}
        <Text style={styles.label}>• Write an affirmation for yourself</Text>
        <TouchableOpacity
          style={[styles.addBox, { backgroundColor: "#B9FBC0" }]}
          onPress={() => navigation.navigate("WriteAffirmation")}
        >
          <Text style={styles.addText}>click to add</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA", // Light pink background
  },
  fixedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    backgroundColor: "#F8D7DA", // Light pink background

  },
  scrollContent: {
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  instruction: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  imageGridOption1: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageBox: {
    width: "45%",
    aspectRatio: 1,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  imageBoxFilled: {
    borderColor: "#000",
  },
  imagePlaceholder: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  addBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 8,
    marginBottom: 24,
  },
  addText: {
    fontSize: 16,
    color: "#000",
  },
});

export default Affirmations;
