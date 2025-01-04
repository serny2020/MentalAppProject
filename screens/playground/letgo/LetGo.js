import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LetGo = ({ navigation }) => {
  const [brainDump, setBrainDump] = useState("");

  const handleClear = () => {
    setBrainDump("");
  };

  const handleDone = () => {
    alert("Thoughts saved!");
  };

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>LetGo: brain dump</Text>
      <TouchableOpacity>
        <Text style={styles.backText} onPress={() => navigation.goBack()}>
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("UnhelpfulThoughtsScreen")}
      >
        <Ionicons
          name="information-circle-outline"
          size={20}
          color="#000"
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Brain Dump Input Section */}
      <Text style={styles.label}>Your private space:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Write down anything that’s bothering you"
          placeholderTextColor="#A9A9A9"
          multiline
          value={brainDump}
          onChangeText={setBrainDump}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Identification Section */}
      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => navigation.navigate("SwiperScreen")}
      >
        <Text style={styles.label}>
          Try to identify:{" "}
          <Text style={styles.link}>Confused? Try Swiper! 😊</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.identifyContainer}>
        <Text style={styles.identifyText}>
          things you can’t change from the past; things that are out of your
          control, unhelpful thoughts
        </Text>
      </View>

      {/* Action Section */}
      <Text style={styles.actionText}>
        How would you like to deal with your unhealthy thoughts?
      </Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.trashButton}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/126/126083.png",
            }} // Replace with local image if needed
            style={styles.actionIcon}
          />
          <Text style={styles.trashText}>Throw them as trash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.burnButton}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1057/1057220.png",
            }} // Replace with local image if needed
            style={styles.actionIcon}
          />
          <Text style={styles.burnText}>Burn them as ash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccffcc",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  link: {
    color: "#9b59b6",
    textDecorationLine: "underline",
  },
  inputContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  inputBox: {
    minHeight: 100,
    fontSize: 16,
    color: "#000",
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  doneButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  identifyContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  identifyText: {
    fontSize: 16,
    color: "#000",
  },
  actionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  trashButton: {
    alignItems: "center",
  },
  trashText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  burnButton: {
    alignItems: "center",
  },
  burnText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default LetGo;
