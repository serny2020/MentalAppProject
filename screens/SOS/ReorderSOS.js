import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Ionicons } from "@expo/vector-icons";

const ReorderSOS = ({ route, navigation }) => {
  const { reorderableOptions, updateOptions } = route.params;
  const [localOptions, setLocalOptions] = useState(reorderableOptions);

  const handleDone = () => {
    updateOptions(localOptions);
    navigation.goBack();
  };

  const renderItem = ({ item, drag, isActive }) => {
    const index = localOptions.findIndex((opt) => opt.id === item.id); // Calculate the index manually
    console.log("Item:", item, "Index:", index); // Debug: Log index
    const isLastItem = index === localOptions.length - 1; // Check if it's the last item
  
    return (
      <TouchableOpacity
        style={[
          styles.item,
          isActive && { backgroundColor: "#e7e7d1" },
          isLastItem && styles.disabledItem, // Apply gray-out style for the last item
        ]}
        onLongPress={!isLastItem ? drag : null} // Disable dragging for the last item
        onPress={!isLastItem ? item.action : null} // Disable interaction for the last item
        disabled={isLastItem} // Prevent press interaction for the last item
      >
        <Text
          style={[
            styles.itemText,
            isLastItem && styles.disabledText, // Dimmed text for the last item
          ]}
        >
          {item.text}
          <Text
            style={[
              styles.boldText,
              isLastItem && styles.disabledText, // Dimmed bold text for the last item
            ]}
          >
            {item.boldText}
          </Text>
        </Text>
        {!isLastItem && <Ionicons name="reorder-three-outline" size={24} color="#000" />}
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Reorder Your SOS</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.doneButton}>Done</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeader}>
        You can rearrange the first 4 solutions based on your preferences
      </Text>
      {/* Draggable List */}
      <DraggableFlatList
        data={localOptions}
        onDragEnd={({ data }) => {setLocalOptions(data)}}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc", // Background color similar to the image
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cancelButton: {
    fontSize: 16,
    color: "#000", // Black text for Cancel button
    fontWeight: "bold",
  },
  doneButton: {
    fontSize: 16,
    color: "#000", // Black text for Done button
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  subHeader: {
    fontSize: 14,
    color: "#333", // Slightly darker text for the subheader
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row", // Align text and drag icon horizontally
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fffff0", // Slightly off-white background for each item
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
    color: "#000",
  },
  disabledItem: {
    backgroundColor: "#d3d3d3", // Gray background for disabled item
    borderColor: "#c0c0c0", // Lighter border for disabled item
  },
  disabledText: {
    color: "#a9a9a9", // Dimmed text color for disabled item
  },
  
});

export default ReorderSOS;
