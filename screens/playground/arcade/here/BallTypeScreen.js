// BallTypeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const BallTypeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { currentBallType } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Ball Type</Text>
      <TouchableOpacity
        style={[styles.typeOption, currentBallType === 'color' && styles.selectedOption]}
        onPress={() => {
          navigation.navigate('HereNowSettingsScreen', { selectedBallType: 'color' });
        }}
      >
        <Text style={styles.optionText}>Color Ball</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.typeOption, currentBallType === 'image' && styles.selectedOption]}
        onPress={() => {
          navigation.navigate('HereNowSettingsScreen', { selectedBallType: 'image' });
        }}
      >
        <Text style={styles.optionText}>Image Ball</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  typeOption: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginVertical: 10,
    width: '60%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#ddd',
  },
  optionText: {
    fontSize: 18,
  },
});

export default BallTypeScreen;
