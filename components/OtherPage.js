import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const OtherPage = ({ route, navigation }) => {
  //props from parent: 
  //existing emotions is old list of objects, 
  //additional emotions is the new list objects,
  //onSelect is the current selection in this child component 
  //initial selected emotions id is the id selected from parent component
  const { existingEmotions, additionalEmotions, onSelect, initialSelectedEmotionsId } =
    route.params;
  const [selectedEmotions, setSelectedEmotions] = useState([]);

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

  // lost the parent election
  // const handleConfirm = () => {
  //     // Log the full additionalEmotions list and the selected IDs
  // // console.log("All available emotions:", additionalEmotions);
  // console.log("Currently selected IDs:", selectedEmotions);
  //   // Ensure `selectedData` reflects only the items currently in `selectedEmotions`
  //   const selectedData = additionalEmotions.filter((emotion) =>
  //     selectedEmotions.includes(emotion.id)
  //   );

  //   console.log(
  //     "Final confirmed selections:",
  //     selectedData.map((emotion) => emotion.id)
  //   );

  //   onSelect(selectedData); // Pass the filtered data back to the parent
  //   navigation.goBack(); // Navigate back to the previous page
  // };

  const handleConfirm = () => {
    // Convert initial IDs to existing emotion objects
    const existingSelections = existingEmotions.filter((emotion) =>
      initialSelectedEmotionsId.includes(emotion.id)
    );
    console.log("inital selection: " + existingSelections.map((emotion) => emotion.id))
  
    // Get the newly selected emotions based on the current state
    const newlySelected = additionalEmotions.filter((emotion) =>
      selectedEmotions.includes(emotion.id)
    );
    console.log("new selection: " + newlySelected.map((emotion) => emotion.id))
    // Merge existing and new selections, avoiding duplicates
    const updatedSelections = [
      ...existingSelections,
      ...newlySelected.filter(
        (newEmotion) =>
          !existingSelections.some((existing) => existing.id === newEmotion.id)
      ),
    ];
  
    console.log(
      "Final merged selections:",
      updatedSelections.map((emotion) => emotion.id)
    );
  
    onSelect(updatedSelections); // Pass merged full objects back to parent
    navigation.goBack(); // Navigate back to the previous page
  };

  // const handleConfirm = () => {
  //   console.log("initial selected emotions: " + initialSelectedEmotions)
  //   // Ensure parent-selected emotions are unique and valid IDs from additionalEmotions
  //   const filteredSelection = initialSelectedEmotions.filter(
  //     (id) => !additionalEmotions.some((emotion) => emotion.id === id)
  //   );
  //   // Get the unique IDs from the parent selections
  //   // const parentSelectedIds = validParentSelectedData.map((emotion) => emotion.id);
  //   console.log("filtered out additional emotions: " + filteredSelection)
  //   // Combine parent-selected IDs with child-edited selections
  //   const mergedSelections = Array.from(
  //     new Set([...selectedEmotions, ...filteredSelection])
  //   );
  //   console.log("merged selection: " + mergedSelections)
  //   // Get full objects for the merged selections
  //   const finalSelectedData = additionalEmotions.filter((emotion) =>
  //     mergedSelections.includes(emotion.id)
  //   );
  
  //   // Log the final merged selections
  //   console.log(
  //     "Final merged selections (IDs only):",
  //     finalSelectedData.map((e) => e.id)
  //   );
    
  //   onSelect(finalSelectedData); // Pass the merged data back to the parent
  //   navigation.goBack(); // Navigate back to the previous page
  // };
  
  


  // const handleConfirm = () => {
  //   // Ensure `selectedData` reflects only the items currently in `selectedEmotions`
  //   const selectedDataFromChild = additionalEmotions.filter((emotion) =>
  //     selectedEmotions.includes(emotion.id)
  //   );

  //   console.log("Final confirmed selections from child:", selectedDataFromChild.map((emotion) => emotion.id));

  //   // Combine parent data (`initialSelectedEmotions`) with selected data from child
  //   const mergedData = [...initialSelectedEmotions, ...selectedDataFromChild];

  //   // Deduplicate based on emotion ID
  //   const uniqueMergedData = Array.from(
  //     new Map(mergedData.map((emotion) => [emotion.id, emotion])).values()
  //   );

  //   console.log("Final merged confirmed selections:", uniqueMergedData.map((emotion) => emotion.id));

  //   onSelect(uniqueMergedData); // Pass the merged and deduplicated data back to the parent
  //   navigation.goBack(); // Navigate back to the previous page
  // };

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
        <Text style={styles.title}>Select Emotions</Text>
      </View>

      {/* Emotions List */}
      <FlatList
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
      />

      {/* Confirm Button */}
      <TouchableOpacity
        style={[
          styles.confirmButton,
          selectedEmotions.length > 0
            ? styles.confirmButtonActive
            : styles.confirmButtonInactive,
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
});

export default OtherPage;
