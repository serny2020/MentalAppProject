import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";

const CollagingDreamsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const handleOpenModal = (section) => {
    setCurrentSection(section);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setCurrentSection("");
  };

  const handleSelectFromAlbum = () => {
    setModalVisible(false);
    navigation.navigate("AlbumSelectionScreen");
  };

  const handleSelectFromRecommendation = () => {
    setModalVisible(false);
    navigation.navigate("RecommendationScreen");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Have fun with collaging your dreams!</Text>
        <TouchableOpacity>
          <Text style={styles.heart}>❤️</Text>
        </TouchableOpacity>
      </View>

      {/* Dream House */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => handleOpenModal("Dream House")}
      >
        <Text style={styles.sectionTitle}>Dream House:</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Select up to 4 pictures included in your ideal house
          </Text>
        </View>
      </TouchableOpacity>

      {/* Dream Life */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => handleOpenModal("Dream Life")}
      >
        <Text style={styles.sectionTitle}>Dream Life: school, family, work, etc</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Select up to 4 pictures included in your ideal life
          </Text>
        </View>
      </TouchableOpacity>

      {/* Dream Social Circle */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => handleOpenModal("Dream Social Circle")}
      >
        <Text style={styles.sectionTitle}>Dream Social Circle:</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Select up to 4 pictures included in your ideal social circle
          </Text>
        </View>
      </TouchableOpacity>

      {/* Wishlist */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => handleOpenModal("Wishlist")}
      >
        <Text style={styles.sectionTitle}>Wishlist:</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            Make your own wishlist with selected pictures!
          </Text>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {`Select for ${currentSection}`}
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSelectFromAlbum}
            >
              <Text style={styles.modalButtonText}>Select from your album</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSelectFromRecommendation}
            >
              <Text style={styles.modalButtonText}>Select from recommendation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBDCFD", // Light purple background
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    flex: 1,
  },
  heart: {
    fontSize: 20,
    color: "#000",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  optionButton: {
    backgroundColor: "#EAD9F7",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  optionText: {
    fontSize: 14,
    color: "#000",
  },
  placeholder: {
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  modalButton: {
    width: "100%",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  modalButtonText: { color: "white", fontSize: 16 },
  modalCloseButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FF4444",
    borderRadius: 5,
    alignItems: "center",
  },
  modalCloseButtonText: { color: "white", fontSize: 16 },
});

export default CollagingDreamsScreen;
