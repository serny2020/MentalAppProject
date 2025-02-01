import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Icons for Bookmark & Add

const categories = [
  { title: "All Videos", image: require('../../../assets/image/laughs/videoBlock.png') },
  { title: "Funny bloopers", image: require('../../../assets/image/laughs/videoBlock.png') },
  { title: "Favorites", image: require('../../../assets/image/laughs/videoBlock.png') },
];

const SavedVideosScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Top Row (Back, Bookmark, Add) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
          <Image source={require('../../../assets/image/icon/saved.png')} style={styles.localImage} />
        <TouchableOpacity>
          <Feather name="plus-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Saved</Text>

      {/* Categories Grid */}
      <View style={styles.gridContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.gridItem}>
            <Image source={category.image} style={styles.thumbnail} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF99CC', // Pink background
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '45%',
    alignItems: 'center',
    marginBottom: 20,
  },
  thumbnail: {
    width: '100%',
    height: 120,
    backgroundColor: '#E0E0E0', // Placeholder color
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SavedVideosScreen;
