import React from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DREAMS } from '../../../data/dream-data';
import DreamDetails from '../../../components/dreamboard/DreamDetails'

// const DreamDetails = ({ dream }) => {
//   return (
//     <View>
//       <Text style={styles.categoryTitle}>{dream.title}</Text>
//       {/* <Image source={require(dream.image)} style={styles.image} /> */}
//       <Text style={styles.description}>{dream.description}</Text>
//       <Text style={styles.priority}>Priority: {dream.priority}</Text>
//       <Text style={styles.stepsTitle}>Steps to Achieve:</Text>
//       <FlatList
//         data={dream.steps}
//         renderItem={({ item }) => <Text style={styles.stepItem}>{item}</Text>}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };

const DreamDetailScreen = ({ route, navigation }) => {
  const { dreamId } = route.params; // Assuming navigation passes the dreamId

  const selectedDream = DREAMS.find((dream) => dream.id === dreamId);

  if (!selectedDream) {
    return (
      <View style={styles.container}>
        <Text>Dream not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.backText}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </Text>
      <DreamDetails dream={selectedDream} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e1bee7',
  },
  backText: {
    fontSize: 16,
    color: '#6a1b9a',
    marginBottom: 10,
  },
  categoryTitle: {
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
    color: '#4a148c',
    marginBottom: 10,
  },
  priority: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 10,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a148c',
    marginTop: 20,
    marginBottom: 10,
  },
  stepItem: {
    fontSize: 14,
    color: '#6a1b9a',
    marginBottom: 5,
  },
});

export default DreamDetailScreen;
