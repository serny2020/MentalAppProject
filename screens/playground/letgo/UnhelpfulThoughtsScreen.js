import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const UnhelpfulThoughtsScreen = ({navigation, route }) => {
  const { thoughts } = route.params || {}; // Get the passed thoughts

  const handleTrash = () => {
    navigation.navigate("ThrowAsTrashScreen", { thoughts }); // Pass to trash screen
  };

  const handleBurn = () => {
    navigation.navigate("BurnAsAshScreen", { thoughts }); // Pass to burn screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>Back</Text>
        <Text style={styles.headerText}>Next</Text>
      </View>

      <Text style={styles.title}>How would you like to deal with your unhelpful thoughts?</Text>
      
      <Image 
        source={require('../../../assets/image/letgo/UnhelpfulThoughts.png')} 
        style={styles.image} 
        resizeMode="contain"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.trashButton]} onPress={handleTrash}>
          <Text style={styles.buttonText}>Throw them as trash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.burnButton]} onPress={handleBurn}>
          <Text style={styles.buttonText}>Burn them as ash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9FBC0',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trashButton: {
    backgroundColor: '#FFD580',
  },
  burnButton: {
    backgroundColor: '#D3D3D3',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default UnhelpfulThoughtsScreen;
