import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";

const AffirmationSwipePage = ({ navigation }) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(
    "I am imperfect, but I love and accept all that I am."
  );

  const handleNext = () => {
    // Placeholder logic to update the quote
    setCurrentQuote("New quote goes here...");
  };

  const handleLove = () => {
    if (selectedCount < 6) {
      setSelectedCount(selectedCount + 1);
      Alert.alert("Added to Collection", "This affirmation was added.");
    } else {
      Alert.alert("Limit Reached", "You can only add up to 6 affirmations.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("Done", "Your affirmations are saved!")}
        >
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <Text style={styles.instructions}>
        Swipe up: move to the next quote, {"\n"}
        Swipe down: add it to your affirmation collection
      </Text>

      {/* Affirmation Card with Image Background */}
      <View style={styles.card}>
        <ImageBackground
          source={require("../../assets/image/affirmation/affirmation1.png")} // Replace with your actual image file path
          style={styles.card} // Ensures the image fills the entire card container
          imageStyle={{ resizeMode: "cover", borderRadius: 12 }} // Makes the image cover the card area and adds rounded corners
        >
          <Text style={styles.quote}>{currentQuote}</Text>
        </ImageBackground>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Actions */}
      <View style={styles.actions}>
        <Text style={styles.selectedText}>{selectedCount} selected</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={handleLove} style={styles.loveButton}>
            <Text style={styles.loveText}>❤️ Love</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA", // Light pink background
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 16,
    color: "#000",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  imageBackground: {
    width: "100%",
    height: "70%",
    justifyContent: "center", // Centers the quote text vertically
    alignItems: "center", // Centers the quote text horizontally
    borderRadius: 12,
    overflow: "hidden", // Ensures rounded corners work with the background image
  },
  imageStyle: {
    borderRadius: 12,
  },
  quote: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFA500",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    paddingHorizontal: 16,
  },
  nextButton: {
    alignSelf: "center",
    backgroundColor: "#D3D3D3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  selectedText: {
    fontSize: 16,
    color: "#000",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  loveButton: {
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    marginLeft: 16,
  },
  loveText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default AffirmationSwipePage;
