import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const AlbumSelectionScreen = ({ navigation }) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const albumCategories = [
    { id: "1", title: "Recents" },
    { id: "2", title: "Favorites" },
    { id: "3", title: "Instagram" },
    { id: "4", title: "Screenshots" },
  ];

  const handleSelectPhoto = (photoId) => {
    if (selectedPhotos.includes(photoId)) {
      setSelectedPhotos(selectedPhotos.filter((id) => id !== photoId));
    } else if (selectedPhotos.length < 4) {
      setSelectedPhotos([...selectedPhotos, photoId]);
    }
  };

  const renderAlbumCategory = ({ item }) => (
    <View style={styles.albumCategory}>
      <TouchableOpacity
        style={[
          styles.photoBox,
          selectedPhotos.includes(item.id) && styles.photoBoxSelected,
        ]}
        onPress={() => handleSelectPhoto(item.id)}
      >
        <Text style={styles.photoText}>Picture</Text>
      </TouchableOpacity>
      <Text style={styles.albumTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select from your album</Text>
        <TouchableOpacity onPress={() => console.log("Next pressed")}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Album Categories */}
      <FlatList
        data={albumCategories}
        renderItem={renderAlbumCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.albumList}
      />

      {/* Selected Photos */}
      <View style={styles.selectedPhotosContainer}>
        <Text style={styles.selectedPhotosTitle}>
          Select 1-4 photos{" "}
          <Text style={styles.selectedPhotosCount}>
            {selectedPhotos.length}
          </Text>
        </Text>
        <FlatList
          data={selectedPhotos}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.selectedPhoto}>
              <Text style={styles.photoText}>Picture</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleSelectPhoto(item)}
              >
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.selectedPhotosList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBDCFD", // Light purple
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  albumList: {
    marginBottom: 16,
  },
  albumCategory: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  photoBox: {
    width: 80,
    height: 80,
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  photoBoxSelected: {
    borderWidth: 2,
    borderColor: "#FF0000", // Red border for selected
  },
  photoText: {
    fontSize: 14,
    color: "#000",
  },
  albumTitle: {
    fontSize: 16,
    color: "#000",
  },
  selectedPhotosContainer: {
    marginTop: 16,
  },
  selectedPhotosTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  selectedPhotosCount: {
    color: "#FF0000", // Red color for count
  },
  selectedPhotosList: {
    flexDirection: "row",
  },
  selectedPhoto: {
    width: 60,
    height: 60,
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  removeButton: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default AlbumSelectionScreen;
