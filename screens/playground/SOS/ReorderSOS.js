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

  const renderItem = ({ item, drag, isActive }) => (
    <TouchableOpacity
      style={[styles.item, isActive && { backgroundColor: "#e7e7d1" }]}
      onLongPress={drag}
      onPress={item.action}
    >
      <Text style={styles.itemText}>
        {item.text}
        <Text style={styles.boldText}>{item.boldText}</Text>
      </Text>
      <Ionicons name="reorder-three-outline" size={24} color="#000" />
    </TouchableOpacity>
  );

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
        You can rearrange the 5 solutions based on your preferences
      </Text>
      {/* Draggable List */}
      <DraggableFlatList
        data={localOptions}
        onDragEnd={({ data }) => setLocalOptions(data)}
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
});

export default ReorderSOS;
