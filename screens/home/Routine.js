import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Routine = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  const handleSettingsPress = (section) => {
    console.log(`Settings for ${section}`);
  };

  const handleCollapsePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Plan: {currentDate}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SettingsNavigator", { screen: "Settings" })
          }
        >
          <Ionicons name="person-circle-outline" size={30} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Mood Check-in */}
      <TouchableOpacity style={styles.moodCheckInButton}>
        <Text style={styles.moodCheckInText}>Daily Mood Check-in</Text>
      </TouchableOpacity>

      {/* Everyday Ritual Section */}
      <View style={styles.ritualSectionBox}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Every-day Ritual</Text>
          <TouchableOpacity onPress={handleSettingsPress('Everyday Ritual')}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#555" />
          </TouchableOpacity>
        </View>
        <View style={styles.timelineContainer}>
          <View style={styles.timelineItem}>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>8:00</Text>
            </View>
            <View style={styles.taskBox}>
              <Text style={styles.taskText}>CBT</Text>
            </View>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>14:00</Text>
            </View>
            <View style={styles.taskBox}>
              <Text style={styles.taskText}>Meditation</Text>
            </View>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>20:00</Text>
            </View>
            <View style={styles.taskBox}>
              <Text style={styles.taskText}>Journaling</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Affirmations Section */}
      <View style={styles.affirmationSectionBox}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Practice Affirmation</Text>
          <TouchableOpacity onPress={handleCollapsePress}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#555" />
          </TouchableOpacity>
        </View>
        <Text style={styles.instructions}>
          {`Step 1: Pick one affirmation from your Affirmation Collection
Step 2: Read it out loud for at least 3 times!`}
        </Text>
        <View style={styles.affirmationGrid}>
          <Image
            source={{ uri: "https://example.com/affirmation1.png" }}
            style={styles.affirmationImage}
          />
          <Image
            source={{ uri: "https://example.com/affirmation2.png" }}
            style={styles.affirmationImage}
          />
          <Image
            source={{ uri: "https://example.com/affirmation3.png" }}
            style={styles.affirmationImage}
          />
          <Image
            source={{ uri: "https://example.com/affirmation4.png" }}
            style={styles.affirmationImage}
          />
        </View>
      </View>

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Affirmation Collection</Text>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                closeModal();
                navigation.navigate("RoutineNavigator", {
                  screen: "AffirmationNavigator",
                });
              }}
                          >
              <Ionicons name="settings-outline" size={24} color="#555" />
              <Text style={styles.modalOptionText}>
                Manage My Affirmation Collection
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Ionicons name="reorder-four-outline" size={24} color="#555" />
              <Text style={styles.modalOptionText}>Reorder this section</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Ionicons name="close-circle-outline" size={24} color="#555" />
              <Text style={styles.modalOptionText}>Remove this section</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.modalCloseButton}
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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  moodCheckInButton: {
    marginVertical: 20,
    alignSelf: "center",
    backgroundColor: "#fce4ec",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  moodCheckInText: {
    fontSize: 16,
    color: "#800080",
    fontWeight: "bold",
  },
  ritualSectionBox: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  affirmationSectionBox: {
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    height: 300,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#800080",
  },
  timelineContainer: {
    marginTop: 10,
  },
  timelineItem: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  timeBox: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    fontSize: 16,
    color: "#9b59b6",
  },
  taskBox: {
    padding: 10,
    backgroundColor: "#e5e5e5",
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9b59b6",
  },
  instructions: {
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
  },
  affirmationGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  affirmationImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 10,
    padding: 20,
    alignItems: "flex-start", // Align other content to the left
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center", // Ensure the title is left-aligned
    width: "100%",
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "100%", // Ensure full width for alignment
  },
  modalOptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#555",
    textAlign: "left", // Left align text
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "#800080",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center", // Center the button
  },
  modalCloseText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Routine;
