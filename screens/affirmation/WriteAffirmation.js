import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const WriteAffirmation = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleDone = () => {
    if (!title || !content) {
      Alert.alert("Incomplete", "Please fill out both the title and content.");
      return;
    }
    Alert.alert("Saved", "Your affirmation has been saved!");
    navigation.goBack(); // Navigate back
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Write a nice affirmation for yourself:</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <Text style={styles.instruction}>
        Tell yourself in the past, at the present, in the future something, as
        you would try your best to help other people out. Try to combine{" "}
        <Text style={styles.bold}>facts</Text> with{" "}
        <Text style={styles.bold}>positive thinking</Text> - compliments or
        inspirations you got from others, giving yourself credibility. Be sure
        to use <Text style={styles.bold}>“YOU”</Text> (Imagine someone you truly
        care about is giving you a pep talk.)
      </Text>

      <Text style={styles.helperText}>
        Not sure how to start it? No worries, we got you!{" "}
        <Text style={styles.linkText}>See how Kelly does it</Text>{" "}
        <Ionicons name="help-circle-outline" size={16} color="#A020F0" />
      </Text>

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title:"
          placeholderTextColor="#A9A9A9"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.contentInput]}
          placeholder="Content:"
          placeholderTextColor="#A9A9A9"
          multiline
          value={content}
          onChangeText={setContent}
        />
      </View>

      {/* Footer Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <MaterialIcons name="image" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="format-bold" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="format-list-bulleted" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCFFD4", // Light green background
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cancelText: {
    fontSize: 18,
    color: "#000",
    textDecorationLine: "underline",
  },
  doneText: {
    fontSize: 18,
    color: "#000",
    textDecorationLine: "underline",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    textAlign: "center",
  },
  instruction: {
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  helperText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 16,
  },
  linkText: {
    color: "#A020F0",
    textDecorationLine: "underline",
  },
  inputContainer: {
    backgroundColor: "#FFFAA9", // Light yellow background
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  input: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },
  contentInput: {
    height: 120,
    textAlignVertical: "top",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});

export default WriteAffirmation;
