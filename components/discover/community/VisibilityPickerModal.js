import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";

const VisibilityPickerModal = () => {
  const [visibility, setVisibility] = useState("Public");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Button to Open Modal */}
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pickerButtonText}>{visibility} ▼</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Visibility</Text>

            {/* Options */}
            <TouchableOpacity
              style={[
                styles.optionButton,
                visibility === "Public" && styles.selectedOption,
              ]}
              onPress={() => {
                setVisibility("Public");
                setModalVisible(false);
              }}
            >
              <View style={styles.optionRow}>
                <Image
                  source={require("../../../assets/image/discover/community/publicIcon.png")}
                  style={styles.optionImage}
                />
                <Text style={styles.optionText}>Public</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                visibility === "Private" && styles.selectedOption,
              ]}
              onPress={() => {
                setVisibility("Private");
                setModalVisible(false);
              }}
            >
              <View style={styles.optionRow}>
                <Image
                  source={require("../../../assets/image/discover/community/privateIcon.png")}
                  style={styles.optionImage}
                />

                <Text style={styles.optionText}>Private (mood journal)</Text>
              </View>
            </TouchableOpacity>

            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pickerButton: {
    padding: 12, // Controls the button's internal padding (size)
    backgroundColor: "#e0e0e0",
    borderRadius: 8, // Controls the rounded corners
    alignItems: "center",
    minWidth: 80, // Ensures a minimum width
    height: 38,
    marginRight: 30,
  },
  pickerButtonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "80%", // Adjust width to be responsive
    maxWidth: 300, // Ensure it doesn't get too large
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
    width: "100%",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: "#4CAF50", // Highlight selected option
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#d9534f",
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionImage: {
    width: 19, // Adjust width of the image
    height: 19, // Adjust height of the image
    marginRight: 5, // Space between image and text
  },
  optionText: {
    fontSize: 15,
  },
});

export default VisibilityPickerModal;
