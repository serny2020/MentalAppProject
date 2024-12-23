import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { Audio } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

const musicLogo = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.97226 0 0 8.97195 0 20C0 31.0281 8.97226 40 20 40C31.0277 40 40 31.0281 40 20C40 8.97195 31.0277 0 20 0ZM20 38.6207C9.7326 38.6207 1.37931 30.2674 1.37931 20C1.37931 9.73264 9.7326 1.37931 20 1.37931C30.2674 1.37931 38.6207 9.73264 38.6207 20C38.6207 30.2674 30.2674 38.6207 20 38.6207Z" fill="#8F89F5"/>
<path d="M29.6208 7.35784C29.6174 7.1757 29.5697 7.11237 29.3885 7.10832C29.0228 7.09991 28.6597 7.13156 28.2961 7.15582C26.5497 7.2703 24.8027 7.39522 23.0698 7.64811C20.1892 8.06908 17.3727 8.75639 14.6559 9.84065C14.5609 9.87873 14.5218 9.92487 14.5097 10.0289C14.4835 10.2518 14.4842 10.4744 14.4842 10.6977C14.4828 15.5974 14.4814 20.4967 14.4861 25.396C14.4861 25.5974 14.4477 25.622 14.2599 25.566C12.6846 25.096 11.2157 25.3283 9.868 26.2924C9.21876 26.7571 8.72372 27.3578 8.47048 28.1324C8.11758 29.2069 8.22538 30.2158 8.95269 31.1129C9.26386 31.4971 9.68076 31.7039 10.1259 31.8965C11.8528 32.6421 13.4685 32.4027 14.9818 31.3483C15.9611 30.666 16.5059 29.6986 16.5349 28.4705C16.5558 27.5993 16.551 26.7282 16.5537 25.8574C16.5639 22.8047 16.5187 19.7518 16.576 16.6992C16.5861 16.1489 16.5841 16.1516 17.1074 15.9994C19.142 15.4061 21.2035 14.9309 23.2927 14.5918C24.639 14.3729 25.9928 14.2012 27.3579 14.1558C27.5243 14.1504 27.5788 14.1931 27.5781 14.3743C27.5721 17.1221 27.5714 19.8696 27.5794 22.6171C27.5794 22.8303 27.498 22.8269 27.3519 22.7835C26.945 22.6626 26.5349 22.5646 26.1079 22.5525C24.6087 22.5087 23.3055 22.9667 22.2771 24.1157C21.6077 24.8639 21.2749 25.7456 21.4244 26.7598C21.6117 28.0233 22.4064 28.7854 23.5284 29.2227C24.9481 29.7757 26.3207 29.5675 27.6165 28.8345C28.9373 28.0869 29.6552 26.9359 29.6552 25.3613V17.3074C29.637 13.5082 29.6761 10.433 29.6208 7.35784Z" fill="#B976DD"/>
</svg>`;

const WelcomePage = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [breatheText, setBreatheText] = useState("breathe in");
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Animation Logic
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 4000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    const interval = setInterval(() => {
      setBreatheText((prev) =>
        prev === "breathe in" ? "breathe out" : "breathe in"
      );
    }, 4000);

    return () => {
      animation.stop();
      clearInterval(interval);
    };
  }, [scaleAnim]);

  // Music Logic
  useEffect(() => {
    const loadMusic = async () => {
      try {
        const { sound: music } = await Audio.Sound.createAsync(
          require("../../assets/media/music.mp3")
        );
        setSound(music);
        await music.setIsLoopingAsync(true);
        await music.playAsync();
        setIsPlaying(true);
        console.log("playing")
      } catch (error) {
        console.error("Error loading music:", error);
      }
    };

    loadMusic();

    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, []);

  // Music Toggle
  const handleMusicToggle = async () => {
    if (!sound) return;
    try {
      if (isPlaying) {
        console.log("is playing");
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        console.log("not playing");
        await sound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error toggling music:", error);
    }
  };
  
  // Navigation Timeout
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (sound) {
        try {
          await sound.stopAsync(); // Stop the music
          await sound.unloadAsync(); // Unload the music
          setSound(null); // Clear the sound state
          setIsPlaying(false); // Update the playing state
        } catch (error) {
          console.error("Error stopping/unloading music:", error);
        }
      }
      navigation.navigate("Home"); // Navigate to the Home page
    }, 10000);

    return () => clearTimeout(timeout);
  }, [navigation, sound]);

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <TouchableOpacity onPress={handleMusicToggle}>
          <SvgXml xml={musicLogo} width="40" height="40" />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Take a deep breath</Text>
      <BreathingCircle scaleAnim={scaleAnim} text={breatheText} />
    </View>
  );
};

const BreathingCircle = ({ scaleAnim, text }) => (
  <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}>
    <Text style={styles.text}>{text}</Text>
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7ffcc",
  },
  svgContainer: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 50,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 75,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    fontSize: 20,
    color: "#9b59b6",
    fontWeight: "bold",
  },
});

export default WelcomePage;
