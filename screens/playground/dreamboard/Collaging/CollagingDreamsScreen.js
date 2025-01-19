import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import SelectionModal from '../../../../components/dreamboard/SelectionModal';
import dreamboard from "../../../../data/dreamboard-data";
import templates from "../../../../data/collage-template";

const CollagingDreamsScreen = ({ route, navigation }) => {
  // Initialize state with default templates as empty arrays
  const [templates, setTemplates] = useState(() => {
    const initialTemplates = {
      "Dream House": [],
      "Dream Life": [],
      "Dream Social Circle": [],
      "Wishlist": [],
    };

    // If selectedTemplate exists in route.params, assign it to the specific section
    if (route.params?.selectedTemplate && route.params?.section) {
      const { selectedTemplate, section } = route.params;
      initialTemplates[section] = Array.isArray(selectedTemplate)
        ? selectedTemplate
        : [];
    }

    return initialTemplates;
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    // Update templates dynamically when navigating back with new data
    if (route.params?.selectedTemplate && route.params?.section) {
      const { selectedTemplate, section } = route.params;

      // Ensure selectedTemplate is an array before updating state
      if (Array.isArray(selectedTemplate)) {
        setTemplates((prevTemplates) => ({
          ...prevTemplates,
          [section]: selectedTemplate,
        }));

        console.log(`Updated template for ${section}:`, selectedTemplate);
      } else {
        console.warn(`Invalid template for ${section}:`, selectedTemplate);
      }
    }
  }, [route.params]);

  const handleOpenModal = (section) => {
    setCurrentSection(section);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setCurrentSection("");
  };

  const updateTemplate = (section, template) => {
    if (Array.isArray(template)) {
      setTemplates((prevTemplates) => ({
        ...prevTemplates,
        [section]: template,
      }));
      console.log(`Directly updated template for ${section}:`, template);
    } else {
      console.warn(`Invalid template passed for ${section}:`, template);
    }
  };

  const handleSelectFromAlbum = () => {
    setModalVisible(false);
    navigation.navigate("AlbumSelectionScreen", {
      section: currentSection,
      updateTemplate, // Pass the updateTemplate function
    });
  };

  const handleSelectFromRecommendation = () => {
    setModalVisible(false);
    navigation.navigate("RecommendationScreen", {
      section: currentSection,
      updateTemplate, // Pass the updateTemplate function
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Exit</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Have fun with collaging your dreams!</Text>
        <TouchableOpacity>
          <Text style={styles.heart}>❤️</Text>
        </TouchableOpacity>
      </View>

      {/* Sections */}
      {Object.keys(templates).map((section) => (
        <TouchableOpacity
          key={section}
          style={styles.section}
          onPress={() => handleOpenModal(section)}
        >
          <Text style={styles.sectionTitle}>{`${section}:`}</Text>
          <View style={styles.placeholder}>
            {Array.isArray(templates[section]) && templates[section].length > 0 ? (
              <View style={styles.templatePreview}>
                {templates[section].map((block, index) => (
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
                      <Image
                        source={block.image}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                      />
                    ) : (
                      <Text>No Image</Text>
                    )}
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.placeholderText}>
                {`Select up to 4 pictures included in your ${section.toLowerCase()}`}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ))}

      {/* Modal */}
      <SelectionModal
        visible={modalVisible}
        onClose={handleCloseModal}
        section={currentSection}
        onSelectFromAlbum={handleSelectFromAlbum}
        onSelectFromRecommendation={handleSelectFromRecommendation}
      />
    </View>
  );
};

export default CollagingDreamsScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1bee7",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
    flex: 1,
  },
  heart: {
    fontSize: 20,
    color: "#000",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  placeholder: {
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  templatePreview: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
});
