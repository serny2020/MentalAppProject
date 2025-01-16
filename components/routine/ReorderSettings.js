import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Ionicons } from "@expo/vector-icons";

const ReorderSettings = ({ navigation, route }) => {
  const { currentOrder, updateOrder } = route.params;
  const [sections, setSections] = useState(currentOrder);

  
  // const handleDone = () => {
  //   // Go back to the parent navigator and update the parameters
  //   navigation.navigate("RoutineNavigator", {
  //     screen: "Routine",
  //     params: { newOrder: sections },
  //   });
  // };

  const handleDone = () => {
    // Call the updateOrder callback to update the Routine page's state
    updateOrder(sections);
    navigation.goBack(); // Navigate back to Routine
  };
  
  const renderItem = ({ item, drag, isActive }) => (
    <TouchableOpacity
    style={[
      styles.itemContainer,
      isActive ? { backgroundColor: "#f0f0f0" } : { backgroundColor: "#fff" },
    ]}
    onLongPress={drag}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Ionicons name="reorder-three-outline" size={24} color="#000" />
    </TouchableOpacity>
  );
  // const handleDone = () => {
  //   // Pass the new order back to the parent
  //   navigation.navigate("Routine", { newOrder: sections });
  // };
  
  // const handleDone = () => {
  //   navigation.setParams({ newOrder: sections });
  //   navigation.goBack();
  // };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Reorder Your Routine</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subHeader}>
        You can rearrange the following sessions based on your preferences
      </Text>
      <DraggableFlatList
        data={sections}
        onDragEnd={({ data }) => setSections(data)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cancelText: {
    fontSize: 18,
    color: "red",
  },
  doneText: {
    fontSize: 18,
    color: "green",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
});

export default ReorderSettings;