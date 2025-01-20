import React, { useState } from "react";
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

const SelectToolsPage = ({ navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState("General");
  const [selectedTools, setSelectedTools] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const generalTools = tools.filter((tool) => tool.category === "General");
  const multimediaTools = tools.filter(
    (tool) => tool.category === "Multimedia"
  );

  const isSelectAllPressable = (tabTools) =>
    selectedTools.length !== tabTools.length;
  const isDeselectAllPressable = (tabTools) => selectedTools.length > 0;

  const toggleSelectTool = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((item) => item !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  // const toggleSelectTool = (tool) => {
  //   if (selectedTools.some((item) => item.name === tool.name)) {
  //     setSelectedTools(selectedTools.filter((item) => item.name !== tool.name));
  //   } else {
  //     setSelectedTools([...selectedTools, tool]);
  //   }
  // };
  

  const selectAllTools = () => {
    const tabTools = selectedTab === "General" ? generalTools : multimediaTools;
    setSelectedTools([
      ...new Set([...selectedTools, ...tabTools.map((tool) => tool.name)]),
    ]);
  };

  const deselectAllTools = () => {
    const tabTools = selectedTab === "General" ? generalTools : multimediaTools;
    setSelectedTools(
      selectedTools.filter(
        (tool) => !tabTools.map((t) => t.name).includes(tool)
      )
    );
  };

  const openInfoModal = (title, info) => {
    setModalTitle(title);
    setModalInfo(info);
    setModalVisible(true);
  };

  // const handleAddTools = () => {
  //   const onAddTools = route.params?.onAddTools;
  //   if (onAddTools) {
  //     onAddTools(
  //       selectedTools.map((tool) => ({
  //         name: tool.name,
  //         image: tool.image || null, // Include image if it exists
  //         pressable: selectedTab === "Multimedia", // Add pressable flag for multimedia tools
  //       }))
  //     );
  //   }
  //   navigation.goBack();
  // };
  
  

  const handleAddTools = () => {
    const onAddTools = route.params?.onAddTools;
    if (onAddTools) {
      onAddTools(selectedTools); // Call the callback with selected tools
    }
    navigation.goBack(); // Navigate back to CustomizeScreen
  };

  const renderTabContent = () => {
    const toolsData = selectedTab === "General" ? generalTools : multimediaTools;
  
    return (
      <FlatList
        data={toolsData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.toolItem}>
  
            {/* Checkbox */}
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => toggleSelectTool(item.name)}
              >
              <Ionicons
                name={selectedTools.includes(item.name) ? "checkbox" : "square-outline"}
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
                <Ionicons name="help-circle-outline" size={20} color="#6A0DAD" />
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
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle-outline" size={24} color="#6A0DAD" />
        </TouchableOpacity> */}
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Pick tools working the best for you to add to your emergency toolkit:
      </Text>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "General" && styles.activeTab]}
          onPress={() => setSelectedTab("General")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "General" && styles.activeTabText,
            ]}
          >
            General Tips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Multimedia" && styles.activeTab]}
          onPress={() => setSelectedTab("Multimedia")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Multimedia" && styles.activeTabText,
            ]}
          >
            Multimedia Toolbox
          </Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        {/* Select All Button */}
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor:
                selectedTab === "General"
                  ? selectedTools.filter((tool) =>
                      generalTools.map((t) => t.name).includes(tool)
                    ).length < generalTools.length
                    ? "#6A0DAD"
                    : "#B085DA"
                  : selectedTools.filter((tool) =>
                      multimediaTools.map((t) => t.name).includes(tool)
                    ).length < multimediaTools.length
                  ? "#6A0DAD"
                  : "#B085DA",
            },
          ]}
          onPress={() =>
            selectAllTools(
              selectedTab === "General" ? generalTools : multimediaTools
            )
          }
          disabled={
            selectedTab === "General"
              ? selectedTools.filter((tool) =>
                  generalTools.map((t) => t.name).includes(tool)
                ).length === generalTools.length
              : selectedTools.filter((tool) =>
                  multimediaTools.map((t) => t.name).includes(tool)
                ).length === multimediaTools.length
          }
        >
          <Text style={styles.actionButtonText}>Select All</Text>
        </TouchableOpacity>

        {/* Deselect All Button */}
        <TouchableOpacity
          style={[
            styles.actionButton,
            {
              backgroundColor:
                selectedTab === "General"
                  ? selectedTools.some((tool) =>
                      generalTools.map((t) => t.name).includes(tool)
                    )
                    ? "#6A0DAD"
                    : "#B085DA"
                  : selectedTools.some((tool) =>
                      multimediaTools.map((t) => t.name).includes(tool)
                    )
                  ? "#6A0DAD"
                  : "#B085DA",
            },
          ]}
          onPress={() =>
            deselectAllTools(
              selectedTab === "General" ? generalTools : multimediaTools
            )
          }
          disabled={
            selectedTab === "General"
              ? !selectedTools.some((tool) =>
                  generalTools.map((t) => t.name).includes(tool)
                )
              : !selectedTools.some((tool) =>
                  multimediaTools.map((t) => t.name).includes(tool)
                )
          }
        >
          <Text style={styles.actionButtonText}>Deselect All</Text>
        </TouchableOpacity>

        {/* Add Button */}
        <TouchableOpacity style={styles.actionButton} onPress={handleAddTools}>
          <Text style={styles.actionButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {renderTabContent()}

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
