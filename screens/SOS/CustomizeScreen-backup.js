import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTools } from "../../../context/ToolsContext";

const CustomizeScreen = ({ navigation, route }) => {
  const [tools, setTools] = useState([]);
  const [selectedTools, setSelectedTools] = useState({}); // Track selected state for each tool
  const [newTool, setNewTool] = useState(""); // For keyboard input
  const { contextTools, addTools } = useTools();

  // Effect to handle tools passed from SelectToolsPage
  useEffect(() => {
    if (route.params?.selectedTools) {
      const newTools = route.params.selectedTools.filter(
        (tool) => !tools.includes(tool)
      );
      setTools((prevTools) => [...prevTools, ...newTools]);

      // Initialize the selected state for new tools
      const updatedSelectedTools = { ...selectedTools };
      newTools.forEach((tool) => {
        updatedSelectedTools[tool] = false;
      });
      setSelectedTools(updatedSelectedTools);
    }
  }, [route.params?.selectedTools]);

  // Toggle checkbox state
  // const toggleCheckbox = (tool) => {
  //   setSelectedTools((prev) => ({
  //     ...prev,
  //     [tool]: !prev[tool],
  //   }));
  // };

  const toggleCheckbox = (tool) => {
    if (selectedTools.some((item) => item.name === tool.name)) {
      // Deselect tool
      setSelectedTools(selectedTools.filter((item) => item.name !== tool.name));
    } else {
      // Select tool
      setSelectedTools([...selectedTools, tool]);
    }
  };
  

  // Add new tool from user input
  const addTool = () => {
    if (newTool.trim().length > 0 && !tools.includes(newTool.trim())) {
      setTools((prevTools) => [...prevTools, newTool.trim()]);
      setSelectedTools((prev) => ({
        ...prev,
        [newTool.trim()]: false, // Initialize checkbox state for the new tool
      }));
      setNewTool(""); // Clear input
    }
  };

  // Add new tools from SelectToolsPage
  const handleAddTools = (selectedToolsFromPage) => {
    const newTools = selectedToolsFromPage.filter(
      (tool) => !tools.includes(tool)
    );
    setTools((prevTools) => [...prevTools, ...newTools]);

    // Initialize checkbox state for new tools
    const updatedSelectedTools = { ...selectedTools };
    newTools.forEach((tool) => {
      updatedSelectedTools[tool] = false;
    });
    setSelectedTools(updatedSelectedTools);
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
        onPress={() =>
          navigation.navigate("SelectToolsPage", { onAddTools: handleAddTools })
        }
        style={styles.suggestionLink}
      >
        <Text style={styles.suggestionText}>
          Not sure what to add? Click here →
        </Text>
        <Ionicons name="help-circle-outline" size={18} color="#6a9b3e" />
      </TouchableOpacity>

      {/* Input Section */}
      <View style={styles.inputContainer}>
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
      </View>

      {/* Tools List */}
      {/* <View style={styles.toolsContainer}>
        <FlatList
          // data={tools}
          data={contextTools}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.toolItem}>
              <TouchableOpacity
                onPress={() => toggleCheckbox(item)}
                style={styles.checkbox}
              >
                <Ionicons
                  name={selectedTools[item] ? "checkbox" : "square-outline"}
                  size={24}
                  color="#6A0DAD"
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.toolText,
                  selectedTools[item] && styles.strikethroughText,
                ]}
              >
                {item}
              </Text>
            </View>
          )}
        />
      </View> */}

<View style={styles.toolsContainer}>
  <FlatList
    data={contextTools}
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
              Array.isArray(selectedTools) && selectedTools.some((tool) => tool.name === item.name)
                ? "checkbox"
                : "square-outline"
            }
            size={24}
            color="#6A0DAD"
          />
        </TouchableOpacity>
        {/* Tool Name */}
        <Text style={styles.toolText}>{item.name}</Text>
      </View>
    )}
  />
</View>


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
    color: "#6a9b3e",
    textDecorationLine: "underline",
    marginRight: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
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
    // backgroundColor: "#6a9b3e",
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
  },
  strikethroughText: {
    textDecorationLine: "line-through",
    color: "#A9A9A9", // Optional: Change color to indicate the item is completed
  },
});

export default CustomizeScreen;
