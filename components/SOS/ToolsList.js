import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ToolsList = ({
  toolsData,
  selectedTools,
  toggleCheckbox,
  //   styles, // Pass custom styles from the parent component
}) => {
  return (
    <View style={styles.toolsContainer}>
      <FlatList
        data={toolsData}
        keyExtractor={(item, index) => index.toString()} // Ensure unique keys
        renderItem={({ item }) => (
          <View style={styles.toolItem}>
            {/* Checkbox */}
            <TouchableOpacity
              onPress={() => toggleCheckbox(item)} // Pass the entire object
              style={styles.checkbox}
            >
              <Ionicons
                name={
                  Array.isArray(selectedTools) &&
                  selectedTools.some((tool) => tool.name === item.name)
                    ? "checkbox"
                    : "square-outline"
                }
                size={24}
                color="#6A0DAD"
              />
            </TouchableOpacity>

            {/* Tool Icon */}
            {item.icon && (
              <Image
                source={item.icon} // Render the icon if it exists
                style={styles.icon}
                resizeMode="contain"
              />
            )}

            {/* Render Multimedia Items as Buttons */}
            {item.category === "Multimedia" ? (
              <TouchableOpacity
                style={styles.multimediaButton}
                onPress={() => console.log(`Button clicked: ${item.name}`)} // Handle button click
                disabled={
                  Array.isArray(selectedTools) &&
                  selectedTools.some((tool) => tool.name === item.name)
                    ? true // Enabled if selected
                    : false // Disabled if not selected
                }
              >
                <Text
                  style={[
                    styles.multimediaButtonText,
                    Array.isArray(selectedTools) &&
                      selectedTools.some((tool) => tool.name === item.name) &&
                      styles.strikethroughText, // Apply strikethrough if toggled
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ) : (
              // Render Tool Name for non-Multimedia Items
              <Text
                style={[
                  styles.toolText,
                  Array.isArray(selectedTools) &&
                    selectedTools.some((tool) => tool.name === item.name) &&
                    styles.strikethroughText, // Apply strikethrough if toggled
                ]}
              >
                {item.name}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toolsContainer: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  toolItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  toolText: {
    fontSize: 16,
    color: "#000",
    flex: 1, // Allow the text to take up available space
    flexWrap: "wrap", // Enable text wrapping
  },
  strikethroughText: {
    textDecorationLine: "line-through",
    color: "#A9A9A9", // Optional: Change color to indicate the item is completed
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8, // Space between icon and text
  },
  multimediaButton: {
    //   backgroundColor: "#6A0DAD",
    //   paddingVertical: 5,
    //   paddingHorizontal: 10,
    //   borderRadius: 5,
    flex: 1, // Ensure the button can grow within the available space
  },
  multimediaButtonText: {
    //   color: "#FFF",
    //   fontSize: 14,
    //   fontWeight: "bold",
    flexWrap: "wrap", // Enable text wrapping inside the button
  },
});

export default ToolsList;
