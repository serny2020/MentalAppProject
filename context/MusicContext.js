import React, { createContext, useState, useEffect } from "react";
import { Audio } from "expo-av";

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicToggle = async () => {
    if (!sound) {
      try {
        const { sound: newSound } = await Audio.Sound.createAsync(
          require("../assets/media/music.mp3")
        );
        setSound(newSound);
        await newSound.playAsync();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error loading music:", error);
      }
    } else {
      try {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error toggling music:", error);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <MusicContext.Provider value={{ isPlaying, handleMusicToggle }}>
      {children}
    </MusicContext.Provider>
  );
};

export { MusicContext, MusicProvider };
