import React from "react";
import { View, FlatList, StyleSheet,TouchableOpacity, Text } from "react-native";
import DreamItem from "../../components/dreamboard/DreamItem"; // Adjust the path to your DreamItem component

// Sample dream data
const DREAMS = [
  {
    id: "d1",
    title: "Visit Paris",
    description: "Experience the Eiffel Tower and Parisian culture.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Eiffel_Tower.jpg",
  },
  {
    id: "d2",
    title: "Run a Marathon",
    description: "Complete a full marathon in under 4 hours.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Marathon_runner.jpg",
  },
  {
    id: "d3",
    title: "Own a Tesla",
    description: "Drive a Tesla Model S and experience sustainable luxury.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Tesla_Model_S_P100D_Front.jpg",
  },
  {
    id: "d4",
    title: "Adopt a Golden Retriever",
    description: "Bring home a loving dog and make lifelong memories.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Golden_Retriever.jpg",
  },
];

const DreamOverviewPage = ({ navigation }) => {
  const handleSelectDream = (dreamId) => {
    console.log(`Dream selected: ${dreamId}`);
    // Navigate to a detailed dream screen if needed
  };

  const renderDreamItem = ({ item }) => (
    <DreamItem
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
      onSelect={() => handleSelectDream(item.id)}
    />
  );

  return (
    <View style={styles.container}>
                <TouchableOpacity>
                  <Text style={styles.backText} onPress={() => navigation.goBack()}>Back</Text>
                </TouchableOpacity>
      <FlatList
        data={DREAMS}
        keyExtractor={(item) => item.id}
        renderItem={renderDreamItem}
      />
    </View>
  );
};

export default DreamOverviewPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#e1bee7",
  },
});
