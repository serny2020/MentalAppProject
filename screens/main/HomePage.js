import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SvgXml } from "react-native-svg";
// import MusicIcon from "../assets/icons/musicIcon";
import { Audio } from "expo-av";
import { useMusic } from "../../context/MusicContext";

const musicLogo = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.97226 0 0 8.97195 0 20C0 31.0281 8.97226 40 20 40C31.0277 40 40 31.0281 40 20C40 8.97195 31.0277 0 20 0ZM20 38.6207C9.7326 38.6207 1.37931 30.2674 1.37931 20C1.37931 9.73264 9.7326 1.37931 20 1.37931C30.2674 1.37931 38.6207 9.73264 38.6207 20C38.6207 30.2674 30.2674 38.6207 20 38.6207Z" fill="#8F89F5"/>
<path d="M29.6208 7.35784C29.6174 7.1757 29.5697 7.11237   29.3885 7.10832C29.0228 7.09991 28.6597 7.13156 28.2961 7.15582C26.5497 7.2703 24.8027 7.39522 23.0698 7.64811C20.1892 8.06908 17.3727 8.75639 14.6559 9.84065C14.5609 9.87873 14.5218 9.92487 14.5097 10.0289C14.4835 10.2518 14.4842 10.4744 14.4842 10.6977C14.4828 15.5974 14.4814 20.4967 14.4861 25.396C14.4861 25.5974 14.4477 25.622 14.2599 25.566C12.6846 25.096 11.2157 25.3283 9.868 26.2924C9.21876 26.7571 8.72372 27.3578 8.47048 28.1324C8.11758 29.2069 8.22538 30.2158 8.95269 31.1129C9.26386 31.4971 9.68076 31.7039 10.1259 31.8965C11.8528 32.6421 13.4685 32.4027 14.9818 31.3483C15.9611 30.666 16.5059 29.6986 16.5349 28.4705C16.5558 27.5993 16.551 26.7282 16.5537 25.8574C16.5639 22.8047 16.5187 19.7518 16.576 16.6992C16.5861 16.1489 16.5841 16.1516 17.1074 15.9994C19.142 15.4061 21.2035 14.9309 23.2927 14.5918C24.639 14.3729 25.9928 14.2012 27.3579 14.1558C27.5243 14.1504 27.5788 14.1931 27.5781 14.3743C27.5721 17.1221 27.5714 19.8696 27.5794 22.6171C27.5794 22.8303 27.498 22.8269 27.3519 22.7835C26.945 22.6626 26.5349 22.5646 26.1079 22.5525C24.6087 22.5087 23.3055 22.9667 22.2771 24.1157C21.6077 24.8639 21.2749 25.7456 21.4244 26.7598C21.6117 28.0233 22.4064 28.7854 23.5284 29.2227C24.9481 29.7757 26.3207 29.5675 27.6165 28.8345C28.9373 28.0869 29.6552 26.9359 29.6552 25.3613V17.3074C29.637 13.5082 29.6761 10.433 29.6208 7.35784Z" fill="#B976DD"/>
</svg>`;

const HomePage = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState();
  const { isMusicPlaying, toggleMusic } = useMusic(); // Access music controls

  const stopMusic = async () => {
    if (sound) {
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
        console.log("Music stopped and unloaded");
      } catch (error) {
        console.error("Error stopping music:", error);
      }
    }
  };

  // const handleMusicToggle = async () => {
  //   try {
  //     if (isPlaying) {
  //       // Pause the music
  //       await sound.pauseAsync();
  //       setIsPlaying(false);
  //       console.log("unplaying");
  //     } else {
  //       if (!sound) {
  //         // Load the music if not already loaded
  //         const { sound: newSound } = await Audio.Sound.createAsync(
  //           require("../../assets/media/music.mp3")
  //         );
  //         setSound(newSound);
  //         console.log("load");
  //         await newSound.playAsync();
  //       } else {
  //         // Resume the music
  //         await sound.playAsync();
  //         console.log("resume");
  //       }
  //       setIsPlaying(true);
  //     }
  //   } catch (error) {
  //     console.error("Error playing music:", error);
  //   }
  // };

  // // Cleanup the sound object when the component unmounts
  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={handleMusicToggle}> */}
        <TouchableOpacity onPress={toggleMusic}>
          {/* {console.log(isMusicPlaying ? 'Play Music': 'Pause Music')} */}
          <SvgXml xml={musicLogo} width={40} height={40} />
          {/* <Image
          source={require("../assets/icons/music.png")} // Path to your image
          style={styles.icon}
        /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await stopMusic(); // Stop music before navigating
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.buttonText}>Enter Welcome Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await stopMusic(); // Stop music before navigating
            navigation.navigate("Auth", { screen: "SignUp" });
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await stopMusic(); // Stop music before navigating
            navigation.navigate("Auth", { screen: "Login" });
          }}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={async () => {
            await stopMusic(); // Stop music before navigating
            navigation.navigate("CheckIn");
          }}
        >
          <Text style={styles.secondaryButtonText}>
            Continue without registration
          </Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.buttonText}>Enter Welcome Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Auth", { screen: "SignUp" });
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Auth", { screen: "Login" });
          }}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => {
            navigation.navigate("CheckIn");
          }}
        >
          <Text style={styles.secondaryButtonText}>
            Continue without registration
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // Pushes "Skip" and logo to opposite sides
    alignItems: "center",
    paddingHorizontal: 20, // Adds space between the edges
    position: "absolute",
    top: 50,
    width: "100%", // Ensures header spans across the screen
  },
  skip: {
    fontSize: 16,
    color: "#9b59b6",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 32,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  buttonContainer: {
    paddingBottom: 50,
    alignItems: "center",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#9b59b6",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    marginTop: 20,
  },
  secondaryButtonText: {
    color: "#9b59b6",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default HomePage;
