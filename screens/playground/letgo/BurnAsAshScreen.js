import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from "react-native";

const BurnAsAshScreen = ({ navigation, route }) => {
  const { thoughts } = route.params || ""; // Get the passed thoughts or fallback to empty string
  const sentences = thoughts
    ? thoughts
        .split(".")
        .filter((sentence) => sentence.trim() !== "") // Filter out empty sentences
        .map((sentence) => `"${sentence.trim()}."`) // Add quotes and retain period
    : []; // Split thoughts into individual sentences

  const [isBurning, setIsBurning] = useState(false);
  const [isBurned, setIsBurned] = useState(false);

  // Create Animated.Values for each sentence
  const sentenceAnimations = useRef(
    sentences.map(() => new Animated.Value(1))
  ).current;

  const handleBurnThoughts = () => {
    setIsBurning(true);

    // Reverse the animations array so bottom-to-top order is applied
    const animations = [...sentenceAnimations].reverse().map((anim, index) =>
      Animated.timing(anim, {
        toValue: 0, // Fade out
        duration: 800, // Duration of each sentence's fade-out
        delay: index * 500, // Stagger animations from bottom to top
        useNativeDriver: true, // Optimize performance
      })
    );

    // Start animations in sequence
    Animated.stagger(500, animations).start(() => {
      setIsBurning(false);
      setIsBurned(true); // Mark as burned after animation
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>
          Back
        </Text>
        <Text style={styles.headerText}>Exit</Text>
      </View>

      {/* Title and Description */}
      <Text style={styles.title}>Burn them as ash</Text>
      <Text style={styles.description}>
        Everyone has down times and negative thoughts. These thoughts cannot
        define who you are. Let them go by clicking on the 🔥 button!
      </Text>

      {/* Burning Thoughts Section */}
      <View style={styles.thoughtsContainer}>
        {/* Flame Animation */}
        {isBurning && (
          <View style={styles.flameOverlay}>
            <Image
              source={require("../../../assets/image/letgo/flames.gif")} // Use a flame GIF
              style={styles.flameImage}
            />
          </View>
        )}

        {/* Thoughts Content */}
        <ScrollView
          contentContainerStyle={styles.thoughtsContent}
          showsVerticalScrollIndicator={false}
        >
          {sentences.map((sentence, index) => (
            <Animated.View
              key={index}
              style={{ opacity: sentenceAnimations[index] }}
            >
              <Text style={styles.thoughtText}>{sentence}</Text>
            </Animated.View>
          ))}

          {isBurned && (
            <Text style={styles.ashText}>
              Well done! You’ve burned those thoughts into oblivion. Ashes to ashes, dust to positivity!
            </Text>
          )}
        </ScrollView>
      </View>

      {/* Burn Button */}
      <TouchableOpacity style={styles.burnButton} onPress={handleBurnThoughts}>
        <Image
          source={require("../../../assets/image/letgo/BurnAsAshIcon.png")}
          style={styles.fireIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3", // Light grey background
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    marginBottom: 16,
  },
  thoughtsContainer: {
    position: "relative",
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    overflow: "hidden", // Ensure flames don't overflow the container
    height: 400, // Increased height for the container
  },
  thoughtsContent: {
    paddingHorizontal: 8,
  },
  thoughtText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  ashText: {
    fontSize: 16,
    color: "#B0B0B0", // Ash-like grey color
    textAlign: "center",
    marginTop: 16,
  },
  flameOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100, // Fixed height for flame GIF
    backgroundColor: "transparent",
    zIndex: 1,
  },
  flameImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  burnButton: {
    alignItems: "center",
    marginTop: 16,
  },
  fireIcon: {
    width: 60,
    height: 60,
  },
});

export default BurnAsAshScreen;
