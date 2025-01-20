import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tools from "../../../data/tools-data";
import SelectToolsModal from "../../../components/SOS/SelectToolsModal";
import { useTools } from "../../../context/ToolsContext";
import CheckBoxBotton from "../../../components/SOS/CheckBoxBotton";
import Tabs from "../../../components/SOS/Tabs";

const SelectToolsPage = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("General");
  const [selectedTools, setSelectedTools] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const { contextTools, addTools } = useTools();

  const generalTools = tools.filter((tool) => tool.category === "General");
  const multimediaTools = tools.filter(
    (tool) => tool.category === "Multimedia"
  );

  const toggleSelectTool = (tool) => {
    console.log("check the type of added tool: ", tool);
    // Check if the tool is already selected by comparing its unique property
    if (selectedTools.some((item) => item.name === tool.name)) {
      // Deselect the tool
      setSelectedTools(selectedTools.filter((item) => item.name !== tool.name));
    } else {
      // Select the tool
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const selectAllTools = () => {
    const tabTools = selectedTab === "General" ? generalTools : multimediaTools;

    // Combine selectedTools and tabTools, ensuring no duplicates
    const combinedTools = [
      ...selectedTools,
      ...tabTools.filter(
        (tool) => !selectedTools.some((selected) => selected.name === tool.name)
      ),
    ];

    setSelectedTools(combinedTools);
  };

  const deselectAllTools = () => {
    const tabTools = selectedTab === "General" ? generalTools : multimediaTools;

    // Remove tools from selectedTools that are in the current tab
    const updatedTools = selectedTools.filter(
      (tool) => !tabTools.some((tabTool) => tabTool.name === tool.name)
    );

    setSelectedTools(updatedTools);
  };

  const openInfoModal = (title, info) => {
    setModalTitle(title);
    setModalInfo(info);
    setModalVisible(true);
  };

  const handleAddTools = () => {
    console.log("add to context:", selectedTools);
    addTools(selectedTools); // Use the context method to add full objects
    navigation.goBack(); // Navigate back
  };

  const renderTabContent = () => {
    const toolsData =
      selectedTab === "General" ? generalTools : multimediaTools;

    return (
      <FlatList
        data={toolsData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.toolItem}>
            {/* Checkbox */}
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => toggleSelectTool(item)} // Pass the entire object
            >
              <Ionicons
                name={
                  selectedTools.some((tool) => tool.name === item.name) // Check by unique property
                    ? "checkbox"
                    : "square-outline"
                }
                size={24}
                color="#6A0DAD"
              />
            </TouchableOpacity>
            {/* Render icon for Multimedia tools */}
            {selectedTab === "Multimedia" && item.icon && (
              <Image
                source={item.icon}
                style={styles.icon}
                resizeMode="contain"
              />
            )}

            {/* Tool name with pressable behavior for Multimedia */}
            {selectedTab === "Multimedia" ? (
              <TouchableOpacity
                style={styles.toolButton}
                onPress={() => openInfoModal(item.name, item.info)}
              >
                <Text style={styles.toolText}>{item.name}</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.toolText}>{item.name}</Text>
            )}

            {/* Info button for General tools */}
            {selectedTab === "General" && item.info && (
              <TouchableOpacity
                style={styles.infoIcon}
                onPress={() => openInfoModal(item.name, item.info)}
              >
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color="#6A0DAD"
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={24}
            color="#6A0DAD"
          />
        </TouchableOpacity>
        <Ionicons name="help-circle-outline" size={28} color="#6A0DAD" />
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Pick tools working the best for you to add to your emergency toolkit:
      </Text>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <Tabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          styles={styles}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        {/* Select All Button */}
        <CheckBoxBotton
          selectedTab={selectedTab}
          selectedTools={selectedTools}
          tools={selectedTab === "General" ? generalTools : multimediaTools}
          onPress={() =>
            selectAllTools(
              selectedTab === "General" ? generalTools : multimediaTools
            )
          }
          isSelectAll={true} // Indicates this is the Select All button
          styles={styles} // Pass styles
        />

        {/* Deselect All Button */}
        <CheckBoxBotton
          selectedTab={selectedTab}
          selectedTools={selectedTools}
          tools={selectedTab === "General" ? generalTools : multimediaTools}
          onPress={() =>
            deselectAllTools(
              selectedTab === "General" ? generalTools : multimediaTools
            )
          }
          isSelectAll={false} // Indicates this is the Deselect All button
          styles={styles} // Pass styles
        />

        {/* Add Button */}
        <TouchableOpacity style={styles.actionButton} onPress={handleAddTools}>
          <Text style={styles.actionButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Info Modal */}
      <SelectToolsModal
        visible={modalVisible}
        title={modalTitle}
        info={modalInfo}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "center",
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    marginHorizontal: 8,
  },
  activeTab: {
    borderBottomColor: "#6A0DAD",
  },
  tabText: {
    fontSize: 16,
    color: "#888",
  },
  activeTabText: {
    color: "#6A0DAD",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: "#6A0DAD",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  actionButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  toolItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    marginRight: 8,
  },
  toolText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  infoIcon: {
    marginLeft: 8,
  },
  toolItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    padding: 5,
    borderRadius: 8,
    // backgroundColor: "#f9f9f9",
  },
  checkbox: {
    marginRight: 8, // Space between checkbox and icon
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8, // Space between icon and text
  },
  toolButton: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    // backgroundColor: "#e6f7ff", // Light blue background for pressable items
  },
  toolText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  infoIcon: {
    marginLeft: 8,
  },
});

export default SelectToolsPage;
