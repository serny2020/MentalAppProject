import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { useNowAndThen } from "../../../../context/Arcade/NowAndThenContext";
import EmdrBall from "./EmdrBall";

// const BallSpeedScreen = () => {
//   const navigation = useNavigation();
//   const { bumpSpeed, setBumpSpeed } = useNowAndThen(); // Get and set speed from context

//   return (
//     <LinearGradient colors={["#E3F3E3", "#B000B5"]} style={styles.gradientContainer}>
//       <View style={styles.container}>
//         {/* Header at the top */}
//         <View style={styles.topRow}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Text style={styles.topButton}>Cancel</Text>
//           </TouchableOpacity>
//           <Image
//             source={require("../../../../assets/image/arcade/hereNow/speed.png")}
//             style={{ width: 30, height: 30 }}
//           />
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Text style={styles.topButton}>Done</Text>
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.title}>
//           Select <Text style={{ fontWeight: "bold" }}>Ball Speed</Text>
//         </Text>

//         <Slider
//           style={styles.slider}
//           minimumValue={1}
//           maximumValue={10}
//           step={1}
//           value={bumpSpeed}
//           onValueChange={setBumpSpeed} // Directly update context
//         />
//         <Text style={styles.speedText}>Speed: {bumpSpeed}</Text>

//         <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
//           <Text style={styles.saveButtonText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };
// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: "center",
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "90%",
//     marginBottom: 20,
//   },
//   topButton: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "black",
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   slider: {
//     width: "80%",
//     height: 40,
//   },
//   speedText: {
//     fontSize: 18,
//     marginVertical: 10,
//   },
//   saveButton: {
//     marginTop: 20,
//     backgroundColor: "black",
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//   },
//   saveButtonText: {
//     color: "white",
//     fontSize: 18,
//   },
// });

// export default BallSpeedScreen;

const BallSpeedScreen = () => {
  const navigation = useNavigation();
  const { bumpSpeed, setBumpSpeed } = useNowAndThen(); // Get and set speed from context

  return (
    <LinearGradient colors={["#E3F3E3", "#B000B5"]} style={styles.gradientContainer}>
      <View style={styles.container}>
        {/* Header at the top */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.topButton}>Cancel</Text>
          </TouchableOpacity>
          <Image
            source={require("../../../../assets/image/arcade/hereNow/speed.png")}
            style={{ width: 30, height: 30 }}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.topButton}>Done</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          Select <Text style={{ fontWeight: "bold" }}>Ball Speed</Text>
        </Text>


        {/* Speed Adjustment Slider */}
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={bumpSpeed}
          onValueChange={setBumpSpeed} // Directly update context
        />
        <Text style={styles.speedText}>Speed: {bumpSpeed}</Text>
        {/* Live Speed Preview */}
          <Text style={styles.previewText}>Preview</Text>
        <View style={styles.previewContainer}>
          <EmdrBall start={true} bumpSpeed={bumpSpeed} /> 
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  topButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  previewContainer: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 10,
    marginBottom: 20,
  },
  previewText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 50,
  },
  slider: {
    width: "80%",
    height: 40,
  },
  speedText: {
    fontSize: 18,
    marginVertical: 10,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default BallSpeedScreen;
