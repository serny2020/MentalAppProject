import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const OtherPage = ({ route, navigation }) => {
  const {
    existingEmotions,
    additionalEmotions,
    onSelect,
    initialSelectedEmotionsId,
    showInputBox,
  } = route.params;

  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [customInput, setcustomInput] = useState(""); // Input state
  const [customValues, setCustomValues] = useState([]); // Store user-added custom causes

  // Add new custom input
  const addCustomInput = () => {
    if (customInput.trim().length > 0) {
      const newCustomEmotion = {
        id: `custom-${Date.now()}`, // Unique ID
        label: customInput.trim(),
      };

      // Add the new custom emotion to both the input list and selected emotions
      setCustomValues((prev) => [...prev, newCustomEmotion]);
      setSelectedEmotions((prev) => [...prev, newCustomEmotion.id]); // Mark it as active
      setcustomInput(""); // Clear the input field
    }
  };

  // Toggle selection for multiple emotions
  const toggleSelection = (emotionId) => {
    setSelectedEmotions((prev) => {
      const isAlreadySelected = prev.includes(emotionId);
      const updatedSelection = isAlreadySelected
        ? prev.filter((id) => id !== emotionId) // Remove
        : [...prev, emotionId]; // Add

      return updatedSelection;
    });
  };

  // Combine additionalEmotions and customValues into a single array
  const combinedData = [...additionalEmotions, ...customValues];

  const handleConfirm = () => {
    // Convert initial IDs to existing emotion objects
    const existingSelections = existingEmotions.filter((emotion) =>
      initialSelectedEmotionsId.includes(emotion.id)
    );
  
    // Get the newly selected emotions based on the current state
    const newlySelected = combinedData.filter((emotion) =>
      selectedEmotions.includes(emotion.id)
    );
  
    // Merge existing and new selections, avoiding duplicates
    const updatedSelections = [
      ...existingSelections,
      ...newlySelected.filter(
        (newEmotion) =>
          !existingSelections.some((existing) => existing.id === newEmotion.id)
      ),
    ];
  
    console.log("Final merged selections:", updatedSelections.map((e) => e.label));
  
    // Update check-in data (assuming updateCheckInData is a function passed as a prop or from context)
    if (typeof updateCheckInData === "function") {
      updateCheckInData("selectedCauses", updatedSelections); // Replace "selectedCauses" with your desired key
    }
  
    onSelect(updatedSelections); // Pass merged full objects back to parent
    navigation.goBack(); // Navigate back to the previous page
  };

  // Handle cancel
  const handleCancel = () => {
    setSelectedEmotions([]);
    navigation.goBack(); // Close the page without saving
  };

  return (
    <View style={styles.container}>
      {/* Header with Cross Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.crossButton}>❌</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Others</Text>
      </View>

      {/* Render Input Box Conditionally */}
      {showInputBox && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder="Type a custom cause"
            value={customInput}
            onChangeText={setcustomInput}
          />
          <TouchableOpacity style={styles.addButton} onPress={addCustomInput}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Combined FlatList */}
      <FlatList
        data={combinedData} // Combined list of additionalEmotions and customValues
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              selectedEmotions.includes(item.id) && styles.selectedItemContainer,
            ]}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Confirm Button */}
      <TouchableOpacity
        style={[
          styles.confirmButton,
          selectedEmotions.length > 0 ? styles.confirmButtonActive : styles.confirmButtonInactive,
        ]}
        onPress={handleConfirm}
        disabled={selectedEmotions.length === 0}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  crossButton: {
    fontSize: 16,
    color: "#9b59b6",
  },
  title: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#E5E5E5",
  },
  selectedItemContainer: {
    backgroundColor: "#B7FFBF",
    borderWidth: 2,
    borderColor: "#9b59b6",
  },
  label: {
    fontSize: 16,
    color: "#9b59b6",
  },
  confirmButton: {
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  confirmButtonActive: {
    backgroundColor: "#9b59b6",
  },
  confirmButtonInactive: {
    backgroundColor: "#d3d3d3",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#9b59b6",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#E5E5E5",
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#9b59b6",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default OtherPage;
