import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SwiperScreen = () => {
  const navigation = useNavigation();
  const [thought, setThought] = useState("I am a loser because I can’t find a job after graduation.");

  const handleSwipeLeft = () => {
    console.log("Unhealthy thought swiped left");
    setThought("Swiped left: Unhealthy thought processed!");
  };

  const handleSwipeRight = () => {
    console.log("Healthy thought swiped right");
    setThought("Swiped right: Healthy thought accepted!");
  };

  const renderLeftActions = () => (
    <View style={[styles.actionContainer, styles.unhealthyAction]}>
      <Text style={styles.actionText}>Unhealthy Thought</Text>
    </View>
  );

  const renderRightActions = () => (
    <View style={[styles.actionContainer, styles.healthyAction]}>
      <Text style={styles.actionText}>Healthy Thought</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Swiper</Text>
        <Text style={styles.headerText}>Next</Text>
      </View>

      {/* Instructions */}
      <Text style={styles.instructions}>Let’s help you organize your thoughts:</Text>
      <Text style={styles.tips}>
        <Text style={styles.boldText}>TIPS:</Text> {"\n"}
        <Text style={styles.boldText}>Swipe left:</Text> things you can’t change from the past; things that are out of your control, unhelpful thoughts. {"\n"}
        <Text style={styles.boldText}>Swipe right:</Text> things that are under your control - you can take actions/change your mindset to stop them.
      </Text>

      {/* Swipeable Card */}
      <Swipeable
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableLeftOpen={handleSwipeLeft}
        onSwipeableRightOpen={handleSwipeRight}
      >
        <View style={styles.card}>
          <Text style={styles.thoughtText}>{thought}</Text>
          <Image
            source={require("../../../assets/image/letgo/SwiperScreen.png")} // Replace with your image path
            style={styles.thoughtImage}
          />
        </View>
      </Swipeable>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.unhealthyButton}>
          <Text style={styles.buttonText}>Unhealthy Thoughts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.healthyButton}>
          <Text style={styles.buttonText}>Healthy Thoughts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0", // Light green background
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
    fontSize: 22,
    fontWeight: "bold",
    color: "#A020F0", // Purple text
  },
  instructions: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  tips: {
    fontSize: 14,
    color: "#000",
    marginBottom: 16,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFF7E3", // Light yellow card background
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  thoughtText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 8,
  },
  thoughtImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  unhealthyButton: {
    backgroundColor: "#FFD580", // Orange button
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  healthyButton: {
    backgroundColor: "#ADD8E6", // Light blue button
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  unhealthyAction: {
    backgroundColor: "#FF7F7F", // Red for unhealthy
  },
  healthyAction: {
    backgroundColor: "#90EE90", // Green for healthy
  },
  actionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default SwiperScreen;
