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
    // Toggle sentence selection
    if (selectedSentences.includes(sentence)) {
      setSelectedSentences(selectedSentences.filter((s) => s !== sentence));
    } else {
      setSelectedSentences([...selectedSentences, sentence]);
    }
  };

  const handleCopyToInput = () => {
    // Copy selected sentences to the input box
    setTextInputValue(selectedSentences.join(". ") + ".");
    setModalVisible(false); // Close the modal
  };

  const handleClear = () => {
    // Clear the input box
    setTextInputValue("");
  };

  const handleDone = () => {
    console.log("User's input:", textInputValue);
    // Add functionality to process the input
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identify Thoughts</Text>
      </View>

      {/* Instructions */}
      <View style={styles.instructions}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.instructionRow}>
          <MaterialIcons name="list-alt" size={24} color="#000" />
          <Text style={styles.iconText}> Try to identify:</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SwiperScreen")}
          style={styles.swiperLink}
        >
          <Text style={styles.swiperText}> Confused? Try our Swiper!</Text>
        </TouchableOpacity>
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
      >
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
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#B9FBC0", padding: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  headerText: { fontSize: 18, fontWeight: "bold" },
  headerTitle: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  instructions: { marginBottom: 16 },
  instructionRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  iconText: { fontSize: 16, fontWeight: "bold", marginLeft: 4 },
  swiperLink: { marginTop: 8 },
  swiperText: { fontSize: 14, color: "#A020F0", textDecorationLine: "underline" },
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
  modalContainer: { flex: 1, padding: 16, backgroundColor: "#FFF" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  sentenceItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
  },
  selectedSentenceItem: { backgroundColor: "#90EE90" },
  sentenceText: { fontSize: 16, color: "#000" },
  copyButton: {
    marginTop: 16,
    backgroundColor: "#90EE90",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});

export default IdentifyThoughtsScreen;

