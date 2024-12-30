import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Laughs = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <View style={styles.header}>
                <TouchableOpacity>
                  <Text style={styles.backText} onPress={() => navigation.goBack()}>
                    Back
                  </Text>
                </TouchableOpacity>
        <Text style={styles.title}>Laughs</Text>
        <TouchableOpacity>
          <Text style={styles.heart}>❤️</Text>
        </TouchableOpacity>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Unexpectedly Funny Fails</Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Wholesome Pranks</Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Animal Antics</Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kids Being Kids</Text>
        <View style={styles.boxContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>

      {/* Upload Section */}
      <Text style={styles.uploadPrompt}>Didn’t like any of these, no worries! Upload your own funny stories here!</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>upload</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcce0',
    padding: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  heart: {
    fontSize: 24,
    color: '#ff69b4',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    backgroundColor: '#e5e5e5',
    width: '48%',
    height: 100,
    borderRadius: 10,
  },
  uploadPrompt: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  uploadButton: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#000',
  },
  uploadText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Laughs;
