import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import CircularCategories from "../screens/playground/dreamboard/CircularCategories";
import CircularEmotion from "../components/check-in/CircularEmotions"

const OtherPage = ({ route, navigation }) => {
  //props from parent: 
  //existing emotions is old list of objects, 
  //additional emotions is the new list objects,
  //onSelect is the current selection in this child component 
  //initial selected emotions id is the id selected from parent component
  const { existingEmotions, additionalEmotions, onSelect, initialSelectedEmotionsId, showInputBox,  } =
    route.params;
  const [selectedEmotions, setSelectedEmotions] = useState([]);


    const [customInput, setcustomInput] = useState(""); // Input state
  const [InputValues, setInputValues] = useState([]); // Store user-added custom causes
// Updated addCustomInput function
const addCustomInput = () => {
  if (customInput.trim().length > 0) {
    const newCustomEmotion = {
      id: `custom-${Date.now()}`, // Unique ID
      label: customInput.trim(),
    };

    // Add the new custom emotion to both the input list and selected emotions
    setInputValues((prev) => [...prev, newCustomEmotion]);
    setSelectedEmotions((prev) => [...prev, newCustomEmotion.id]); // Mark it as active
    setcustomInput(""); // Clear the input field
  }
};

// Add this render function for InputValues
const renderCustomInput = () => (
  // <FlatList
  //   data={InputValues}
  //   keyExtractor={(item) => item.id.toString()}
  //   renderItem={({ item }) => (
  //     <TouchableOpacity
  //       style={[
  //         styles.itemContainer,
  //         selectedEmotions.includes(item.id) && styles.selectedItemContainer,
  //       ]}
  //       onPress={() => toggleSelection(item.id)} // Allow toggling custom items
  //     >
  //       <Text style={styles.label}>{item.label}</Text>
  //     </TouchableOpacity>
  //   )}
  // />
  <CircularEmotion navigation={navigation} />
);

  
  useEffect(() => {
    setSelectedEmotions(initialSelectedEmotionsId || []);
  }, []); // Run only once on mount

  //for debugging 
  useEffect(() => {
    // Log the updated emotions when state changes for debugging
    console.log("Current Selected Emotions:", selectedEmotions);
  }, [selectedEmotions]);

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


  const handleConfirm = () => {
    // Convert initial IDs to existing emotion objects
    const existingSelections = existingEmotions.filter((emotion) =>
      initialSelectedEmotionsId.includes(emotion.id)
    );
    console.log("Initial selection: " + existingSelections.map((emotion) => emotion.id));
  
    // Get the newly selected emotions based on the current state
    const newlySelected = additionalEmotions.filter((emotion) =>
      selectedEmotions.includes(emotion.id)
    );
    console.log("New selection: " + newlySelected.map((emotion) => emotion.id));
  
    // Merge existing and new selections, avoiding duplicates
    const updatedSelections = [
      ...existingSelections,
      ...newlySelected.filter(
        (newEmotion) =>
          !existingSelections.some((existing) => existing.id === newEmotion.id)
      ),
    ];
  
    console.log(
      "Final merged selections before custom causes:",
      updatedSelections.map((emotion) => emotion.id)
    );
  
    // Add the input from the text box, if it's not empty
    if (customInput.trim().length > 0) {
      const newCustomEmotion = {
        id: `custom-${Date.now()}`, // Unique ID
        label: customInput.trim(),
      };
      updatedSelections.push(newCustomEmotion);
    }

    console.log(
      "Final merged selections:",
      updatedSelections.map((emotion) => emotion.label)
    );

    onSelect(updatedSelections); // Pass merged full objects back to parent
    navigation.goBack(); // Navigate back to the previous page
  };
  

  const handleCancel = () => {
    setSelectedEmotions([]);
    // onSelect([]);
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
      {/* Emotions List */}
      {/* <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
        data={additionalEmotions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              selectedEmotions.includes(item.id) &&
                styles.selectedItemContainer,
            ]}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )}
      /> */}
      {/* Render Custom Inputs */}
{renderCustomInput()}

      {/* Confirm Button */}
      <TouchableOpacity
        style={[
          styles.confirmButton,styles.confirmButtonActive
            
        ]}
        onPress={handleConfirm}
        // disabled={selectedEmotions.length === 0 && customInput.trim().length === 0}
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
    top: 100,
  },
  selectedItemContainer: {
    backgroundColor: "#B7FFBF",
    borderWidth: 2,
    borderColor: "#9b59b6",
  },
  emoji: {
    fontSize: 28,
    marginRight: 16,
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
    bottom: 80,
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
  inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
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
  addButtonText: { color: "#FFF", fontSize: 14, fontWeight: "bold" },
});

export default OtherPage;
