import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";

const CollagingDreamsScreen = ({ route, navigation }) => {
  const [templates, setTemplates] = useState({
    "Dream House": null,
    "Dream Life": null,
    "Dream Social Circle": null,
    "Wishlist": null,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    if (route.params?.selectedTemplate && route.params?.section) {
      const { selectedTemplate, section } = route.params;
      setTemplates((prevTemplates) => ({
        ...prevTemplates,
        [section]: selectedTemplate,
      }));
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

  const handleSelectFromAlbum = () => {
    setModalVisible(false);
    navigation.navigate("AlbumSelectionScreen", { section: currentSection });
  };

  const handleSelectFromRecommendation = () => {
    setModalVisible(false);
    navigation.navigate("RecommendationScreen", { section: currentSection });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Have fun with collaging your dreams!</Text>
        <TouchableOpacity>
          <Text style={styles.heart}>❤️</Text>
        </TouchableOpacity>
      </View>

      {/* Sections */}
      {Object.keys(templates).map((section) => (
        console.log(templates),
        <TouchableOpacity
          key={section}
          style={styles.section}
          onPress={() => handleOpenModal(section)}
        >
          <Text style={styles.sectionTitle}>{`${section}:`}</Text>
          <View style={styles.placeholder}>
            {templates[section] ? (
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
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {`Select for ${currentSection}`}
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSelectFromAlbum}
            >
              <Text style={styles.modalButtonText}>Select from your album</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSelectFromRecommendation}
            >
              <Text style={styles.modalButtonText}>Select from recommendation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalButton: {
    width: "100%",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FF4444",
    borderRadius: 5,
    alignItems: "center",
  },
  modalCloseButtonText: {
    color: "white",
    fontSize: 16,
  },
});
