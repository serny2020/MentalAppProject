import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BrainDumpScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  const handleDone = () => {
    const sentences = text
      .split(".")
      .map((sentence) => sentence.trim())
      .filter(Boolean);
    navigation.navigate("IdentifyThoughtsScreen", { sentences });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("IdentifyWithModal")}> */}
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>LetGo: brain dump</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("IdentifyThoughtsScreen")}
        >
          {/* <TouchableOpacity onPress={() => navigation.navigate("IdentifyWithModal")}> */}
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Here is your private space to release your racing thoughts. Feel free to
        set your background music!
      </Text>

      {/* Input Box */}
      <View style={styles.textBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Write down anything that’s bothering you"
          placeholderTextColor="#A9A9A9"
          multiline
          value={text}
          onChangeText={(value) => setText(value)}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Tired of typing? No problem! We got you. Grab a piece of{" "}
        <Text style={styles.boldText}>paper</Text>, a{" "}
        <Text style={styles.boldText}>pen</Text>, and start writing physically.
        Once you are done, come back to click on{" "}
        <Text style={styles.boldText}>Next</Text>.
      </Text>
      <View style={styles.iconCircle}>
        <Image
          source={require("../../../assets/image/music.png")} // Adjust the path to your PNG file
          style={styles.iconImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0", // Light green
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
  },
  textBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    height: 410,
    marginBottom: 16,
    justifyContent: "center",
    padding: 12,
  },
  textInput: {
    fontSize: 16,
    color: "#000",
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  clearButton: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  doneButton: {
    backgroundColor: "#90EE90",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  footerText: {
    fontSize: 14,
    color: "#000",
    marginTop: 16,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  iconCircle: {
    position: "absolute", // Absolute positioning
    bottom: 20, // Distance from the bottom of the screen
    right: 20, // Distance from the right edge of the screen
    width: 50, // Diameter of the circle
    height: 50, // Diameter of the circle
    borderRadius: 25, // Half of width/height to make it a circle
    backgroundColor: "#E6E6FA", // Light lavender background
    justifyContent: "center", // Center the icon horizontally
    alignItems: "center", // Center the icon vertically
  },
});

export default BrainDumpScreen;
