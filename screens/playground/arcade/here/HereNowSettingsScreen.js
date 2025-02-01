import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Correct Import for Gradient

const settingsOptions = [
  { id: 1, name: "Ball color", icon: require('../../../../assets/image/arcade/hereNow/palette.png') },
  { id: 2, name: "Bumping sound", icon: require('../../../../assets/image/arcade/hereNow/sound.png') },
  { id: 3, name: "Ball type", icon: require('../../../../assets/image/arcade/hereNow/type.png') },
  { id: 4, name: "Bumping speed", icon: require('../../../../assets/image/arcade/hereNow/speed.png') },
];

const HereNowSettingsScreen = () => {
  const navigation = useNavigation();
  const [selectedSetting, setSelectedSetting] = useState(1);

  return (
    <LinearGradient colors={['#E3F3E3', '#B000B5']} style={styles.container}>
      
      {/* Top Row (Cancel, Settings Icon, Done) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.topButton}>Cancel</Text>
        </TouchableOpacity>
        <Ionicons name="settings-outline" size={30} color="black" />
        <TouchableOpacity>
          <Text style={styles.topButton}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Change Settings</Text>

      {/* Settings List */}
      {settingsOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[styles.settingItem, selectedSetting === option.id && styles.selectedSetting]}
          onPress={() => setSelectedSetting(option.id)}
        >
          <Image source={option.icon} style={styles.iconImage} />
          <Text style={styles.settingText}>{option.name}</Text>
        </TouchableOpacity>
      ))}

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
  },
  selectedSetting: {
    backgroundColor: '#D8BFD8', // Light Purple when selected
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  settingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HereNowSettingsScreen;
