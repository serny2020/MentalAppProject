import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert,
} from "react-native";

const albums = [
  { id: "1", title: "Recents" },
  { id: "2", title: "Favorites" },
  { id: "3", title: "Instagram" },
  { id: "4", title: "Screenshots" },
];

const PhotoCollageScreen = ({ navigation }) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handleSelectPhoto = (photo) => {
    if (selectedPhotos.length >= 4 && !selectedPhotos.includes(photo)) {
      Alert.alert("Limit Reached", "You can only select up to 4 photos.");
      return;
    }
    setSelectedPhotos((prev) =>
      prev.includes(photo)
        ? prev.filter((p) => p !== photo)
        : [...prev, photo]
    );
  };

  const handleEditPhoto = (photo) => {
    Alert.alert("Edit Photo", `You clicked on ${photo}.`);
    // Navigate to an editing screen or perform an edit action
  };

  const renderAlbumItem = ({ item }) => (
    <TouchableOpacity style={styles.albumButton}>
      <Text style={styles.albumText}>Picture</Text>
      <Text style={styles.albumTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderSelectedPhoto = (photo) => (
    <TouchableOpacity
      key={photo}
      style={styles.selectedPhotoContainer}
      onPress={() => handleEditPhoto(photo)}
    >
      <Text style={styles.photoText}>Picture</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleSelectPhoto(photo)}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerButton} onPress={() => navigation.goBack()}>
          Back
        </Text>
        <Text style={styles.headerTitle}>Select from your album</Text>
        <Text style={styles.headerButton}>Next</Text>
      </View>

      <FlatList
        data={albums}
        renderItem={renderAlbumItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        style={styles.albumList}
      />

      <Text style={styles.photoInstruction}>
        Select 1-4 photos{" "}
        <Text style={styles.photoCount}>{selectedPhotos.length}</Text>
      </Text>

      <View style={styles.selectedPhotos}>
        {selectedPhotos.map((photo) => renderSelectedPhoto(photo))}
      </View>
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
    alignItems: "center",
    marginBottom: 20,
  },
  headerButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6a1b9a",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a148c",
    textAlign: "center",
  },
  albumList: {
    marginBottom: 20,
  },
  albumButton: {
    flex: 1,
    backgroundColor: "#d1c4e9",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  albumText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a148c",
  },
  albumTitle: {
    fontSize: 16,
    color: "#6a1b9a",
    marginTop: 10,
  },
  photoInstruction: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4a148c",
    marginBottom: 10,
  },
  photoCount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  selectedPhotos: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  selectedPhotoContainer: {
    backgroundColor: "#d1c4e9",
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    position: "relative",
  },
  photoText: {
    fontSize: 12,
    color: "#4a148c",
  },
  deleteButton: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#f44336",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default PhotoCollageScreen;
