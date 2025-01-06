import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const IdentifyThoughtsScreen = ({ route, navigation }) => {
  const { sentences } = route.params || []; // Sentences passed from the Brain Dump Screen
  const [selectedSentences, setSelectedSentences] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");

  const handleSelectSentence = (sentence) => {
    if (selectedSentences.includes(sentence)) {
      setSelectedSentences(selectedSentences.filter((s) => s !== sentence));
    } else {
      setSelectedSentences([...selectedSentences, sentence]);
    }
  };

  const handleCopyToInput = () => {
    setTextInputValue((prevValue) => prevValue + (prevValue ? " " : "") + selectedSentences.join(". ") + ".");
    setModalVisible(false); // Close the modal
};


  const handleClear = () => setTextInputValue("");

  const handleDone = () => {
    navigation.navigate("UnhelpfulThoughtsScreen", { thoughts: textInputValue });
    // Add functionality to process the input
  };

  const handleNext = () => {
    navigation.navigate("UnhelpfulThoughtsScreen", { thoughts: textInputValue });
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

      {/* Instructions */}
      <View style={styles.instructions}>
        <View style={styles.instructionRow}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.iconContainer}>
            <MaterialIcons name="list-alt" size={24} color="#000" />
            
          </TouchableOpacity>
          <Text style={styles.iconText}>
            Try to identify:{" "}
            <Text
              style={styles.swiperText}
              onPress={() => navigation.navigate("SwiperScreen")}
            >
              Confused? Try our Swiper!
            </Text>
          </Text>
        </View>
        <View style={styles.instructionRow}>
          <Text style={styles.subText}>
            Things you can’t change from the past; things that are out of your
            control, unhelpful thoughts:
          </Text>
          <TouchableOpacity  onPress={() => navigation.navigate('CheckInNavigator', { screen: 'CognitiveDistortionsPage' })}>
          <Ionicons name="help-circle-outline" size={20} color="#A020F0" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Input Box */}
      <View style={styles.textBox}>
        <TextInput
          style={styles.textInput}
          placeholder="Edit or add sentences here"
          placeholderTextColor="#A9A9A9"
          multiline
          value={textInputValue}
          onChangeText={(value) => setTextInputValue(value)}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Cross out or circle any unhelpful thoughts written on your paper. Once
        you are done, come back to click on <Text style={styles.boldText}>Next</Text>!
      </Text>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Sentences</Text>
            <FlatList
              data={sentences}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.sentenceItem,
                    selectedSentences.includes(item) && styles.selectedSentenceItem,
                  ]}
                  onPress={() => handleSelectSentence(item)}
                >
                  <Text style={styles.sentenceText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.copyButton} onPress={handleCopyToInput}>
              <Text style={styles.buttonText}>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#B9FBC0", padding: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  headerText: { fontSize: 18, fontWeight: "bold" },
  instructions: { marginBottom: 16 },
  instructionRow: { flexDirection: "row", alignItems: "center",marginBottom: 8  },
  iconContainer: { marginRight: 10 }, // Adjust spacing here
  iconText: { fontSize: 16, fontWeight: "bold", marginLeft: 0,},
  swiperText: { fontSize: 14, color: "#A020F0", textDecorationLine: "underline" },
  subText: { fontSize: 14, flex: 1 },
  textBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    height: 200,
    marginBottom: 16,
    justifyContent: "center",
    padding: 12,
  },
  textInput: { fontSize: 16, color: "#000", textAlignVertical: "top" },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 16 },
  clearButton: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  doneButton: {
    backgroundColor: "#90EE90",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#000" },
  footerText: { fontSize: 14, color: "#000", marginTop: 16, textAlign: "center" },
  boldText: { fontWeight: "bold" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  sentenceItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    width: "100%",
  },
  selectedSentenceItem: { backgroundColor: "#90EE90" },
  sentenceText: { fontSize: 16, color: "#000" },
  copyButton: {
    marginTop: 16,
    backgroundColor: "#90EE90",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  closeButton: {
    marginTop: 8,
    backgroundColor: "#D3D3D3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
});

export default IdentifyThoughtsScreen;
