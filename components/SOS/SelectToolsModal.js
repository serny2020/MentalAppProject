// CustomModal.js
import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SelectToolsModal = ({ 
  visible, 
  title, 
  info, 
  onClose 
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Dynamic Title */}
          <Text style={styles.modalHeaderText}>{title}</Text>
          {/* Dynamic Content */}
          <View style={styles.modalBody}>
            {info ? (
              info.split(/(?<=[.?!])\s+/).map((sentence, index) => (
                <View key={index} style={styles.bulletContainer}>
                  <Text style={styles.bulletText}>{"\u2022"}</Text>
                  <Text style={styles.bulletSentence}>{sentence.trim()}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.modalFallbackText}>
                No additional information available.
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={onClose}
          >
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     width: "80%",
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalHeaderText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   modalBody: {
//     marginBottom: 15,
//   },
//   bulletContainer: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 5,
//   },
//   bulletText: {
//     marginRight: 10,
//     fontSize: 14,
//   },
//   bulletSentence: {
//     fontSize: 14,
//   },
//   modalFallbackText: {
//     fontSize: 14,
//     color: "gray",
//   },
//   modalCloseButton: {
//     alignSelf: "flex-end",
//     padding: 10,
//     backgroundColor: "#2196F3",
//     borderRadius: 5,
//   },
//   modalCloseText: {
//     color: "white",
//     fontSize: 14,
//   },


  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#6A0DAD",
  },
  modalBody: {
    width: "100%",
    paddingHorizontal: 8,
  },
  modalBulletText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    marginLeft: 16,
    color: "#333",
  },
  modalCloseButton: {
    backgroundColor: "#6A0DAD",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  modalCloseText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  bulletContainer: {
    flexDirection: "row", // Align bullet and text horizontally
    alignItems: "flex-start", // Align bullet with the first line of text
    marginBottom: 8, // Space between bullets
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 8, // Space between bullet and text
    color: "#333",
  },
  bulletSentence: {
    flex: 1, // Ensures text wraps properly within the available space
    fontSize: 16,
    lineHeight: 24, // Proper spacing for multi-line text
    color: "#333",
  },

});

export default SelectToolsModal;
