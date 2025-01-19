import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useCollagingContext } from "../../../../context/CollagingContext";
import templates from "../../../../data/collage-template";

const SelectTemplateScreen = ({ navigation, route }) => {
  const { selectedPhotos, selectedTemplate, chooseTemplate } = useCollagingContext();
  const { section } = route.params || {}; // Get the section from the route params

  // Filter photos for the current section
  const sectionPhotos = selectedPhotos[section] || [];

  const handleTemplateSelection = (template) => {
    if (sectionPhotos.length === 0) {
      alert("No photos selected for this section. Please go back and select photos.");
      return;
    }

    // Populate template blocks with selected photos from the current section
    const updatedTemplate = template.map((block, index) => ({
      ...block,
      image: sectionPhotos[index % sectionPhotos.length], // Cycle through section-specific photos
    }));
    chooseTemplate({ section, template: updatedTemplate }); // Save the selected template in the context with the section
  };

  const handleNext = () => {
    if (selectedTemplate?.section === section) {
      navigation.navigate("DreamLifeCraftedScreen", { section });
    } else {
      alert("Please select a template before proceeding.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Main Display */}
      <View style={styles.templatePreview}>
        {selectedTemplate?.section === section ? (
          <View style={styles.templatePreview}>
            {selectedTemplate.template.map((block, i) => (
              <View
                key={i}
                style={[
                  styles.templateBlock,
                  {
                    width: `${block.width}%`,
                    height: `${block.height}%`,
                    left: `${block.x}%`,
                    top: `${block.y}%`,
                  },
                ]}
              >
                {block.image ? (
                  <Image source={block.image} style={styles.blockImage} />
                ) : (
                  <Text style={styles.placeholderText}>No image</Text>
                )}
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyTemplate}>
            <Text style={styles.emptyTemplateText}>Select a template</Text>
          </View>
        )}
      </View>

      {/* Template Selection */}
      <Text style={styles.previewText}>Select your template:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.templateList}
      >
        {templates.map((template, index) => (
          <TouchableOpacity
            key={index}
            style={styles.templateItem}
            onPress={() => handleTemplateSelection(template)}
          >
            <View style={styles.templatePreviewMini}>
              {template.map((block, i) => (
                <View
                  key={i}
                  style={[
                    styles.templateBlockMini,
                    {
                      width: `${block.width}%`,
                      height: `${block.height}%`,
                      left: `${block.x}%`,
                      top: `${block.y}%`,
                    },
                  ]}
                />
              ))}
            </View>
            <Text style={styles.templateLabel}>Template {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1bee7",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  templatePreview: {
    width: 350,
    height: 500,
    position: "relative",
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: "center", // Centers horizontally
  },
  templateBlock: {
    position: "absolute",
    backgroundColor: "#DDD",
    borderWidth: 1,
    borderColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
  },
  blockImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  emptyTemplate: {
    width: 350,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  emptyTemplateText: {
    fontSize: 16,
    color: "#AAA",
  },
  templateList: {
    flexDirection: "row",
  },
  templateItem: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  templatePreviewMini: {
    width: 80,
    height: 80,
    position: "relative",
    borderWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
  },
  templateBlockMini: {
    position: "absolute",
    backgroundColor: "#DDD",
    borderWidth: 1,
    borderColor: "#CCC",
  },
  templateLabel: {
    fontSize: 14,
    color: "#000",
    marginTop: 5,
  },
  previewText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 10,
  },
});

export default SelectTemplateScreen;
