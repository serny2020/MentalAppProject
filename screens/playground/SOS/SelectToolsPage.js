import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tools from "../../../data/tools-data";

const SelectToolsPage = ({ navigation, route }) => {
  const [selectedTools, setSelectedTools] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const isSelectAllPressable = selectedTools.length !== tools.length;
  const isDeselectAllPressable = selectedTools.length > 0;

  const toggleSelectTool = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((item) => item !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const selectAllTools = () => {
    setSelectedTools(tools.map((tool) => tool.name));
  };

  const deselectAllTools = () => {
    setSelectedTools([]);
  };

  const openInfoModal = (title, info) => {
    setModalTitle(title);
    setModalInfo(info);
    setModalVisible(true);
  };

  const handleAddTools = () => {
    const onAddTools = route.params?.onAddTools;
    if (onAddTools) {
      onAddTools(selectedTools); // Call the callback with selected tools
    }
    navigation.goBack(); // Navigate back to CustomizeScreen
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
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle-outline" size={24} color="#6A0DAD" />
        </TouchableOpacity> */}
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Pick tools working the best for you to add to your emergency toolkit:
      </Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: isSelectAllPressable ? "#6A0DAD" : "#B085DA", // Default purple for pressable, lighter purple for disabled
            },
          ]}
          onPress={selectAllTools}
          disabled={!isSelectAllPressable}
        >
          <Text style={styles.actionButtonText}>Select All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor: isDeselectAllPressable ? "#6A0DAD" : "#B085DA", // Default purple for pressable, lighter purple for disabled
            },
          ]}
          onPress={deselectAllTools}
          disabled={!isDeselectAllPressable}
        >
          <Text style={styles.actionButtonText}>Deselect All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleAddTools}>
          <Text style={styles.actionButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Tools List */}
      <FlatList
        data={tools}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.toolItem}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => toggleSelectTool(item.name)}
            >
              <Ionicons
                name={
                  selectedTools.includes(item.name)
                    ? "checkbox"
                    : "square-outline"
                }
                size={24}
                color="#6A0DAD"
              />
            </TouchableOpacity>
            <Text style={styles.toolText}>{item.name}</Text>
            {item.info &&
              item.info.trim() !== "" && ( // Check if info exists and is not empty
                <TouchableOpacity
                  onPress={() => openInfoModal(item.name, item.info)}
                  style={styles.infoIcon}
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

      {/* Info Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Dynamic Title */}
            <Text style={styles.modalHeaderText}>{modalTitle}</Text>
            {/* Dynamic Content */}
            <View style={styles.modalBody}>
              {modalInfo ? (
                modalInfo.split(/(?<=[.?\!])\s+/).map((sentence, index) => (
                  <View key={index} style={styles.bulletContainer}>
                    <Text style={styles.bulletText}>{"\u2022"}</Text>
                    <Text style={styles.bulletSentence}>{sentence.trim()}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.modalFallbackText}>
                  No additional information available.
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#6A0DAD",
  },
  modalBody: {
    width: "100%",
    paddingHorizontal: 8,
  },
  modalBulletText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    marginLeft: 16,
    color: "#333",
  },
  modalCloseButton: {
    backgroundColor: "#6A0DAD",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  modalCloseText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  bulletContainer: {
    flexDirection: "row", // Align bullet and text horizontally
    alignItems: "flex-start", // Align bullet with the first line of text
    marginBottom: 8, // Space between bullets
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 8, // Space between bullet and text
    color: "#333",
  },
  bulletSentence: {
    flex: 1, // Ensures text wraps properly within the available space
    fontSize: 16,
    lineHeight: 24, // Proper spacing for multi-line text
    color: "#333",
  },
});

export default SelectToolsPage;
