import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";
import emotions from "../../../../data/community/posts/emotions";

export default function AddEmotionModal({
  visible,
  closeModal,
  onSelectEmotion,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Positive");
  const [customEmotion, setCustomEmotion] = useState("");

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Add Emotion</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.headerText}>Done</Text>
            </TouchableOpacity>
          </View>

          {/* Category Toggle Buttons */}
          <View style={styles.categoryContainer}>
            {emotions.map((item) => (
              <TouchableOpacity
                key={item.category}
                style={[
                  styles.categoryButton,
                  selectedCategory === item.category
                    ? styles.activeCategory
                    : styles.inactiveCategory,
                ]}
                onPress={() => setSelectedCategory(item.category)}
              >
                <Text style={styles.categoryText}>{item.category}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Emotion Selection */}
          <FlatList
            data={
              emotions.find((item) => item.category === selectedCategory)
                ?.list || []
            }
            keyExtractor={(item) => item.name}
            numColumns={3} // Grid layout with 3 columns
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.emotionButton}
                onPress={() => {
                  // pass an object with separate fields
                  onSelectEmotion({ moodIcon: item.emoji, mood: item.name });

                  closeModal(); // Auto-close on selection
                }}
              >
                <Text style={styles.emojiText}>{item.emoji}</Text>
                <Text style={styles.emotionText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.scrollContainer}
          />

          {/* Custom Emotion Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.otherLabel}>Other:</Text>
            <TextInput
              style={styles.input}
              placeholder="Type to add"
              value={customEmotion}
              onChangeText={setCustomEmotion}
            />
            {/* Confirm Button for Custom Emotion */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                if (customEmotion.trim()) {
                  onSelectEmotion({ moodIcon: "", mood: customEmotion }); // Use a default icon or add an input for an emoji
                  setCustomEmotion(""); // Clear input
                  closeModal(); // Auto-close
                }
              }}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// STYLES
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f7ffcc",
    padding: 16,
    width: "100%", // Full screen width
    height: "100%", // Full screen height
    justifyContent: "flex-start",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeCategory: {
    backgroundColor: "#dab6fc",
  },
  inactiveCategory: {
    backgroundColor: "#d3d3d3",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  scrollContainer: {
    paddingBottom: 20,
    justifyContent: "center",
  },
  emotionButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1, // Ensures proper spacing in grid
  },
  emotionText: {
    fontSize: 16,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    marginBottom: 50,
  },
  otherLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 16,
    paddingVertical: 5,
  },

  confirmButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
  },
  emotionButton: {
    flex: 1, // Ensures proper spacing in grid
    backgroundColor: "#fff",
    height: 70, // Increase button height
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10, // Increase rounded corners
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  emojiText: {
    fontSize: 20, // Increase emoji size
    textAlign: "center",
    marginBottom: 5, // Space between emoji and text
  },
  emotionText: {
    fontSize: 12,
    textAlign: "center",
  },
});
