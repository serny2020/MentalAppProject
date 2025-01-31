import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Journal = () => {
  const [happinessText, setHappinessText] = useState("");
  const [moodText, setMoodText] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Happiness Journal Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Happiness Journal</Text>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>See how Fary does it</Text>
          <Ionicons name="help-circle-outline" size={20} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Happiness Journal Section */}
      <View style={styles.sectionBox}>
        <TextInput
          placeholder={
            "Write down at least 3 things that:\n- made you happy/excited/satisfied\n- you achieved\n- you did to help people out"
          }
          multiline
          style={[styles.inputBox, styles.sectionBox]}
          value={happinessText}
          onChangeText={setHappinessText}
        />

        {/* Formatting Icons Section */}
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/checklist.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/numberlist.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/bulletlist.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/bold.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* Purple Arrow Button */}
          <TouchableOpacity style={styles.arrowButton}>
            <Image
              source={require("../../assets/image/journal/send.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Mood Journal Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mood Journal</Text>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>See how Shaun does it</Text>
          <Ionicons name="help-circle-outline" size={20} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Mood Journal Section */}
      <View style={styles.sectionBox}>
        <TextInput
          placeholder={
            "Example:\nI feel upset.\nBecause Ali didn’t invite me to her birthday party."
          }
          multiline
          style={[styles.inputBox, styles.sectionBox]}
          value={moodText}
          onChangeText={setMoodText}
        />

        {/* Formatting Icons Section */}
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/checklist.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/numberlist.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/bulletlist.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/image/journal/bold.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* Purple Arrow Button */}
          <TouchableOpacity style={styles.arrowButton}>
            <Image
              source={require("../../assets/image/journal/send.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#9b59b6",
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#9b59b6",
    marginRight: 5,
  },
  sectionBox: {
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  inputBox: {
    borderWidth: 0,
    backgroundColor: "#e5e5e5",
    color: "#4f4f4f",
    fontSize: 14,
    textAlignVertical: "top",
    minHeight: 100,
    borderRadius: 10,
    padding: 15,
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Even spacing between icons
    // backgroundColor: "#ddd", // Light gray background
    padding: 10,
    borderRadius: 8,
    // position: "absolute", // ⬅️ Position absolutely
    bottom: -20, // ⬅️ Moves it near the bottom
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  arrowButton: {
    backgroundColor: "#b388eb", // Purple button color
    borderRadius: 20,
    padding: 10,
  },
  arrowIcon: {
    width: 15,
    height: 15,
    tintColor: "#000", // Black arrow
  },
});

export default Journal;
