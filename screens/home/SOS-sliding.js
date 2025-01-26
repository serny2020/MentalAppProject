import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";

const SOS = ({ navigation }) => {
  const [reorderableOptions, setReorderableOptions] = useState([
    {
      id: "1",
      text: "Open Your Personal ",
      boldText: "Emergency Toolkit",
    },
    {
      id: "2",
      text: "Connect Your ",
      boldText: "Loved Ones",
    },
    {
      id: "3",
      text: "Chat in Your ",
      boldText: "Community",
    },
    {
      id: "4",
      text: "Find a ",
      boldText: "Professional Therapist",
    },
    {
      id: "5",
      text: "Call ",
      boldText: "Life Threat Emergency Line",
    },
  ]);

  const handleItemClick = (index) => {
    setHighlightedIndex(index); // Update the highlighted index
    const clampedValue = Math.max(0, Math.min(index * itemHeight, totalRange));
    pan.setValue(clampedValue); // Clamp the `pan` value to the valid range
  };

  const pan = useRef(new Animated.Value(0)).current; // Pan value
  const previousPanValue = useRef(0); // To track the previous pan value
  const previousIndex = useRef(0); // To track the previous index
  const [highlightedIndex, setHighlightedIndex] = React.useState(0); // Current highlighted index

  const itemHeight = 100; // Original item height
  const totalRange = itemHeight * (reorderableOptions.length - 1); // Total movement range
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const offset = gestureState.dy + highlightedIndex * itemHeight; // Calculate offset
      const clampedValue = Math.max(0, Math.min(offset, totalRange)); // Clamp the pan value
      pan.setValue(clampedValue); // Update pan value directly

      // Calculate the closest index
      const newIndex = Math.floor(clampedValue / itemHeight); // Use `Math.floor` for highlighting
      if (newIndex !== highlightedIndex) {
        setHighlightedIndex(newIndex); // Update the highlighted index when it changes
      }

      console.log("Current Index:", newIndex); // Log the current index
    },
    onPanResponderRelease: () => {
      // Keep the indicator in its last position without snapping
      const clampedValue = Math.max(0, Math.min(pan._value, totalRange)); // Clamp the value again for safety
      pan.setValue(clampedValue); // Keep pan value as is

      const newIndex = Math.round(clampedValue / itemHeight); // Calculate the closest index (use Math.round for release)
      setHighlightedIndex(newIndex); // Final index on release

      console.log("Final Index:", newIndex);
    },
  });
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* <Image
          source={require("./assets/love-icon.png")} // Replace with your local image path
          style={styles.localIcon}
        /> */}
        <Text style={styles.headerText}>
          Dear <Text style={styles.highlight}>Larry</Text>,{"\n"}
          Don’t worry, we’ll help you. {"\n"}You are not alone.{"\n"}
          <Text style={styles.highlight}>We love you. ❤️</Text>
        </Text>
      </View>

      <View style={styles.contentContainer}>
        {/* Options Section */}
        <View style={styles.optionsContainer}>
          {reorderableOptions.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.optionRow,
                highlightedIndex === index && styles.highlightedOption,
              ]}
              onPress={() => handleItemClick(index)} // Handle item click
            >
              <Text style={styles.optionText}>
                {item.text}
                <Text style={styles.bold}>{item.boldText}</Text>
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Right Column Slider */}
        <View
          style={[
            styles.rightColumn,
            { height: reorderableOptions.length * 60 + 20 }, // Adjust height dynamically
          ]}
        >
          <Text style={styles.sliderTopText}>1</Text>
          <View style={[styles.sliderLine, { height: totalRange + 70 }]}></View>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.sliderCircle,
              {
                top: Animated.add(pan, new Animated.Value(itemHeight / 2 - 100)),
              }, // Offset to center the circle
            ]}
          />

          <Text style={styles.sliderBottomText}>10</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  localIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    color: "#f39c12",
    lineHeight: 22,
  },
  highlight: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
  contentContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  optionsContainer: {
    flex: 1, // Distribute space evenly between options
    justifyContent: "space-evenly",
  },
  optionRow: {
    borderBottomWidth: 1, // Add a border if needed
    borderBottomColor: "#d3d3d3", // Border color
    paddingVertical: 20, // Increases padding inside each item
    paddingHorizontal: 10,
    marginBottom: 20, // Adds extra space between items
  },
  optionText: {
    fontSize: 20,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  highlightedOption: {
    backgroundColor: "#ffffe0", // Highlighted option background color
  },
  rightColumn: {
    width: 40, // Width of the slider column
    alignItems: "center",
    marginRight: 10,
    top: -100, // Adjust this value to move the entire slider lower
  },
  sliderLine: {
    // marginTop: 20,
    width: 2,
    height: "100%", // Ensure it spans the full height of the rightColumn

    backgroundColor: "#e74c3c",
  },
  sliderCircle: {
    marginTop: 80,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#e74c3c",
    position: "absolute",
  },
  sliderTopText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#404040",
    marginBottom: 5,
  },
  sliderBottomText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#404040",
    marginTop: 5,
  },
});

export default SOS;
