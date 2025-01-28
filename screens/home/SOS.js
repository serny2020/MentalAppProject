import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  PanResponder,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SOS = ({ navigation }) => {
  // const options = [
  //   {
  //     id: "1",
  //     text: "Open Your Personal ",
  //     boldText: "Emergency Toolkit",
  //     action: () =>
  //       navigation.navigate("SOSNavigator", {
  //         screen: "EmergencyToolkitScreen",
  //       }),
  //   },
  //   {
  //     id: "2",
  //     text: "Connect Your ",
  //     boldText: "Loved Ones",
  //     action: () =>
  //       navigation.navigate("SOSNavigator", { screen: "LovedOnesPage" }),
  //   },
  //   {
  //     id: "3",
  //     text: "Chat in Your ",
  //     boldText: "Community",
  //     action: () => alert("Chat in Your Community!"),
  //   },
  //   {
  //     id: "4",
  //     text: "Find a ",
  //     boldText: "Professional Therapist",
  //     action: () =>
  //       navigation.navigate("SOSNavigator", { screen: "CrisisHelpPage" }),
  //   },
  //   {
  //     id: "5",
  //     text: "Call ",
  //     boldText: "Life Threat Emergency Line",
  //     action: () =>
  //       navigation.navigate("SOSNavigator", { screen: "CrisisHelpPage" }),
  //   },
  // ];

  const [reorderableOptions, setReorderableOptions] = useState([
    {
      id: "1",
      text: "Open Your Personal ",
      boldText: "Emergency Toolkit",
      action: () =>
        navigation.navigate("SOSNavigator", {
          screen: "EmergencyToolkitScreen",
        }),
    },
    {
      id: "2",
      text: "Connect Your ",
      boldText: "Loved Ones",
      action: () =>
        navigation.navigate("SOSNavigator", { screen: "LovedOnesPage" }),
    },
    {
      id: "3",
      text: "Connect Your ",
      boldText: "Loved Ones",
      action: () =>
        navigation.navigate("SOSNavigator", { screen: "LovedOnesPage" }),
    },
    {
      id: "4",
      text: "Open Your Personal ",
      boldText: "Emergency Toolkit",
      action: () =>
        navigation.navigate("SOSNavigator", {
          screen: "EmergencyToolkitScreen",
        }),
    },
    {
      id: "5",
      text: "Call ",
      boldText: "Life Threat Emergency Line",
      action: () =>
        navigation.navigate("SOSNavigator", { screen: "CrisisHelpPage" }),
    },
  ]);

  const handleReorderPress = () => {
    navigation.navigate("SOSNavigator", {
      screen: "ReorderSOS",
      params: {
        reorderableOptions,
        updateOptions: (newOrder) => setReorderableOptions(newOrder),
      },
    });
  };

  const sliderTop = 230; // The vertical offset of the slider
  const sliderHeight = 400; // NOTE: The height of the slider

  const [sliderPosition, setSliderPosition] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const newY = Math.max(
        0,
        Math.min(gestureState.moveY - sliderTop, sliderHeight)
      );
      setSliderPosition(newY);
    },
  });

  const highlightIndex = Math.floor(
    sliderPosition / (410 / reorderableOptions.length)
  ); //NOTE: corresponding item

  const totalItems = 5; // Number of items
  const minValue = 1; // Start of the range
  const maxValue = 10; // End of the range

  // Calculate the contiguous number based on slider position
  const scaledNumber = Math.round(
    minValue + (highlightIndex / (totalItems - 1)) * (maxValue - minValue)
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* Top-Left Button */}
        <TouchableOpacity
          style={styles.topLeftButton}
          onPress={handleReorderPress}
        >
          <Image
            source={require("../../assets/SOS/SOSreorder.png")} // Replace with your local image path
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        {/* Existing Local Icon and Text */}
        <Image
          source={require("../../assets/SOS/SOSIcon.png")}
          style={styles.localIcon}
        />
        <Text style={styles.headerText}>
          Dear <Text style={styles.highlight}>Larry</Text>,{"\n"}
          Don’t worry, we’ll help you. {"\n"}You are not alone.{"\n"}
          <Text style={styles.highlight}>We love you. ❤️</Text>
        </Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Options Section */}
        <View style={styles.optionsContainer}>
          {/* Reorderable Options */}
          {reorderableOptions.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.optionRow,
                highlightIndex === index && styles.highlightedOption, // Highlight if matches index
              ]}
              onPress={item.action}
            >
              <Text style={styles.optionText}>
                {item.text}
                <Text style={styles.bold}>{item.boldText}</Text>
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Right Slider */}
        {/* <View style={styles.leftColumn} {...panResponder.panHandlers}> */}
        {/* <Text style={styles.sliderTopText}>1</Text> */}
        {/* <View style={styles.sliderLine}></View> */}
        {/* <LinearGradient
            colors={["rgba(231, 76, 60, 0.1)", "rgba(231, 76, 60, 1)"]} // Start transparent, end deep
            start={{ x: 0, y: 0 }} // Gradient starts from the top
            end={{ x: 0, y: 1 }} // Gradient ends at the bottom
            style={styles.sliderLine}
          /> */}
        {/* <View
            style={[
              styles.sliderCircle,
              { top: sliderPosition }, // Dynamic positioning of the circle
            ]}
          ></View> */}
        {/* <Text style={styles.sliderBottomText}>10</Text> */}
        {/* </View> */}

        <View style={styles.leftColumn} {...panResponder.panHandlers}>
          <Text style={styles.sliderTopText}>1</Text>
          <LinearGradient
            colors={["rgba(231, 76, 60, 0.1)", "rgba(231, 76, 60, 1)"]} // Start transparent, end deep
            start={{ x: 0, y: 0 }} // Gradient starts from the top
            end={{ x: 0, y: 1 }} // Gradient ends at the bottom
            style={styles.sliderLine}
          />
          <View
            style={[
              styles.sliderCircle,
              { top: sliderPosition }, // Dynamic positioning of the circle
            ]}
          >
            {/* Add the number next to the circle */}
            {/* <Text style={styles.circleNumber}>{1 + highlightIndex * 2}</Text> */}
            <Text style={styles.circleNumber}>
              {scaledNumber} {/* Render the mapped number */}
            </Text>
          </View>
          <Text style={styles.sliderBottomText}>10</Text>
        </View>
      </View>

      {/* Spinner Section */}
      <View style={styles.spinnerSection}>
        <Text style={styles.spinnerText}>
          Hard to decide which one to pick? Try our{" "}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SOSNavigator", { screen: "SpinWheelPage" })
            }
          >
            <Text style={styles.link}>spinner!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  headerSection: {
    flexDirection: "row", // Ensures the button and icon are side-by-side
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  topLeftButton: {
    marginRight: 30, // Add space between the button and the header icon
    padding: 10, // Keeps the button touchable
    marginBottom: 30,
  },
  buttonIcon: {
    width: 30, // Adjust the size of the button image
    height: 30,
  },
  localIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    color: "#f39c12",
    lineHeight: 22,
  },
  highlight: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  //NOTE: length of left slider
  leftColumn: {
    marginTop: 50,
    width: 40, // Dedicated space for the slider
    height: 440, //height of slider
    marginRight: -5, // Space between the slider and options
    position: "relative",
  },
  sliderLine: {
    width: 4,
    height: "95%", // Full height of the container
    position: "absolute",
    left: 18, // Align to match the circle
    borderRadius: 2, // Optional: Round the edges of the line
  },

  sliderCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#e74c3c",
    position: "absolute",
    left: 10, // Center circle on the line
  },
  optionsContainer: {
    flex: 1,
    marginRight: 10, // Space between options and slider
    marginTop: 50, // Move the options section lower
  },
  optionRow: {
    width: "100%",
    alignSelf: "flex-start",
    padding: 15,
    marginBottom: 10,
    // backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 45, // Add space between items
  },
  optionText: {
    fontSize: 15,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  highlightedOption: {
    backgroundColor: "#fde68a", // Highlighted background
    borderRadius: 8,
  },
  sliderTopText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#404040",
    marginBottom: 5,
    marginTop: -15,
    marginLeft: 30,
  },
  sliderBottomText: {
    paddingTop: 400, //NOTE: distance to the top
    fontSize: 14,
    fontWeight: "bold",
    color: "#404040",
    marginTop: 18,
    marginLeft: 20,
  },

  spinnerSection: {
    alignItems: "center",
    marginTop: 20,
  },
  spinnerText: {
    fontSize: 14,
    color: "#f39c12",
  },
  link: {
    fontWeight: "bold",
    color: "#9b59b6",
  },
  circleNumber: {
    position: "absolute",
    right: -20, // Adjust as needed to position the number beside the circle
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SOS;
