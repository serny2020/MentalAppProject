import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have this library installed

const CalendarPicker = ({ onConfirm }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setPickerVisible(false);
    if (onConfirm) onConfirm(date);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dateDisplay}
        onPress={() => setPickerVisible(true)}
      >
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>
            {selectedDate.getFullYear()}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setPickerVisible(false)}
        customHeaderIOS={() => (
          <Text style={styles.header}>Filter by date</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dateDisplay: {
    padding: 0,
    backgroundColor: '#e6e8e6',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    // marginBottom: 10,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  dateText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default CalendarPicker;
