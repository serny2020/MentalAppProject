import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import EmdrBall from "./EmdrBall";
import ballsOptions from "../../../../data/balls-option";
import { useNowAndThen } from "../../../../context/Arcade/NowAndThenContext";

const HereAndNowScreen = () => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Get values from context
  const { ballColor, ballType, bumpSpeed } = useNowAndThen();

  // Function to get ball image from ballsOptions
  const getBallImage = (type) => {
    const selectedOption = ballsOptions.find((option) => option.id === type);
    return selectedOption ? selectedOption.source : null;
  };

  const ballImage = ballType === "color" ? null : getBallImage(ballType);

  const handleExit = () => {
    navigation.goBack();
  };

  const handleRecord = () => {
    Alert.alert("Record", "Show meditation record or history.");
  };

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setTimeLeft(300); // Reset timer to 5 minutes
    } else {
      setIsRunning(true);
    }
  };

  const handleHelp = () => {
    navigation.navigate("HereAndNowHelpScreen");
  };

  const handleSettings = () => {
    navigation.navigate("HereNowSettingsScreen"); // No need to pass props
  };

  // Countdown Timer Logic
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      Alert.alert("Time's up!", "The session has ended.");
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <LinearGradient colors={["#E3F3E3", "#B000B5"]} style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleExit}>
          <Text style={styles.topButton}>Exit</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Here & Now</Text>
        <TouchableOpacity onPress={handleRecord}>
          <Text style={styles.topButton}>Record</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timerRow}>
        <Text style={styles.timerText}>
          Total Time: 05:00
        </Text>
        <Text style={styles.timerText}>Time left: {formatTime(timeLeft)}</Text>
      </View>

      <View style={styles.ballArea}>
        <EmdrBall start={isRunning} ballColor={ballColor} ballImage={ballImage} bumpSpeed={bumpSpeed} />
      </View>

      <TouchableOpacity
        style={[styles.startButton, isRunning ? styles.stopButton : null]}
        onPress={handleStartStop}
      >
        <Text style={styles.startText}>{isRunning ? "Stop" : "Start"}</Text>
      </TouchableOpacity>

      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={handleHelp} style={styles.iconButton}>
          <Ionicons name="help-circle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettings} style={styles.iconButton}>
          <Feather name="sliders" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topRow: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  topButton: {
    fontSize: 18,
    color: "#000",
  },
  title: {
    marginLeft: 30,
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  timerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: "center",
  },
  timerText: {
    fontSize: 18,
    color: "#000",
  },
  ballArea: {
    width: "90%",
    height: 240,
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#000",
    borderRadius: 25,
    marginVertical: 20,
  },
  stopButton: {
    backgroundColor: "#FF6347",
  },
  startText: {
    fontSize: 20,
    color: "#fff",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  iconButton: {
    padding: 10,
  },
});

export default HereAndNowScreen;
