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

const AffirmationCollection = ({navigation}) => {
  const [images, setImages] = useState([null, null, null, null, null, null]);
  const [selectedImages, setSelectedImages] = useState([]);

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

  const handleSelectImage = (uri) => {
    if (selectedImages.includes(uri)) {
      setSelectedImages(selectedImages.filter((image) => image !== uri));
    } else if (selectedImages.length < 3) {
      setSelectedImages([...selectedImages, uri]);
    } else {
      Alert.alert("Limit Reached", "You can only select up to 3 images.");
    }
  };

  const handleConfirm = () => {
    if (selectedImages.length === 0) {
      Alert.alert("No Selection", "Please select 1-3 affirmations to confirm.");
    } else {
      Alert.alert("Affirmations Confirmed", `You selected ${selectedImages.length} affirmations.`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Affirmation Collection</Text>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <View style={styles.checkIcon}>
            <Text style={styles.checkIconText}>✔</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <Text style={styles.instruction}>
        You can add at most <Text style={styles.bold}>SIX</Text> affirmations here:
      </Text>

      {/* Image Slots */}
      <View style={styles.imageGrid}>
        {images.map((uri, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageBox}
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

      {/* Footer Instruction */}
      <Text style={styles.footerInstruction}>
        Ready to build your own affirmations?{" "}
        <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('AffirmationOption2')}
    >
      <Text style={styles.highlight}>Let’s go!</Text>
    </TouchableOpacity>      </Text>
      <Text style={styles.footerInstruction}>
        Pick <Text style={styles.bold}>1-3</Text> as your daily affirmations:{" "}
        <Text style={styles.highlight} onPress={handleConfirm}>
          Confirm
        </Text>
      </Text>

      {/* Selected Images */}
      <View style={styles.selectedContainer}>
        {selectedImages.map((uri, index) => (
          <View key={index} style={styles.selectedImageBox}>
            <Image source={{ uri }} style={styles.selectedImage} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleSelectImage(uri)}
            >
              <Text style={styles.removeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  checkIcon: {
    backgroundColor: "#000",
    borderRadius: 16,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  checkIconText: {
    color: "#FFF",
    fontSize: 18,
  },
  instruction: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  highlight: {
    color: "#A020F0",
    textDecorationLine: "underline",
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  imageBox: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
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
  footerInstruction: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
  },
  selectedContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  selectedImageBox: {
    marginHorizontal: 4,
    alignItems: "center",
  },
  selectedImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  removeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF6961",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  removeButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default AffirmationCollection;
