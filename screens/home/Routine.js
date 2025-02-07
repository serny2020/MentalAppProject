import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EverydayRitualSection from "../../components/routine/EverydayRitualSection";
import AffirmationSection from "../../components/routine/AffirmationSection";
import HappinessJournalReview from "../../components/routine/HappinessJournalReview";
import TipOfTheDay from "../../components/routine/TipOfTheDay";
import RoutineSettingsModal from "../../components/routine/RoutineSettingsModal";

const Routine = ({ navigation, route }) => {
  const initialOrder = [
    { id: "1", component: <EverydayRitualSection />, name: "Everyday Ritual" },
    {
      id: "2",
      component: <AffirmationSection />,
      name: "Affirmation Practice",
    },
    {
      id: "3",
      component: <HappinessJournalReview />,
      name: "Happiness Journal Review",
    },
    { id: "4", component: <TipOfTheDay />, name: "Tip of the Day" },
  ];

  const [sections, setSections] = useState(initialOrder);

  // Lookup table for components
  const componentLookup = {
    1: <EverydayRitualSection />,
    2: <AffirmationSection />,
    3: <HappinessJournalReview />,
    4: <TipOfTheDay />,
  };

  // Update sections when newOrder is passed
  useEffect(() => {
    if (route.params?.newOrder) {
      const reorderedSections = route.params.newOrder.map((section) => ({
        ...section,
        component: componentLookup[section.id], // Reattach the component
      }));
      setSections(reorderedSections);
    }
  }, [route.params?.newOrder]);

  const handleReorderPress = () => {
    navigation.navigate("ReorderSettings", {
      currentOrder: sections.map(({ id, name }) => ({ id, name })), // Pass only serializable data
      updateOrder: (newOrder) => {
        // Callback function to update sections
        const componentLookup = {
          1: <EverydayRitualSection />,
          2: <AffirmationSection />,
          3: <HappinessJournalReview />,
          4: <TipOfTheDay />,
        };

        const reorderedSections = newOrder.map((section) => ({
          ...section,
          component: componentLookup[section.id],
        }));
        setSections(reorderedSections);
      },
    });
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  const [isModalVisible, setModalVisible] = useState(false);
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

      <ScrollView
        style={styles.scrollableContainer}
        contentContainerStyle={styles.contentContainer}
      >
        {sections.map((section) => (
          <View key={section.id}>{section.component}</View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={handleReorderPress}
        style={styles.settingsButton}
      >
        <Text style={styles.text}>
          Want to change the sections? Feel free to{" "}
          <Text style={styles.boldText}>reorder your routine</Text> here!
          <Image
            source={require("../../assets/image/icon/rightArrow.png")}
            style={styles.icon}
          />
        </Text>

        {/* <Text style={styles.settingsButtonText}>Reorder Routine</Text> */}
      </TouchableOpacity>

      {/* Routine Settings Modal */}
      <RoutineSettingsModal
        isVisible={isModalVisible}
        onClose={closeModal}
        navigation={navigation}
      />
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
  scrollableContainer: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    paddingHorizontal: 2, // Add horizontal padding
    paddingVertical: 5,
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
  bottomMessageContainer: {
    position: "absolute",
    bottom: 20, // Moves it closer to the bottom
    left: 20,
    right: 20,
    backgroundColor: "#f7ffcc", // Light yellow background
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#000",
    fontWeight: "400",
  },
  boldText: {
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    marginLeft: 5, // Adds spacing between text and button
  },
  icon: {
    width: 10,
    height: 10,
  },
  settingsButton: {
    textAlign: "center",
    elevation: 3, // Adds a subtle shadow (Android)
    marginBottom: 20,
  },
});

export default Routine;
