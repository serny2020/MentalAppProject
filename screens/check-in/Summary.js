import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCheckInContext } from '../../context/CheckInContext';

const MoodCheckInSummary = ({ navigation }) => {
  const { checkInData } = useCheckInContext(); // Get data from context
  const { moods, emotions, causes, details, thoughts, challenges, reframes } = checkInData;

  const getCurrentTime = () => {
    const now = new Date();
    const options = { month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' };
    return now.toLocaleDateString('en-US', options).replace(',', '');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={30} color="#9b59b6" />
        </TouchableOpacity>
        <Text style={styles.title}>Your Daily Mood Check-in Summary</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Finish")}>
          <Ionicons name="close-circle-outline" size={30} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Date and Time */}
      <Text style={styles.dateTime}>{getCurrentTime()}</Text>
      {/* Redirect Button */}
      <TouchableOpacity style={styles.redirectContainer} onPress={() => navigation.navigate('SummarySample')}>
        <Text style={styles.redirectText}>See how Shaun does it</Text>
        <Ionicons name="arrow-forward-circle-outline" size={20} color="#ff69b4" />
      </TouchableOpacity>
      {/* Content Section */}
      <Text style={styles.sectionHeader}>Tell us more about what happened:</Text>
      <Text style={styles.content}><Text style={styles.bold}>I feel</Text> {moods?.label || 'N/A'}</Text>
      <Text style={styles.content}><Text style={styles.bold}>My emotions</Text> {emotions.length > 0 ? emotions.map(e => e.label).join(', ') : 'N/A'}</Text>
      <Text style={styles.content}><Text style={styles.bold}>Because of</Text> {causes.length > 0 ? causes.map(c => c.label).join(', ') : 'N/A'}</Text>

      <Text style={styles.sectionHeader}>Cause in detail:</Text>
      {details ? <Text style={styles.listItem}>{details}</Text> : <Text style={styles.listItem}>N/A</Text>}

      <Text style={styles.sectionHeader}>What thoughts are unhelpful for you?</Text>
      {thoughts ? <Text style={styles.listItem}>{thoughts}</Text> : <Text style={styles.listItem}>N/A</Text>}

      <Text style={styles.sectionHeader}>How can you challenge these unhelpful thoughts?</Text>
      {challenges ? <Text style={styles.listItem}>{challenges}</Text> : <Text style={styles.listItem}>N/A</Text>}

      <Text style={styles.sectionHeader}>How can you reframe these unhelpful thoughts to helpful thoughts?</Text>
      {reframes ? <Text style={styles.listItem}>{reframes}</Text> : <Text style={styles.listItem}>N/A</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ffcc',
    padding: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
redirectContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
},
  title: {
    fontSize: 20,
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
