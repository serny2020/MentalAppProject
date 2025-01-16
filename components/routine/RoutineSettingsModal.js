import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RoutineSettingsModal = ({
  isVisible,
  onClose,
  navigation,
}) => {
  const options = [
    {
      label: "Manage My Affirmation Collection",
      icon: "settings-outline",
      onPress: () => {
        onClose();
        navigation.navigate("RoutineNavigator", {
          screen: "AffirmationNavigator",
        });
      },
    },
    {
      label: "Reorder this section",
      icon: "reorder-four-outline",
      onPress: () => {
        // Add your reorder logic here
        onClose();
      },
    },
    {
      label: "Remove this section",
      icon: "close-circle-outline",
      onPress: () => {
        // Add your remove logic here
        onClose();
      },
    },
  ];

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Affirmation Collection</Text>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.modalOption}
              onPress={option.onPress}
            >
              <Ionicons name={option.icon} size={24} color="#555" />
              <Text style={styles.modalOptionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={onClose}
            style={styles.modalCloseButton}
          >
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 10,
    padding: 20,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  modalOptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
    textAlign: "left",
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "#800080",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  modalCloseText: {
    color: "#fff",
    fontWeight: "bold",
  },
};

export default RoutineSettingsModal;
