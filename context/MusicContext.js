import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(true); // Default to music playing
    const soundRef = useRef(null); // Reference to store the sound object

    // Load the music when the provider is initialized
    useEffect(() => {
        const loadMusic = async () => {
            try {
                const { sound } = await Audio.Sound.createAsync(
                    require('../assets/media/music.mp3') // Replace with your music file path
                );
                soundRef.current = sound;
                sound.setIsLoopingAsync(true); // Enable looping

                if (isMusicPlaying) {
                    await sound.playAsync();
                }
            } catch (error) {
                console.error("Error loading music:", error);
            }
        };

        loadMusic();

        return () => {
            // Cleanup the sound when the provider is unmounted
            if (soundRef.current) {
                soundRef.current.unloadAsync();
            }
        };
    }, []);

    // Function to toggle music playback
    const toggleMusic = async () => {
        const sound = soundRef.current; // Access the sound instance

        if (!sound) return;

        try {
            if (isMusicPlaying) {
                await sound.pauseAsync();
                setIsMusicPlaying(false);
            } else {
                await sound.playAsync();
                setIsMusicPlaying(true);
            }
        } catch (error) {
            console.error("Error toggling music:", error);
        }
    };

    return (
        <MusicContext.Provider value={{ isMusicPlaying, toggleMusic }}>
            {children}
        </MusicContext.Provider>
    );
};

export const useMusic = () => useContext(MusicContext);
