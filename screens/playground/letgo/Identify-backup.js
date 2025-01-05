import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const IdentifyThoughtsScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  const handleDone = () => {
    console.log("User's input:", text);
    // Add functionality to process the input
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Next</Text>
      </View>

      {/* Instructions */}
      <View style={styles.instructions}>
        <View style={styles.instructionRow}>
          <MaterialIcons name="list-alt" size={24} color="#000" />
          <Text style={styles.tryText}> Try to identify:</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SwiperScreen")}
            style={styles.swiperLink}
          >
            <Text style={styles.swiperText}> Confused? Try our Swiper!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsRow}>
          <Text style={styles.details}>
            things you can’t change from the past; things that are out of your
            control, unhelpful thoughts:
          </Text>
          <Ionicons name="help-circle-outline" size={20} color="#A020F0" />
        </View>
      </View>

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
        Cross out or circle any unhelpful thoughts written on your paper. Once
        you are done, come back to click on <Text style={styles.boldText}>Next</Text>!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0", // Light green background
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  instructions: {
    marginBottom: 16,
  },
  instructionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  tryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 4,
  },
  swiperLink: {
    marginLeft: 8,
  },
  swiperText: {
    fontSize: 14,
    color: "#A020F0",
    textDecorationLine: "underline",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    fontSize: 14,
    color: "#000",
    flex: 1, // Allows the text to take up available space
    marginRight: 8,
  },
  textBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    height: 200,
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
});

export default IdentifyThoughtsScreen;
