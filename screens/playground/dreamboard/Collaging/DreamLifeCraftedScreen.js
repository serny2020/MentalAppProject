// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";

// const DreamLifeCraftedScreen = ({ route, navigation }) => {
//   const { selectedTemplate, section, updateTemplate } = route.params || {}; // Retrieve the passed template data and section  

//   const handleAddToDreamHouse = (isAdded) => {
//     console.log("What is section here: " + section);
//     console.log("What is selected Template: " + selectedTemplate);
//     console.log(isAdded ? "Added" : "Not Added");
  
//     if (isAdded && selectedTemplate && section) {
//       console.log("Section in the confirm page: " + section);
  
//       // Call updateTemplate to update the centralized state
//       if (updateTemplate) {
//         updateTemplate(selectedTemplate, section);
//       }
  
//       // Reset the navigation stack and go back to CollagingDreamsScreen
//       navigation.reset({
//         index: 0,
//         routes: [
//           {
//             name: "CollagingDreamsScreen", // Target screen
//             params: { selectedTemplate, section }, 
//           },
//         ],
//       });
//     } else {
//       // Reset navigation stack without updating templates
//       navigation.reset({
//         index: 0,
//         routes: [{ name: "CollagingDreamsScreen" }],
//       });
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.headerText}>Back</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Exit</Text>
//       </View>

//       {/* Title */}
//       <Text style={styles.title}>
//         Congratulations! Your Dream Life has been crafted!
//       </Text>

//       {/* Content */}
//       <View style={styles.content}>
//         {selectedTemplate ? (
//           selectedTemplate.map((block, index) => (
//             <View
//               key={index}
//               style={[
//                 {
//                   position: "absolute",
//                   width: `${block.width}%`,
//                   height: `${block.height}%`,
//                   left: `${block.x}%`,
//                   top: `${block.y}%`,
//                 },
//               ]}
//             >
//               {block.image ? (
//                 <Image
//                   source={block.image}
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               ) : (
//                 <Text>No Image</Text>
//               )}
//             </View>
//           ))
//         ) : (
//           <Text>No template selected</Text>
//         )}
//       </View>

//       {/* Footer */}
//       <Text style={styles.footerText}>
//         Add it to your <Text style={styles.boldText}>Dream House?</Text>
//       </Text>
//       <View style={styles.buttonRow}>
//         <TouchableOpacity
//           style={styles.noButton}
//           onPress={() => handleAddToDreamHouse(false)}
//         >
//           <Text style={styles.buttonText}>NO</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.yesButton}
//           onPress={() => handleAddToDreamHouse(true)}
//         >
//           <Text style={styles.buttonText}>YES</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };


import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, } from "react-native";
import { useCollagingContext } from "../../../../context/CollagingContext";


const DreamLifeCraftedScreen = ({ navigation, route }) => {
  const { selectedTemplate, templates, updateTemplates, chooseTemplate } = useCollagingContext();
  const section = route.params?.section || "Dream House";

  console.log("Selected Template in DreamLifeCraftedScreen:", selectedTemplate);

  const handleAddToDreamHouse = (isAdded) => {
    if (isAdded && selectedTemplate?.template?.length > 0) {
      console.log(`Adding to ${section} with template:`, selectedTemplate.template);

      // Add the selected template to the specified section
      updateTemplates(section, [...(templates[section] || []), selectedTemplate.template]);
    } else {
      console.log(`Discarding current selection for section: ${section}`);

      // Discard the current selection by resetting selectedTemplate
      chooseTemplate(null); // Reset the selected template
    }

    // Reset navigation stack and return to the main screen
    navigation.reset({
      index: 0,
      routes: [{ name: "CollagingDreamsScreen" }],
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAddToDreamHouse(false)}>
          <Text style={styles.headerText}>Exit</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Congratulations! Your Dream Life has been crafted!
      </Text>

      {/* Content */}
      <View style={styles.content}>
        {Array.isArray(selectedTemplate) && selectedTemplate.length > 0 ? (
          selectedTemplate.map((block, index) => (
            <View
              key={index}
              style={[
                {
                  position: "absolute",
                  width: `${block.width}%`,
                  height: `${block.height}%`,
                  left: `${block.x}%`,
                  top: `${block.y}%`,
                },
              ]}
            >
              {block.image ? (
                <Image source={block.image} style={{ width: "100%", height: "100%" }} />
              ) : (
                <Text>No Image</Text>
              )}
            </View>
          ))
        ) : selectedTemplate?.template ? (
          selectedTemplate.template.map((block, index) => (
            <View
              key={index}
              style={[
                {
                  position: "absolute",
                  width: `${block.width}%`,
                  height: `${block.height}%`,
                  left: `${block.x}%`,
                  top: `${block.y}%`,
                },
              ]}
            >
              {block.image ? (
                <Image source={block.image} style={{ width: "100%", height: "100%" }} />
              ) : (
                <Text>No Image</Text>
              )}
            </View>
          ))
        ) : (
          <Text>No template selected</Text>
        )}
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Add it to your <Text style={styles.boldText}>{section}?</Text>
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.noButton}
          onPress={() => handleAddToDreamHouse(false)}
        >
          <Text style={styles.buttonText}>NO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.yesButton}
          onPress={() => handleAddToDreamHouse(true)}
        >
          <Text style={styles.buttonText}>YES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1bee7", // Light purple background
    paddingHorizontal: 16,
    paddingTop: 40,
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 16,
  },
  content: {
    alignItems: "center",
    width: 350,
    height: 500,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 16,
  },
  imageSmall: {
    width: "45%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  noButton: {
    backgroundColor: "#FF6B6B", // Red color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  yesButton: {
    backgroundColor: "#6BFF6B", // Green color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default DreamLifeCraftedScreen;
