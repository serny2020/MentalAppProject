import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { title: "Unexpectedly Funny Fails" },
  { title: "Wholesome Pranks" },
  { title: "Animal Antics" },
  { title: "Kids Being Kids" },
];

const LaughsScreen = () => {
  const navigation = useNavigation();

  const handleUploadPress = () => {
    Alert.alert("Upload", "Upload feature coming soon!");
  };

  return (
    <View style={styles.container}>
      
      {/* Top Row (Back & Saved Button) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>Laughs</Text>
        
        {/* Saved Button (Image Redirecting to Saved Videos Screen) */}
        <TouchableOpacity onPress={() => navigation.navigate('SavedVideosScreen')}>
          <Image source={require('../../../assets/image/icon/saved.png')} style={styles.localImage} />
        </TouchableOpacity>
      </View>

      {/* Scrollable Categories */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categories.map((category, index) => (
          <View key={index}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <View style={styles.videoRow}>
              <TouchableOpacity style={styles.videoBox}>
                <Text style={styles.videoText}>videos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.videoBox}>
                <Text style={styles.videoText}>videos</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Upload Section */}
        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>
            Didn’t like any of these, no worries! Upload your own funny stories here!
          </Text>
          <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPress}>
            <Text style={styles.uploadButtonText}>upload</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  },
  localImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  scrollContainer: {
    paddingBottom: 30, // Space for upload button
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  videoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoBox: {
    width: '45%',
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  videoText: {
    fontSize: 16,
    color: 'black',
  },
  uploadContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  uploadText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  uploadButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LaughsScreen;
