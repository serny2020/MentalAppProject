import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CheckInPage5 = ({ navigation }) => {
  const [input, setInput] = useState("");

  const handleNext = () => {
    // const selectedCauseData = causes
    //   .filter((cause) => selectedCauseData.includes(cause.id))
    //   .concat(
    //     additionalCauses.filter((cause) => selectedCauseData.includes(cause.id))
    //   );

    // console.log("Selected Causes:", selectedCauseData);

    // // Update context
    // updateCheckInData("causes", selectedCauseData);

    // Navigate to the next page
    navigation.navigate("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Navigate back when the left arrow is pressed */}
          <Text style={styles.skip}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity>
                  <Text style={styles.skip} onPress={() => navigation.navigate("Home")}>
                    {"❌"}
                  </Text>
        </TouchableOpacity>
      </View>

      {/* Question with a question mark button */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>What thoughts are unhelpful for you?</Text>
        <TouchableOpacity
          style={styles.questionMarkButton}
          onPress={() => navigation.navigate("CognitiveDistortionsPage")}
        >
          <Text style={styles.questionMarkText}>?</Text>
        </TouchableOpacity>
      </View>

      {/* Input Box */}
      <TextInput
        style={styles.inputBox}
        placeholder="Write here..."
        placeholderTextColor="#9b59b6"
        multiline
        onChangeText={(text) => setInput(text)}
        value={input}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, styles.nextButtonActive]} // Always active style
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>
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
  skip: {
    fontSize: 24,
    color: "#9b59b6",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  questionText: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  questionMarkButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#9b59b6",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  questionMarkText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e5e5e5",
    color: "#9b59b6",
    minHeight: 100,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  nextButton: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
    marginTop: "auto",
  },
  nextButtonActive: {
    backgroundColor: "#9b59b6",
  },
  nextButtonInactive: {
    backgroundColor: "#d3d3d3",
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CheckInPage5;
