import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MoodCheckInSummary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle-outline" size={30} color="#9b59b6" />
          </TouchableOpacity>
          <Text style={styles.title}>Your Daily Mood Check-in Summary</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Ionicons name="close-circle-outline" size={30} color="#9b59b6" />
          </TouchableOpacity>
        </View>

        {/* Date and Time */}
        <Text style={styles.dateTime}>Dec 14, 2024   7:22pm</Text>

        {/* Content Section */}
        <Text style={styles.sectionHeader}>Tell us more about what happened:</Text>
        <Text style={styles.content}><Text style={styles.bold}>I feel</Text> sad</Text>
        <Text style={styles.content}><Text style={styles.bold}>My emotions</Text> hopeless lonely</Text>
        <Text style={styles.content}><Text style={styles.bold}>Because of</Text> job studies</Text>

        <Text style={styles.sectionHeader}>Cause in detail:</Text>
        <Text style={styles.listItem}>• I didn’t find a job after graduation. I am a loser. I can’t do anything.</Text>
        <Text style={styles.listItem}>• I am supposed to study all day, but I was lazy to sleep all day.</Text>
        <Text style={styles.listItem}>• I hate myself.</Text>

        <Text style={styles.sectionHeader}>What thoughts are unhelpful for you?</Text>
        <Text style={styles.listItem}>• I am a loser.</Text>
        <Text style={styles.listItem}>• I can’t do anything.</Text>
        <Text style={styles.listItem}>• I am supposed to study all day, but I was lazy to sleep all day.</Text>
        <Text style={styles.listItem}>• I hate myself.</Text>

        <Text style={styles.sectionHeader}>How can you challenge these unhelpful thoughts?</Text>
        <Text style={styles.listItem}>• I got a part-time job in the past.</Text>
        <Text style={styles.listItem}>• I can speak two different languages.</Text>
        <Text style={styles.listItem}>• I am a just a human being. I can’t be productive all day. I am allowed to feel tired and rest my body.</Text>
        <Text style={styles.listItem}>• I actually love myself, otherwise I wouldn’t be taking care of myself for so long.</Text>

        <Text style={styles.sectionHeader}>How can you reframe these unhelpful thoughts to helpful thoughts?</Text>
        <Text style={styles.listItem}>• I haven't found a job yet, but with persistence, learning, and the right strategies, I will find the right opportunity.</Text>
        <Text style={styles.listItem}>• This task is challenging, but I can break it into smaller steps and tackle it.</Text>
        <Text style={styles.listItem}>• I will try to keep a balance between study and taking breaks.</Text>
        <Text style={styles.listItem}>• Even though I'm not perfect, I still love myself. I will take good care of myself.</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ffcc',
    paddingTop: 40, // Added padding to create space at the top
  },
  scrollViewContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    flex: 1,
    fontWeight: 'bold',
    color: '#9b59b6',
    textAlign: 'center',
  },
  dateTime: {
    fontSize: 16,
    color: '#9b59b6',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9b59b6',
    marginTop: 20,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4f4f4f',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    color: '#4f4f4f',
    marginBottom: 5,
    paddingLeft: 10,
  },
});

export default MoodCheckInSummary;
