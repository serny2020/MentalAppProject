import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import { AffirmationContext } from "../../context/AffirmationContext";

const DeleteOrReplaceImagesScreen = ({ navigation }) => {
  const { selectedAffirmations, deleteAffirmation, setSelectedAffirmations } =
    useContext(AffirmationContext);
  const [localAffirmations, setLocalAffirmations] = useState([]);

  // Create a fixed grid of size 6
  const gridData = Array.from({ length: 6 }, (_, index) => {
    const affirmation = selectedAffirmations[index];
    // If affirmation exists but is marked for deletion, render as placeholder
    if (affirmation && localAffirmations.includes(affirmation.id)) {
      return { id: `placeholder-${index}`, placeholder: true };
    }
    return affirmation || { id: `placeholder-${index}`, placeholder: true }; // Render existing item or placeholder
  });

  const handleDelete = (id) => {
    if (!localAffirmations.includes(id)) {
      setLocalAffirmations((prev) => [...prev, id]);
    } else {
      console.log(`Item with id ${id} is already marked for deletion.`);
    }
  };

  const handleDone = () => {
    console.log("Context before deletion:", selectedAffirmations);
    console.log("IDs to delete:", localAffirmations);

    // Remove items with matching IDs from the context
    setSelectedAffirmations((prev) =>
      prev.filter((item) => !localAffirmations.includes(item.id))
    );

    console.log("Context after deletion:", selectedAffirmations);

    // Clear the localAffirmations state and navigate back
    setLocalAffirmations([]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/affirmation/click.png')} style={styles.checkbox} />
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <Text style={styles.instructionText}>
        Click on X to delete or replace images:
      </Text>

      {/* Image Grid */}
      <FlatList
        data={gridData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            {!item.placeholder && (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={styles.deleteButtonText}>X</Text>
              </TouchableOpacity>
            )}
            <ImageBackground
              source={!item.placeholder ? item.backgroundImage : null}
              style={[
                styles.imagePlaceholder,
                !item.placeholder && styles.imageBackground,
              ]}
              imageStyle={styles.image}
            >
              <Text
                style={[
                  styles.imageText,
                  item.placeholder ? styles.placeholderText : styles.quoteText,
                ]}
              >
                {item.placeholder ? "Empty" : item.quote}
              </Text>
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
    backgroundColor: "#F8D7DA", // Light pink background
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
    aspectRatio: 1.5, // Keeps a consistent height-to-width ratio
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D3D3D3", // Light gray for placeholder
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imageBackground: {
    backgroundColor: "transparent", // Remove placeholder background for images
  },
  image: {
    borderRadius: 8,
    resizeMode: "cover",
  },
  placeholderText: {
    fontSize: 16,
    color: "#A9A9A9", // Light gray for placeholders
  },
  quoteText: {
    color: "#FFF",
    fontSize: 12,
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
    backgroundColor: "#FF6961", // Light red for delete button
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
