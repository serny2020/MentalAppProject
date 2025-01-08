import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const CustomizeScreen = ({ navigation }) => {
  const [tools, setTools] = useState([
    // "Get out of my room",
    // "Write down my thoughts on a piece of paper",
    // "Drink some water",
    ""
  ]);
  const [newTool, setNewTool] = useState("");

  const addTool = () => {
    if (newTool.trim().length > 0) {
      setTools([...tools, newTool.trim()]);
      setNewTool("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Personalized</Text>
        <MaterialIcons name="settings" size={24} color="#6A0DAD" />
      </View>

      {/* Subheader */}
      <View style={styles.subheader}>
        <Text style={styles.subheaderText}>Emergency Toolkit</Text>
        <Ionicons name="cube-outline" size={32} color="#6A0DAD" />
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Build your personalized emergency toolkit to navigate mental health
        challenges
      </Text>

      {/* Add Tools Section */}
      <Text style={styles.sectionTitle}>Add your tools:</Text>
      <Text style={styles.subDescription}>
        Write down things you could do to help you feel better; things you did
        in the past that worked out well for you.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SelectToolsPage")}
        style={styles.suggestionLink}
      >
        <Text style={styles.suggestionText}>
          Not sure what to add? Click here →
        </Text>
        <Ionicons name="help-circle-outline" size={18} color="#6A0DAD" />
      </TouchableOpacity>

      {/* Tools List */}
      <View style={styles.toolsContainer}>
        <FlatList
          data={tools}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.toolItem}>
              {/* <Ionicons name="checkbox-outline" size={20} color="#555" /> */}
              <Text style={styles.toolText}>{item}</Text>
            </View>
          )}
        />
      </View>

      {/* Input Section */}
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new tool"
          placeholderTextColor="#A9A9A9"
          value={newTool}
          onChangeText={setNewTool}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTool}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc", // Light yellow background
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6A0DAD",
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  subheaderText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginRight: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  suggestionLink: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  suggestionText: {
    fontSize: 14,
    color: "#6A0DAD",
    textDecorationLine: "underline",
    marginRight: 4,
  },
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
  toolText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    marginRight: 8,
    fontSize: 16,
    color: "#000",
  },
  addButton: {
    backgroundColor: "#6A0DAD",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomizeScreen;
