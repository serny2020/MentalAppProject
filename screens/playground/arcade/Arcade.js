import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For the back icon (Install with `expo install @expo/vector-icons`)

const arcadeGames = [
  { name: 'Vibration Scribbles', image: require('../../../assets/image/arcade/vibration.png') },
  { name: 'Sound Scribbles', image: require('../../../assets/image/arcade/sound.png') },
  { name: 'Chaos to Calm', image: require('../../../assets/image/arcade/chaos.png') },
  { name: 'Declutter Dash', image: require('../../../assets/image/arcade/declutter.png') },
  { name: 'Happy Clear', image: require('../../../assets/image/arcade/happy.png') },
  { name: 'Tap to Tune', image: require('../../../assets/image/arcade/tap.png') },
  { name: 'Escape', image: require('../../../assets/image/arcade/escape.png') },
  { name: 'Here & Now', image: require('../../../assets/image/arcade/here.png') },
];

const GameButton = ({ name, image, onPress }) => (
  <TouchableOpacity onPress={() => onPress(name)} activeOpacity={0.7} style={styles.gameButton}>
    <ImageBackground source={image} style={styles.imageBackground} imageStyle={{ borderRadius: 10 }}>
      <Text style={styles.gameText}>{name}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const ArcadeScreen = () => {
  const navigation = useNavigation();

  const handleGamePress = (gameName) => {  
    // Mapping game names to their corresponding screens
    const screenMapping = {
      "Vibration Scribbles": "VibrationScreen",
      "Sound Scribbles": "SoundScreen",
      "Chaos to Calm": "ChaosScreen",
      "Declutter Dash": "DeclutterScreen",
      "Happy Clear": "HappyScreen",
      "Tap to Tune": "TapScreen",
      "Escape": "EscapeScreen",
      "Here & Now": "HereAndNowNavigator",
    };
  
    const screenName = screenMapping[gameName];
  
    if (screenName) {
      navigation.navigate(screenName);
    } else {
      Alert.alert("Error", `No screen found for ${gameName}`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Arcade</Text>

      {/* Arcade Games Grid */}
      <View style={styles.gridContainer}>
        {arcadeGames.map((game, index) => (
          <GameButton key={index} name={game.name} image={game.image} onPress={handleGamePress} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B', // Yellow background
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40, // Adjust for status bar
    left: 20,
    zIndex: 10, // Ensures it's on top
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40, // Space for back button
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to a new line
    justifyContent: 'space-between', // Spacing between buttons
    width: '100%',
    marginTop: 20,
  },
  gameButton: {
    width: '48%', // Ensures two buttons per row
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden', // Ensures borderRadius applies
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    // backgroundColor: 'rgba(255, 255, 255, 0.6)', // Slight background for readability
    padding: 5,
    borderRadius: 5,
  },
});

export default ArcadeScreen;
