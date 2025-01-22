
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Modal,
  Image,
} from "react-native";
import { AffirmationContext } from "../../context/AffirmationContext";

const AffirmationCollectionScreen = ({ navigation }) => {
  const { selectedAffirmations } = useContext(AffirmationContext); // Access context data
  const [selectedAffirmation, setSelectedAffirmation] = useState(null); // For storing the clicked item
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const handleItemPress = (affirmation) => {
    setSelectedAffirmation(affirmation); // Set the selected item
    setModalVisible(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close the modal
    setSelectedAffirmation(null); // Clear the selected item
  };

  // Fill placeholders for empty slots (up to 6)
  const placeholders = Array.from(
    { length: 6 },
    (_, index) => selectedAffirmations[index] || null
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Affirmation Collection</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DeleteOrReplaceImagesScreen")}
        >
          <Image source={require('../../assets/affirmation/click.png')} style={styles.checkbox} />
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <Text style={styles.instructionText}>
        You can add at most <Text style={styles.boldText}>SIX</Text>{" "}
        affirmations here:
      </Text>
      <View style={styles.grid}>
        {placeholders.map((affirmation, index) => (
          <TouchableOpacity
            key={index}
            style={styles.placeholder}
            onPress={() => affirmation && handleItemPress(affirmation)} // Make clickable only if there's data
          >
            {affirmation ? (
              <ImageBackground
                source={affirmation.backgroundImage}
                style={styles.imageBackground}
                imageStyle={styles.image}
              >
                <Text style={styles.quoteText}>{affirmation.quote}</Text>
              </ImageBackground>
            ) : (
              <Text style={styles.placeholderText}>Empty</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Ready to build your own affirmations?
      </Text>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate("AddAffirmationImages")}
      >
        <Text style={styles.footerButtonText}>Let’s go!</Text>
      </TouchableOpacity>

      {/* Modal for Larger View */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          {selectedAffirmation && (
            <View style={styles.modalContent}>
              {/* Wrapper for Background Image and Quote */}
              <View style={styles.modalImageWrapper}>
                <ImageBackground
                  source={selectedAffirmation.backgroundImage}
                  style={styles.modalImageBackground}
                  imageStyle={styles.modalImage}
                >
                  {/* Centered Quote */}
                  <View style={styles.modalQuoteContainer}>
                    <Text style={styles.modalQuoteText}>
                      {selectedAffirmation.quote}
                    </Text>
                  </View>
                </ImageBackground>
              </View>

              {/* Close Button */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  backButton: {
    fontSize: 24,
    color: "#000",
  },
  checkbox: {
    width: 35, // Example width
    height: 35, // Example height
},  
  instructionText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  placeholder: {
    width: "48%",
    height: 100,
    backgroundColor: "#D3D3D3", // Placeholder color
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    overflow: "hidden",
  },
  placeholderText: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 8,
    resizeMode: "cover",
  },
  footerText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: "#D2A5FF", // Light purple button color
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
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
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "97%",
    height: "80%", // Reduce overall height to accommodate button
    // backgroundColor: "#FFF",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between", // Space between image and button
    paddingVertical: 16,
    marginTop: 50,
    // paddingTop: 50, 
  },
  modalImageWrapper: {
    width: "100%",
    height: "98%", // Limit the height of the image to 80% of the modal content
    marginTop: -10,
    paddingBottom: 20,
  },
  modalImageBackground: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  modalImage: {
    borderRadius: 12,
    resizeMode: "cover",
  },
  modalQuoteContainer: {
    position: "absolute",
    top: "50%", // Center vertically
    transform: [{ translateY: -50 }], // Adjust for the height of the text
    width: "90%",
    alignItems: "center",
  },
  modalQuoteText: {
    color: "#FFA500",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  closeButton: {
    backgroundColor: "#FF6961",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    marginTop: -10,   // Add this to push the button upward
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AffirmationCollectionScreen;
