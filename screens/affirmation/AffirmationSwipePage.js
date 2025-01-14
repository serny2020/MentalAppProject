import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import quotes from "../../data/quote-data";

const AffirmationSwipePage = ({ navigation }) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(require("../../assets/image/affirmation/affirmation1.png"));

  const handleNext = () => {
    if (currentIndex < quotes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleLove = () => {
    if (selectedCount < 6) {
      setSelectedCount(selectedCount + 1);
      Alert.alert("Added to Collection", "This affirmation was added.");
    } else {
      Alert.alert("Limit Reached", "You can only add up to 6 affirmations.");
    }
  };

  const updateBackgroundImage = (newImage) => {
    setBackgroundImage(newImage);
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

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Affirmation Card with Image Background */}
      <View style={styles.card}>
        <ImageBackground
          source={backgroundImage}
          style={styles.imageBackground}
          imageStyle={{ resizeMode: "cover", borderRadius: 12 }}
        >
          <Text style={styles.quote}>{quotes[currentIndex]}</Text>
        </ImageBackground>
      </View>

      {/* Love Button */}
      <View style={styles.centeredAction}>
        <TouchableOpacity onPress={handleLove} style={styles.loveButton}>
          <Text style={styles.loveText}>❤️ Love</Text>
        </TouchableOpacity>
      </View>

      {/* Counter for Selected Items */}
      <View style={styles.counterContainer}>
        <Text style={styles.selectedText}>Selected: {selectedCount}</Text>
      </View>

      {/* Bottom Right Button */}
      <TouchableOpacity
        style={styles.bottomRightButton}
        onPress={() =>
          navigation.navigate("ChangeBackgroundScreen", {
            updateBackgroundImage,
          })
        }
      >
        <Image
          source={require("../../assets/affirmation/ImageIcon.png")}
          style={styles.bottomRightImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA",
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
    marginVertical: 6,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
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
    // marginBottom: 16,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  centeredAction: {
    flex: 0,
    alignItems: "center",
    marginVertical: 16,
  },
  loveButton: {
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  loveText: {
    // position: "absolute",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  bottomRightButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    marginBottom: 15, // Adds space from the bottom
  },
  bottomRightImage: {
    width: 32,
    height: 32,
  },
  counterContainer: {
    alignItems: "left",
    marginBottom: 36,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
});

export default AffirmationSwipePage;
