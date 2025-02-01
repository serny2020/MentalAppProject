// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [ballColor, setBallColor] = useState('#ff4081');
  const [ballType, setBallType] = useState('color'); // 'color' or 'image'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Ball Color</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#ff4081' }]}
          onPress={() => setBallColor('#ff4081')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#4287f5' }]}
          onPress={() => setBallColor('#4287f5')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#42f554' }]}
          onPress={() => setBallColor('#42f554')}
        />
      </View>

      <Text style={styles.title}>Select Ball Type</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.typeOption, ballType === 'color' && styles.selectedOption]}
          onPress={() => setBallType('color')}
        >
          <Text>Color</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeOption, ballType === 'image' && styles.selectedOption]}
          onPress={() => setBallType('image')}
        >
          <Text>Image</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Start Animation"
        onPress={() => {
          navigation.navigate('HereAndNowScreen', {
            ballColor,
            ballType,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, marginVertical: 10 },
  row: { flexDirection: 'row', marginBottom: 20 },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  typeOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  selectedOption: {
    backgroundColor: '#ddd',
  },
});

export default SettingsScreen;
