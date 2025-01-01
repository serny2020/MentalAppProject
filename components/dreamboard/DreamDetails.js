import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DreamDetail = ({ dream }) => {
  if (!dream) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Dream not found!</Text>
      </View>
    );
  }
//   const handleImageClick = () => {
//     Alert.alert('Image Clicked!', `You clicked on the image of ${dream.title}`);
//     // You can also navigate or perform other actions here
//   };

  const navigation = useNavigation(); // Access navigation prop

  if (!dream) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Dream not found!</Text>
      </View>
    );
  }

  const handleImageClick = () => {
    navigation.navigate('PhotoCollageScreen', { dreamId: dream.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dream.title}</Text>
      <TouchableOpacity onPress={handleImageClick}>
        <Image source={dream.image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.description}>{dream.description}</Text>
      <Text style={styles.priority}>Priority: {dream.priority}</Text>

      <Text style={styles.stepsTitle}>Steps to Achieve:</Text>
      <FlatList
        data={dream.steps}
        renderItem={({ item }) => <Text style={styles.stepItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e1bee7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a148c',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#6a1b9a',
    marginBottom: 10,
  },
  priority: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 20,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a148c',
    marginBottom: 10,
  },
  stepItem: {
    fontSize: 14,
    color: '#6a1b9a',
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default DreamDetail;
