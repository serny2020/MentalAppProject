import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Updated import from Expo
import { useState } from 'react';

const EverydayRitualSection = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const handleSettingsPress = () => {
      console.log("a setting for ritual");
    };
  
    const handleCollapsePress = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
  
  return (
    <View style={styles.ritualSectionBox}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Every-day Ritual</Text>
        <TouchableOpacity onPress={() => handleSettingsPress('Everyday Ritual')}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      <View style={styles.timelineContainer}>
        {/* Timeline Item 1 */}
        <View style={styles.timelineItem}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>8:00</Text>
          </View>
          <View style={styles.taskBox}>
            <Text style={styles.taskText}>CBT</Text>
          </View>
        </View>

        {/* Timeline Item 2 */}
        <View style={styles.timelineItem}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>14:00</Text>
          </View>
          <View style={styles.taskBox}>
            <Text style={styles.taskText}>Meditation</Text>
          </View>
        </View>

        {/* Timeline Item 3 */}
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
  );
};

const styles = StyleSheet.create({
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
    height: 280,
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
});

export default EverydayRitualSection;
