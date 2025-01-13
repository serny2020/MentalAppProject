import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import HeatMap from "../../components/journal/HeatMap";
// import CalendarPickerStyle1 from "../../components/journal/CalendarPickerStyle1";
import CalendarPicker from "../../components/journal/CalanderPicker";

const JournalSummaryScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 13));
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [selectedEntry, setSelectedEntry] = useState(null); // Selected journal entry
  const [activeJournal, setActiveJournal] = useState("happiness"); // Active journal (happiness/mood)

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date); // Update the selected date
    }
    setShowDatePicker(false); // Close the picker after a date is selected
  };
  const handleDateSelection = (date) => {
    console.log('Selected Date:', date);
  };

  const happinessJournal = [
    { year: 2025, month: 1, date: 10, content: "I helped my roommate..." },
    { year: 2025, month: 1, date: 10, content: "I helped my roommate..." },
    { year: 2025, month: 1, date: 10, content: "I helped my roommate..." },
    { year: 2025, month: 1, date: 10, content: "I helped my roommate..." },
    { year: 2025, month: 1, date: 10, content: "I helped my roommate..." },
    {
      year: 2025,
      month: 1,
      date: 11,
      content: "I helped my roommate again...",
    },
    {
      year: 2025,
      month: 1,
      date: 11,
      content: "I helped my roommate again...",
    },
  ];

  const moodJournal = [
    {
      year: 2025,
      month: 1,
      date: 11,
      content: "I feel sad because I didn't...",
    },
    {
      year: 2025,
      month: 1,
      date: 11,
      content: "I feel sad because I didn't...",
    },
    {
      year: 2025,
      month: 1,
      date: 11,
      content: "I feel sad because I didn't...",
    },
    {
      year: 2025,
      month: 1,
      date: 11,
      content: "I feel sad because I didn't...",
    },
    {
      year: 2025,
      month: 1,
      date: 11,
      content: "I feel sad because I didn't...",
    },
  ];

  // Determine which journal to filter based on the activeJournal state
  const journalData =
    activeJournal === "happiness" ? happinessJournal : moodJournal;

  const filteredJournal = journalData.filter(
    (entry) =>
      entry.year === selectedDate.getFullYear() &&
      entry.month === selectedDate.getMonth() + 1 &&
      entry.date === selectedDate.getDate()
  );

  const renderJournal = ({ item }) => (
    <View style={styles.journalEntry}>
      {/* Headers */}
      <View style={styles.headerRow}>
        <Text style={styles.journalHeader}>YEAR</Text>
        <Text style={styles.journalHeader}>MONTH</Text>
        <Text style={styles.journalHeader}>DATE</Text>
        <Text style={styles.journalHeader}>CONTENT</Text>
      </View>
      {/* Data */}
      <View style={styles.dataRow}>
        <Text style={styles.journalData}>{item.year}</Text>
        <Text style={styles.journalData}>{item.month}</Text>
        <Text style={styles.journalData}>{item.date}</Text>
        <TouchableOpacity
          onPress={() => {
            setSelectedEntry(item); // Set the selected entry
            setModalVisible(true); // Show the modal
          }}
        >
          <Text style={styles.journalContentLink}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Journal Summary</Text>
        <View style={styles.datePickerContainer}>
          {/* <CalendarPickerStyle1 value={selectedDate} onDateChange={setSelectedDate} /> */}
          <CalendarPicker onConfirm={setSelectedDate} />
        </View>
      </View>

      {/* Heatmap Section */}
      <HeatMap
        data={[
          [1, 3, 2, 4, 5, 2, 4, 5, 2, 2, 6, 8],
          [5, 4, 3, 2, 1, 2, 4, 5, 2, 2, 6, 8],
          [2, 3, 4, 5, 1, 2, 4, 5, 2, 2, 6, 8],
          [1, 1, 2, 3, 4, 2, 4, 5, 2, 2, 6, 8],
          [3, 2, 1, 0, 0, 2, 4, 5, 2, 2, 6, 0],
          [3, 2, 1, 0, 0, 2, 4, 5, 2, 2, 6, 0],
          [3, 2, 1, 0, 0, 2, 4, 5, 2, 2, 6, 0],
        ]} // Example data, replace with your actual data
        colors={["#e0f7fa", "#00796b"]}
        cellSize={20}
        gap={5}
      />
      {/* Journal Toggle */}
      <View style={styles.journalToggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeJournal === "happiness" && styles.activeToggleButton,
          ]}
          onPress={() => setActiveJournal("happiness")}
        >
          <Text
            style={[
              styles.toggleButtonText,
              activeJournal === "happiness" && styles.activeToggleButtonText,
            ]}
          >
            Happiness
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeJournal === "mood" && styles.activeToggleButton,
          ]}
          onPress={() => setActiveJournal("mood")}
        >
          <Text
            style={[
              styles.toggleButtonText,
              activeJournal === "mood" && styles.activeToggleButtonText,
            ]}
          >
            Mood
          </Text>
        </TouchableOpacity>
      </View>

      {/* Journal Entries */}
      <FlatList
        data={filteredJournal}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderJournal}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.noEntriesText}>No entries for this date.</Text>
            <Ionicons name="sad-outline" size={50} color="#ccc" />
          </View>
        }
      />

      {/* Modal for Viewing Content */}
      {/* {selectedEntry && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {activeJournal === "happiness"
                  ? "Happiness Journal Entry"
                  : "Mood Journal Entry"}
              </Text>
              <Text style={styles.modalText}>{selectedEntry.content}</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )} */}
      {selectedEntry && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Updated Modal Title */}
              <Text style={styles.modalTitle}>
                {`${selectedEntry.year}-${String(selectedEntry.month).padStart(
                  2,
                  "0"
                )}-${String(selectedEntry.date).padStart(2, "0")}`}
              </Text>
              {/* <Text style={styles.modalSubtitle}>
          {activeJournal === "happiness"
            ? "Happiness Journal Entry"
            : "Mood Journal Entry"}
        </Text> */}
              <Text style={styles.modalText}>{selectedEntry.content}</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4f4f4f",
  },
  datePickerContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  datePicker: {
    width: 150,
  },
  journalToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#DDD",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeToggleButton: {
    backgroundColor: "#007BFF",
  },
  toggleButtonText: {
    fontSize: 16,
    color: "#333",
  },
  activeToggleButtonText: {
    color: "#FFF",
  },
  contentContainer: {
    paddingBottom: 16,
  },
  journalEntry: {
    backgroundColor: "#FFF",
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
  },
  headerRow: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "flex-start", // Align items to the start (left)
    marginBottom: 8,
  },
  dataRow: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "flex-start", // Align items to the start (left)
  },
  journalHeader: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#4f4f4f",
    textAlign: "left", // Align text to the left
    flex: 1, // Allow headers to take up equal space
  },
  journalData: {
    fontSize: 13,
    color: "#000",
    textAlign: "left", // Align text to the left
    flex: 1, // Allow data to take up equal space
  },
  journalContentLink: {
    fontSize: 14,
    color: "#007BFF",
    textDecorationLine: "underline",
    textAlign: "left", // Align text to the left
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  noEntriesText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default JournalSummaryScreen;
