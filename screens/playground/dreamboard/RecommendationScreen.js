import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import dreamboard from "../../../data/dreamboard-data";


const RecommendationScreen = ({ navigation }) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const albumCategories = dreamboard.map((item, index) => ({
    id: String(index + 1),
    title: item.category,
    photos: item.images,
  }));

  const handleSelectPhoto = (photo) => {
    if (selectedPhotos.includes(photo)) {
      setSelectedPhotos(selectedPhotos.filter((item) => item !== photo));
    } else if (selectedPhotos.length < 4) {
      setSelectedPhotos([...selectedPhotos, photo]);
    }
  };

  const renderAlbumCategory = ({ item }) => (
    <View style={styles.albumCategory}>
      <Text style={styles.albumTitle}>{item.title}</Text>
      <FlatList
        data={item.photos}
        horizontal
        renderItem={({ item: photo }) => (
          <TouchableOpacity
            style={[
              styles.photoBox,
              selectedPhotos.includes(photo) && styles.photoBoxSelected,
            ]}
            onPress={() => handleSelectPhoto(photo)}
          >
            <Image source={photo} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(photo) => photo.uri || photo.toString()}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SelectTemplateScreen", { selectedPhotos })}
        >
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Select from recommendations</Text>
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
          Selected Photos ({selectedPhotos.length}/4)
        </Text>
        <FlatList
          data={selectedPhotos}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.selectedPhotoContainer}>
              <Image source={item} style={styles.selectedImage} />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleSelectPhoto(item)}
              >
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.uri || item.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1bee7", // Light purple
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  header: {
    flexDirection: "row", // Ensures Back and Next are in the same row
    justifyContent: "space-between", // Places Back on the left, Next on the right
    alignItems: "center", // Centers items vertically within the row
    marginBottom: 20, // Space below the header row
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  // header: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 20,
  // },
  // headerText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#000',
  // },
  headerTitleContainer: {
    alignItems: "center", // Center-aligns the title horizontally
    marginBottom: 16, // Space below the title
  },
  headerTitle: {
    fontSize: 18, // Slightly larger for emphasis
    fontWeight: "bold",
    color: "#000",
    textAlign: "center", // Center-aligns the title text
  },

  albumList: {
    marginBottom: 16,
  },
  albumCategory: {
    marginBottom: 16,
  },
  photoBox: {
    width: 100, // Increase width
    height: 70, // Increase height
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
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
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50", // Green button
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedPhotosTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  selectedPhotosList: {
    flexDirection: "row",
  },
  selectedPhotosContainer: {
    marginTop: 10,
    height: 100,
    // alignItems: "center"
    marginBottom: 10,
  },
  removeButton: {
    position: "absolute",
    top: -5, // Aligned fully within the container
    right: -5,
    width: 20,
    height: 20,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedPhotoContainer: {
    width: 80, // Container width to fit photo and button
    height: 50, // Total height to include photo and button
    alignItems: "center", // Center photo and button horizontally
    justifyContent: "center",
    marginRight: 20, // Spacing between containers
    marginTop: 8,
  },
  photoWrapper: {
    width: 60, // Match photo size
    height: 60,
    backgroundColor: "#D3D3D3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

export default RecommendationScreen;
