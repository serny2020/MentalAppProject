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

const SelectToolsPage = ({ navigation }) => {
  const tools = [
    {
      name: "Spend time outdoor: rock climbing/hiking/biking/walking/running",
      info: "",
    },
    {
      name: "Get out of my room",
      info: "",
    },
    {
      name: "Workout in a gym",
      info: "",
    },
    {
      name: "Walk on the ground with bare feet",
      info: "",
    },
    {
      name: "Drink some water",
      info: "",
    },
    {
      name: "Describe your environment using five senses",
      info: "what are 5 things you can see? what are 4 things you can touch? what are 3 things you can hear? what are 2 things you can smell? what is 1 thing you can taste?",
    },
    {
      name: "Opposite action",
      info: "Do the opposite of what your emotion is telling you to do. For example, if you are sad and want to stay in bed, get up instead.",
    },
    {
      name: "Try RAIN",
      info: "Recognize the feeling. Allow the feeling to be there. Investigate the feeling. e.g.is it from the past or present?- origins, triggers, how they affect you). Nurture yourself (with kindness & understanding)",
    },
    {
      name: "Distraction",
      info: "Engage in an activity to distract your mind from stress. Try reading, watching a show, or doing a hobby you enjoy.",
    },
    {
      name: "Touch various objects around you",
      info: "Touching objects can help ground you in the moment. Focus on the texture, temperature, and weight of the objects.",
    },
    {
      name: "Think of favorites: color, animal, season, food, TV show, movie",
      info: "Thinking of your favorites can uplift your mood. Remind yourself of the things you enjoy.",
    },
    {
      name: "Read something out loud",
      info: "Reading out loud can help you focus and calm down. Pick something simple, like a book or a poem.",
    },
    {
      name: "Write down my thoughts on a piece of paper",
      info: "Writing thoughts can help process emotions. Journaling is a great way to organize your feelings.",
    },
  ];

  const [selectedTools, setSelectedTools] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState("");
  const [modalTitle, setModalTitle] = useState("");

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle-outline" size={24} color="#6A0DAD" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Pick tools working the best for you to add to your emergency toolkit:
      </Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton} onPress={selectAllTools}>
          <Text style={styles.actionButtonText}>Select All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={deselectAllTools}
        >
          <Text style={styles.actionButtonText}>Deselect All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => alert("Tools added!")}
        >
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
