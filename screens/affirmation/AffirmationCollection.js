// import React, { useContext } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from "react-native";
// import { AffirmationContext } from "../../context/AffirmationContext";

// const AffirmationCollection = ({ navigation }) => {
//   const { images, setImages } = useContext(AffirmationContext);

//   const handleAddImage = (index) => {
//     // Placeholder for adding images logic
//     Alert.alert("Add Image", `Clicked on image slot ${index + 1}`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>My Affirmation Collection</Text>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("Settings")}
//           style={styles.settingsButton}
//         >
//           <Text style={styles.settingsButtonText}>✔</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Instruction */}
//       <Text style={styles.instruction}>
//         You can add at most <Text style={styles.bold}>SIX</Text> affirmations here:
//       </Text>

//       {/* Image Slots */}
//       <View style={styles.imageGrid}>
//         {images.map((image, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.imageBox}
//             onPress={() => handleAddImage(index)}
//           >
//             {image ? (
//               <Image source={{ uri: image }} style={styles.image} />
//             ) : (
//               <Text style={styles.imagePlaceholder}>image placeholder</Text>
//             )}
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Footer Instruction */}
//       <Text style={styles.footerInstruction}>Ready to build your own affirmations?</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("AddAffirmationImages")}
//       >
//         <Text style={styles.highlight}>Let’s go!</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F8D7DA", // Light pink background
//     padding: 16,
//     paddingTop: 60,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#000",
//   },
//   settingsButton: {
//     backgroundColor: "#000",
//     borderRadius: 16,
//     padding: 6,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   settingsButtonText: {
//     color: "#FFF",
//     fontSize: 18,
//   },
//   instruction: {
//     fontSize: 16,
//     color: "#000",
//     marginBottom: 16,
//   },
//   bold: {
//     fontWeight: "bold",
//   },
//   highlight: {
//     color: "#A020F0",
//     textDecorationLine: "underline",
//   },
//   imageGrid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     marginBottom: 16,
//   },
//   imageBox: {
//     width: "30%",
//     aspectRatio: 1,
//     backgroundColor: "#D3D3D3",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 16,
//     borderRadius: 8,
//   },
//   imagePlaceholder: {
//     fontSize: 12,
//     color: "#000",
//     textAlign: "center",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 8,
//   },
//   footerInstruction: {
//     fontSize: 14,
//     textAlign: "center",
//     marginBottom: 16,
//     color: "#000",
//   },
//   button: {
//     alignSelf: "center",
//     backgroundColor: "#A020F0",
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
// });

// export default AffirmationCollection;


import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const AffirmationCollectionScreen = ({ navigation }) => {
  const placeholders = Array(6).fill("image placeholder");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Affirmation Collection</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.checkbox}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DeleteOrReplaceImagesScreen")}>
          <Text style={styles.checkbox}>✔️</Text>
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <Text style={styles.instructionText}>
        You can add at most <Text style={styles.boldText}>SIX</Text> affirmations here:
      </Text>

      {/* Placeholder Grid */}
      <View style={styles.grid}>
        {placeholders.map((placeholder, index) => (
          <TouchableOpacity key={index} style={styles.placeholder}>
            <Text style={styles.placeholderText}>{placeholder}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>Ready to build your own affirmations?</Text>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("AddAffirmationImages")}>
        <Text style={styles.footerButtonText}>Let’s go!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA", // Light pink background
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  checkbox: {
    fontSize: 24,
    color: "#000",
  },
  instructionText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  placeholder: {
    width: "48%",
    height: 100,
    backgroundColor: "#D3D3D3", // Placeholder color
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  placeholderText: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  footerText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: "#D2A5FF", // Light purple button color
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default AffirmationCollectionScreen;
