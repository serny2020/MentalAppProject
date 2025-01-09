import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
// import * as ImagePicker from "expo-image-picker";

const AffirmationOption1 = ({ navigation }) => {
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

  const handleDone = () => {
    const filledImages = images.filter((image) => image !== null);
    if (filledImages.length === 0) {
      Alert.alert("No Images", "Please add at least one image.");
    } else {
      Alert.alert("Images Saved", "Your affirmation images have been saved!");
      navigation.goBack(); // Navigate back
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Affirmation Images</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Option Title */}
      <Text style={styles.optionTitle}>Option 1:</Text>
      <Text style={styles.instruction}>
        Add up to 6 of your favorite affirmation quotes from our database:
      </Text>

      {/* Image Slots */}
      <View style={styles.imageGrid}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA", // Light pink background
    padding: 16,
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
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
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageBox: {
    width: "30%",
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
});

export default AffirmationOption1;
